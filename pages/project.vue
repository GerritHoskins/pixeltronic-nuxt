<template>
  <div class="q-pa-md project">
    <page-header>Projects</page-header>

    <div class="row">
      <div class="col-xs-12 col-md-6">
        <project-list-projects />
      </div>
      <div class="col-xs-12 col-md-5 offset-md-1">
        <q-btn
          label="Add new project"
          :to="{ name: 'add-project' }"
          icon="add"
          align="around"
          class="btn-fixed-width"
          text-color="primary"
          color="secondary"
          :ripple="false"
          no-caps
        />
        <q-separator color="primary" class="q-mt-md" />

        <nuxt-page />
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
