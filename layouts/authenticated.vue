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
      <q-page padding>
        <slot />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import LayoutHeader from '~/components/common/LayoutHeader.vue';
import NavigationDrawer from '~/components/common/NavigationDrawer.vue';
</script>
