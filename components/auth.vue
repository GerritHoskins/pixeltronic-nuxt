<script setup>
const supabase = useSupabaseClient();

const loading = ref(false);
const email = ref('');

const handleLogin = async () => {
  try {
    loading.value = true;
    const { error } = await supabase.auth.signInWithOtp({ email: email.value });
    if (error) throw error;
    alert('Check your email for the login link!');
  } catch (error) {
    alert(error.error_description || error.message);
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <q-form @submit.prevent="handleLogin">
    <q-input
      class="full-width"
      square
      outlined
      label="Email address"
      type="email"
      placeholder="Your email"
      v-model="email"
    />
    <div class="q-pt-sm">
      <q-btn
        type="submit"
        class="full-width"
        text-color="primary"
        color="secondary"
        :ripple="false"
        no-caps
        :label="loading ? 'Loading' : 'Send link'"
        :disabled="loading"
      />
    </div>
  </q-form>
</template>
