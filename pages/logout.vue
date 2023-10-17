<template>
  <div class="logout" />
</template>

<script setup>
definePageMeta({
  layout: 'authenticated',
  //middleware: 'auth',
  name: 'logout',
  icon: 'logout',
});

const user = useSupabaseUser();
const supabase = useSupabaseClient();
const loading = ref(false);

try {
  loading.value = true;
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
  user.value = null;
} catch (error) {
  alert(error.message);
} finally {
  loading.value = false;
}
//await useFetch<Project[]>('/api/auth/logout');
</script>
