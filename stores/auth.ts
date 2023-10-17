import { Auth, RequestParams, User } from '~/types/auth.types';
import { defineStore } from 'pinia';
const initialAuthState = (): Auth => ({
  user: {} as User,
  token: '',
});

export const useAuthStore = defineStore({
  id: 'auth',

  state: initialAuthState,

  actions: {
    async register(authData: RequestParams) {
      //const response = await this.performFetch('/api/auth/register', 'POST', data);
      await $fetch('/api/auth/register', {
        server: true,
        method: 'POST',
        body: authData,
      })
        .then(response => {
          this.updateStateFromResponse(response as Auth);
          this.persist();
        })
        .catch(error => {
          throw error;
        });
    },

    async login(authData: RequestParams) {
      //const response = await this.performFetch('/api/auth/login', 'POST', data);
      try {
        const config = useRuntimeConfig();
        const response = await $fetch(`${config.public.apiURL}/api/auth/login`, { method: 'post', body: authData });

        this.updateStateFromResponse(response);
        await this.persist();
      } catch (error) {
        throw error;
      }
    },

    updateStateFromResponse(response: unknown) {
      this.user = response?.user;
      this.token = response?.token;
    },

    async persist() {
      try {
        const token = useCookie('token'); // useCookie new hook in nuxt 3
        token.value = this.token;
      } catch (e) {
        console.error('Error persisting authentication data:', e);
      }
    },

    async logout() {
      Object.assign(this, initialAuthState());
      initialProjectState();
    },
  },
});
