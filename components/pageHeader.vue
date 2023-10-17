<template>
  <h1 class="page-header text-primary">
    {{ routeName }}
  </h1>
</template>

<script setup lang="ts">
const route = useRoute();
const routeName = route.name;
</script>
