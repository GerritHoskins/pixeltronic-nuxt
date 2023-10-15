<template>
  <div class="row">
    <div class="col">
      <project-list-projects />
    </div>
    <div class="col">
      <nuxt-page />
    </div>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  layout: 'authenticated',
  middleware: 'auth',
});
</script>
