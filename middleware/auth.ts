export default defineNuxtRouteMiddleware(async to => {
  const token = useCookie('token');

  if (!token.value && to.name !== 'login') {
    return navigateTo('/login');
  }

  if (token.value && to?.name === 'login') {
    return navigateTo('/');
  }

  if (!token.value && to?.name !== 'login') {
    abortNavigation();
    return navigateTo('/login');
  }
});
