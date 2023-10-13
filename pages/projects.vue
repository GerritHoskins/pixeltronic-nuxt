<template>
  <div class="q-pa-md project-page">
    <page-header>Projects</page-header>
    <q-btn
      :ripple="false"
      label="Add new project"
      no-caps
      color="primary"
      :to="{ name: 'projects-add-project' }"
    />
    <div class="q-pt-md">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import PageHeader from '~/components/common/PageHeader.vue';

definePageMeta({
  layout: 'authenticated',
});
</script>
