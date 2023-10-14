<template>
  <div class="login-page">
    <div class="row full-height justify-center items-center">
      <div class="col col-md-4 q-gutter-lg vertical-middle self-center justify-center">
        <page-header>{{ isRegisterMode ? 'Register' : 'Login' }}</page-header>
        <q-form @submit="handleSubmit" @reset="reset">
          <q-input
            dense
            filled
            v-model="form.email"
            label="Your email *"
            hint="Email"
            lazy-rules
            :rules="[
              val => (val && val.length > 0) || 'Email is required',
              val => emailPattern.test(val) || 'Please use a valid email',
            ]"
          />
          <q-input
            dense
            filled
            v-model="form.password"
            type="password"
            label="Your password *"
            hint="Password"
            lazy-rules
            :rules="[val => val.length >= 6 || 'Password must be at least 6 characters']"
          />
          <q-input
            v-if="isRegisterMode"
            dense
            v-model="confirmationPassword"
            filled
            type="password"
            label="Confirm your password *"
            hint="Confirm your password"
            lazy-rules
            :rules="[() => form.password === confirmationPassword || 'Passwords do not match']"
          />
          <q-toggle v-if="isRegisterMode" v-model="accept" label="I accept the license and terms" />
          <div class="q-pt-md">
            <q-btn
              :ripple="false"
              no-caps
              :label="isRegisterMode ? 'Register' : 'Login'"
              type="submit"
              color="primary"
            />
            <q-btn
              :ripple="false"
              no-caps
              @click="onRegisterClick"
              :label="isRegisterMode ? 'Already have an account? Login' : 'Dont have an account? Register'"
              color="transparent"
              text-color="primary"
              flat
              dense
            >
            </q-btn>
          </div>
          <div v-if="showError" class="row items-center">
            <div class="col">
              <div class="text-h6" v-text="showError" />
            </div>
          </div>
        </q-form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '~/stores/auth';
import PageHeader from '~/components/common/PageHeader.vue';

definePageMeta({
  layout: 'default',
  name: 'login',
});

const form = reactive({
  email: '',
  password: '',
});

const isRegisterMode = ref(false);
const confirmationPassword = ref('');
const accept = ref(false);

const onRegisterClick = () => (isRegisterMode.value = true);

const emailPattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

const authStore = useAuthStore();
const router = useRouter();

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

  await navigateTo('/');
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
