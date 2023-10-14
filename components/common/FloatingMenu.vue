<template>
  <q-page-sticky position="bottom-right" :offset="fabPos">
    <q-fab
      square
      :ripple="false"
      dense
      flat
      direction="up"
      vertical-actions-align="right"
      color="grey-3"
      class="bg-primary"
      icon="menu"
      :disable="draggingFab"
      v-touch-pan.prevent.mouse="moveFab"
    >
      <q-fab-action
        v-for="fabItem in fabs"
        :key="fabItem.label"
        :to="fabItem.to"
        :label="fabItem.label"
        hide-icon
        flat
        dense
        label-position="right"
        square
        :disable="draggingFab"
        :color="router.currentRoute.value.name === fabItem.to.name ? 'white' : 'grey-3'"
        :class="router.currentRoute.value.name === fabItem.to.name ? 'bg-primary' : 'bg-grey-3 text-grey-8'"
      />
    </q-fab>
  </q-page-sticky>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { allNavigationRoutes } from '~/router/routes';

const fabPos = ref([18, 18]);
const draggingFab = ref(false);

const moveFab = ev => {
  draggingFab.value = ev.isFirst !== true && !ev.isFinal;
  fabPos.value = [fabPos.value[0] - ev.delta.x, fabPos.value[1] - ev.delta.y];
};

const fabs = computed(() => {
  if (!Array.isArray(allNavigationRoutes)) return [];

  return allNavigationRoutes
    .filter(route => route.meta?.floatingMenu)
    .map(route => {
      return {
        to: route,

        label: route.meta?.contentTitle || route.meta.title || route.name,
      };
    });
});
</script>
