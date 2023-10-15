<template>
  <q-page-sticky position="bottom-right" :offset="fabPos">
    <q-fab
      square
      :ripple="false"
      dense
      flat
      direction="up"
      vertical-actions-align="right"
      color="primary"
      class="bg-secondary text-primary"
      icon="menu"
      :disable="draggingFab"
      v-touch-pan.prevent.mouse="moveFab"
      v-if="fabs.length > 0"
    >
      <q-fab-action
        v-for="fabItem in fabs"
        :key="fabItem.label"
        :to="fabItem.to"
        :label="fabItem.label"
        hide-icon
        label-position="right"
        :disable="draggingFab"
        :class="isCurrentRoute(fabItem.to) ? 'bg-secondary text-primary' : 'bg-secondary text-white'"
        :ripple="false"
        no-caps
        square
      />
    </q-fab>
  </q-page-sticky>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import { allNavigationRoutes } from '~/router/routes';

const fabPos = ref([18, 18]);
const draggingFab = ref(false);
const route = useRoute(); // Get the current route from Vue Router

const moveFab = (ev: TouchEvent) => {
  draggingFab.value = ev.isFirst !== true && !ev.isFinal;
  fabPos.value = [fabPos.value[0] - ev.delta.x, fabPos.value[1] - ev.delta.y];
};

const isCurrentRoute = to => {
  return route.name === to.name;
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
