<template>
  <div class="q-pa-md blog items-start q-gutter-md blog"></div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'authenticated',
  //middleware: 'auth',
  icon: 'newspaper',
  name: 'index',
});

//const { find } = useStrapi4();
//const { data } = (await find('articles')) || {};
</script>
