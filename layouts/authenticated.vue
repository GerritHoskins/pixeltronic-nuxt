<template>
  <q-layout
    id="safeArea"
    view="hHh LpR fFf"
    container
    style="min-height: 100vh"
    class="authenticated-layout shadow-2 rounded-borders"
  >
    <layout-header />

    <navigation-drawer />

    <q-page-container>
      <page-header />
      <slot />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import LayoutHeader from '~/components/layoutHeader.vue';
import NavigationDrawer from '~/components/navigationDrawer.vue';
</script>
