<template>
  <nuxt-loading-indicator color="#5ce0bc" :throttle="50" />
  <nuxt-layout>
    <nuxt-page />
  </nuxt-layout>
</template>

<script setup lang="ts">
import { Screen } from 'quasar';
Screen.setSizes({ sm: 300, md: 500, lg: 1000, xl: 2000 });
</script>
