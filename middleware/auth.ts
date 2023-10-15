import { LocalStorage } from 'quasar';

export default defineNuxtRouteMiddleware(async to => {
  const token = getStoredToken();

  if (!token && to.name !== 'login') {
    return navigateTo('/login');
  }

  //return navigateTo('/');
});

function getStoredToken() {
  try {
    return LocalStorage.getItem('__persisted__auth');
  } catch (e) {
    console.error('Error retrieving persisted auth:', e);
    return undefined;
  }
}
/*
async function performLogout() {
  const authStore = useAuthStore();
  await authStore.logout();
}*/
