<script setup>
const supabase = useSupabaseClient();

const loading = ref(true);
const username = ref('');
const avatar_path = ref('');
const accept = ref(false);

loading.value = true;
const user = useSupabaseUser();

const { data } = await supabase.from('profiles').select('username, avatar_url').eq('id', user.value.id).single();

if (data) {
  username.value = data.username;
  avatar_path.value = data.avatar_url;
}

loading.value = false;

async function updateProfile() {
  try {
    loading.value = true;
    const user = useSupabaseUser();

    const updates = {
      id: user.value.id,
      username: username.value,
      avatar_url: avatar_path.value,
      updated_at: new Date(),
    };

    const { error } = await supabase.from('profiles').upsert(updates, {
      returning: 'minimal', // Don't return the value after inserting
    });
    if (error) throw error;
  } catch (error) {
    alert(error.message);
  } finally {
    loading.value = false;
  }
}

async function signOut() {
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
}
</script>

<template>
  <q-form @submit.prevent="updateProfile">
    <q-input class="full-width" square outlined label="Email" id="email" type="text" :value="user.email" disabled />
    <q-input class="full-width" square label="Username" outlined id="username" type="text" v-model="username" />
    <q-toggle v-model="accept" label="I accept the license and terms" />
    <div class="q-pt-sm">
      <q-btn
        :disable="loading"
        :label="loading ? 'Loading ...' : 'Register'"
        type="submit"
        class="full-width"
        text-color="primary"
        color="secondary"
        :ripple="false"
        no-caps
      />
    </div>

    <div class="q-pt-sm">
      <q-btn
        class="full-width"
        text-color="primary"
        color="secondary"
        :ripple="false"
        no-caps
        @click="signOut"
        :disabled="loading"
        label="Logout"
      />
    </div>
  </q-form>
</template>
