<template>
  <div class="q-pa-md project">
    <div class="row justify-center items-center">
      <div class="col-xs-12 col-md-6">
        <q-btn
          label="Add new project"
          :to="{ name: 'add-project' }"
          icon="add"
          align="around"
          class="q-mb-md"
          text-color="primary"
          color="secondary"
          :ripple="false"
          no-caps
        />

        <nuxt-page />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'authenticated',
  name: 'projects',
  middleware: 'auth',
  icon: 'rocket',
});

//const { data } = await useFetch<Project[]>('/api/projects');
//console.table(data);
</script>
