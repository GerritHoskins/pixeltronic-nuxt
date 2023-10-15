import { Auth, RequestParams, User } from '~/types/auth.types';

const initialAuthState = (): Auth => ({
  user: {} as User,
  token: '',
});

export const useAuthStore = defineStore({
  id: 'auth',

  state: initialAuthState,

  actions: {
    async register(data: RequestParams) {
      const response = await this.performFetch('/api/auth/register', 'POST', data);
      this.updateStateFromResponse(response);
      await this.persist();
    },

    async login(data: RequestParams) {
      const response = await this.performFetch('/api/auth/login', 'POST', data);
      this.updateStateFromResponse(response);
      await this.persist();
    },

    async performFetch(endpoint: string, method: string, data: unknown, headers: Record<string, string>) {
      try {
        const { response } = await usePerformFetch(endpoint, {
          method,
          data,
          headers,
        });

        return response;
      } catch (e) {
        console.error(`Error while fetching ${endpoint}:`, e);
        throw e;
      }
    },

    updateStateFromResponse(response: _AsyncData<unknown, FetchError<unknown> | null>) {
      this.user = response?.user;
      this.token = response?.token;
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
      await this.performFetch('/api/auth/logout', 'POST');
    },
  },
});
