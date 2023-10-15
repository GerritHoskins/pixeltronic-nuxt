<template>
  <div class="login-page">
    <div class="row full-height justify-center items-center">
      <q-form @submit="handleSubmit" @reset="reset" style="width: 560px">
        <page-header>{{ isRegisterMode ? 'Register' : 'Login' }}</page-header>
        <q-input
          square
          outlined
          v-model="form.email"
          label="Your email *"
          lazy-rules
          :rules="[
            val => (val && val.length > 0) || 'Email is required',
            val => emailPattern.test(val) || 'Please use a valid email',
          ]"
        />
        <q-input
          square
          outlined
          v-model="form.password"
          :type="isPwd ? 'password' : 'text'"
          label="Your password *"
          lazy-rules
          :rules="[val => val.length >= 6 || 'Password must be at least 6 characters']"
        >
        </q-input>
        <q-input
          square
          outlined
          v-if="isRegisterMode"
          v-model="confirmationPassword"
          label="Confirm your password *"
          lazy-rules
          :rules="[() => form.password === confirmationPassword || 'Passwords do not match']"
        />
        <q-toggle v-if="isRegisterMode" v-model="accept" label="I accept the license and terms" />
        <div :class="{ 'q-pt-sm': isRegisterMode }">
          <q-btn
            :label="isRegisterMode ? 'Register' : 'Login'"
            type="submit"
            class="full-width"
            text-color="primary"
            color="secondary"
            :ripple="false"
            no-caps
          />
        </div>

        <div @click="onRegisterClick" class="q-pt-md full-width cursor-pointer">
          {{ isRegisterMode ? 'Already have an account? Login' : 'Dont have an account? Register' }}
        </div>
        <div v-if="showError" class="row items-center">
          <div class="col">
            <div class="text-h6" v-text="showError" />
          </div>
        </div>
      </q-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { useAuthStore } from '~/stores/auth';
import PageHeader from '~/components/common/PageHeader.vue';

definePageMeta({
  layout: 'default',
  middleware: 'auth',
  name: 'login',
});

const form = reactive({
  email: '',
  password: '',
});

const isPwd = ref(true);
const isRegisterMode = ref(false);
const confirmationPassword = ref('');
const accept = ref(false);

const onRegisterClick = () => (isRegisterMode.value = true);

const emailPattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

const authStore = useAuthStore();
const showError = ref();

const handleLoginOrRegister = async () => {
  if (isRegisterMode.value) {
    await authStore.register({
      email: form.email,
      password: form.password,
    });
  } else {
    await authStore.login({ email: form.email, password: form.password });
  }

  await navigateTo('/blog');
};

const handleSubmit = async () => {
  if (isRegisterMode.value && form.password !== confirmationPassword.value) {
    showError.value = 'Passwords do not match.';
    return;
  }

  try {
    await handleLoginOrRegister();
  } catch (error) {
    showError.value = error ? error.toString() : 'Something went wrong.';
  }
};

const reset = () => {
  form.email = '';
  form.password = '';
  confirmationPassword.value = '';
  accept.value = false;
};
</script>
