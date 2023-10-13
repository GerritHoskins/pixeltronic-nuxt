import { defineStore } from 'pinia';
import { LocalStorage } from 'quasar';

import { initialProjectState } from './project';
import { useCrypto } from '~/composables/useCrypto';
import { _AsyncData } from '#app/composables/asyncData';
import { FetchError } from 'ofetch';
const runtimeConfig = useRuntimeConfig();

interface User {
  id: null | string;
  email: null | string;
  token: null | string;
  role: null | string;
}

interface Auth {
  user: User;
  token: string;
}

interface RequestParams {
  email: string;
  password: string;
}

const initialAuthState = (): Auth => ({
  user: {} as User,
  token: '',
});

export const useAuthStore = defineStore({
  id: 'auth',
  state: initialAuthState,
  actions: {
    async register(data: RequestParams) {
      const response = await this.performAuth('/api/auth/register', data);
      this.updateStateFromResponse(response);
      await this.persist();
    },

    async login(data: RequestParams) {
      const response = await this.performAuth('/api/auth/login', data);
      this.updateStateFromResponse(response);
      await this.persist();
    },

    async performAuth(endpoint: string, data: RequestParams) {
      try {
        return await useFetch(runtimeConfig.apiURL + endpoint, {
          method: 'post',
          body: data,
        });
      } catch (e) {
        console.error(`Authentication error on ${endpoint}:`, e);
        throw e;
      }
    },

    updateStateFromResponse(
      response: _AsyncData<unknown, FetchError<unknown> | null>,
    ) {
      this.user = response?.data?.user;
      this.token = response?.data?.token;
    },

    async persist() {
      try {
        const { encrypt } = useCrypto();
        const encryptedData = encrypt(this.token);
        LocalStorage.set('__persisted__auth', encryptedData);
      } catch (e) {
        console.error('Error persisting authentication data:', e);
      }
    },

    async logout() {
      Object.assign(this, initialAuthState());
      initialProjectState();
      LocalStorage.remove('__persisted__auth');
      await useFetch('/api/auth/logout', { method: 'post' });
    },
  },
});
