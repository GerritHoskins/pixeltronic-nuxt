<template>
  <q-layout
    id="safeArea"
    view="lHh lpr lFf"
    container
    style="min-height: 100vh"
    class="authenticated-layout shadow-2 rounded-borders"
  >
    <layout-header />
    <q-page-container>
      <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in">
        <q-page padding>
          <floating-menu />
          <slot />
        </q-page>
      </transition>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import LayoutHeader from '~/components/common/LayoutHeader.vue';
import FloatingMenu from '~/components/common/FloatingMenu.vue';

/*const tab = ref(allNavigationRoutes[0]?.path || '');
const tabs = computed(() => {
  if (!Array.isArray(allNavigationRoutes)) return [];

  return allNavigationRoutes
    .filter((route) => route.meta?.footerMenu)
    .map((route) => {
      return {
        to: route,
        label: route.meta?.contentTitle || route.meta.title || route.name,
      };
    });
});*/
</script>
