<template>
  <div class="login-page full-height justify-center items-center">
    <div style="max-width: 560px; padding-top: 10rem; padding-bottom: 10rem">
      <page-header />
      <account v-if="user" />
      <auth v-else />
    </div>
  </div>
</template>

<script setup>
import Auth from '~/components/auth.vue';
import Account from '~/components/account.vue';
import PageHeader from '~/components/pageHeader.vue';

definePageMeta({
  layout: 'default',
  middleware: 'auth',
  name: 'Login',
});
const user = useSupabaseUser();
</script>
