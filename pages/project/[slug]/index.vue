<template>
  <div class="row">
    <div class="col"></div>
    <div class="col">
      <nuxt-page />
    </div>
  </div>
</template>

<script setup lang="ts">
//import { Project } from '~/types/project.types';

definePageMeta({
  layout: 'authenticated',
  middleware: 'auth',
});
//const { data } = await useFetch<Project[]>('/api/projects');
//console.table(data);
</script>
