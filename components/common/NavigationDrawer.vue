<template>
  <q-drawer show-if-above v-model="leftDrawerOpen" side="left" class="navigation-drawer dark-page">
    <q-list padding>
      <q-item v-for="fabItem in tabs" :key="fabItem.label" clickable :to="{ name: fabItem.to.name }">
        <q-item-section avatar>
          <q-icon :name="fabItem.icon" />
        </q-item-section>

        <q-item-section> {{ fabItem.label }} </q-item-section>
      </q-item>
    </q-list>
  </q-drawer>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { allNavigationRoutes } from '~/router/routes';

const leftDrawerOpen = ref(false);

const tabs = computed(() => {
  if (!Array.isArray(allNavigationRoutes)) return [];

  return allNavigationRoutes
    .filter(route => route.meta?.floatingMenu)
    .map(route => {
      return {
        to: route,
        label: route.meta?.contentTitle || route.meta.title || route.name,
        icon: route.meta?.icon || 'inbox',
      };
    });
});
</script>
