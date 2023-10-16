<script setup lang="ts">
import PageHeader from '~/components/common/PageHeader.vue';

definePageMeta({
  layout: 'authenticated',
  middleware: 'auth',
  name: 'logout',
});
const authStore = useAuthStore();
await authStore.logout().then(() => {
  console.log('logged out');
  navigateTo('/');
});
</script>

<template>
  <page-header>Logout</page-header>
</template>

<style scoped lang="scss"></style>
