export default defineNuxtRouteMiddleware(async to => {
  const user = useSupabaseUser();

  // Check if user is authenticated and trying to access login
  if (user.value && to.name === 'login') {
    return navigateTo({ path: '/' });
  }
});
