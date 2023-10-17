<template>
  <q-layout
    id="safeArea"
    view="hHh LpR fFf"
    container
    style="min-height: 100vh"
    class="default-layout shadow-2 rounded-borders"
  >
    <layout-header />
    <q-page-container>
      <div class="full-width">
        <div class="flex justify-center items-center">
          <slot />
        </div>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import LayoutHeader from '~/components/layoutHeader.vue';
</script>
