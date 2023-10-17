export default defineNuxtRouteMiddleware(async to => {
  // const token = useCookie('token');
  const user = useSupabaseUser();
  console.log('user', user);

  if (user && to.name === 'login') {
    return navigateTo({ path: '/' });
  }
});
