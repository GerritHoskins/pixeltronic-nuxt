<template>
  <div class="q-pt-sm">
    <q-btn
      class="full-width q-mb-md"
      text-color="primary"
      color="secondary"
      :ripple="false"
      no-caps
      :label="loading ? 'Loading' : 'Sign in with GitHub'"
      :disabled="loading"
      @click="handleLogin('github')"
    />
    <q-btn
      class="full-width q-mb-md"
      text-color="primary"
      color="secondary"
      :ripple="false"
      no-caps
      :label="loading ? 'Loading' : 'Sign in with Google'"
      :disabled="loading"
      @click="handleLogin('google')"
    />
  </div>
</template>

<script setup lang="ts">
const supabase = useSupabaseClient();

const loading = ref(false);
const handleLogin = async (provider: string) => {
  try {
    loading.value = true;
    if (provider === 'google') {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
          },
        },
      });
      if (error) throw error;
    } else {
      const { error } = await supabase.auth.signInWithOAuth({ provider: 'github' });
      if (error) throw error;
    }
  } catch (error) {
    alert(error.error_description || error.message);
  } finally {
    loading.value = false;
  }
};
</script>
