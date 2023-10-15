<template>
  <div class="q-pa-md project">
    <div class="row justify-center items-center">
      <div class="col-xs-12 col-md-6">
        <page-header>Projects</page-header>
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
        <project-list-projects />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PageHeader from '~/components/common/PageHeader.vue';

definePageMeta({
  layout: 'authenticated',
  name: 'project',
  middleware: 'auth',
});
</script>
