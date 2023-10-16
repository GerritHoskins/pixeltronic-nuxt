<template>
  <div class="row edit-project">
    <div>{{ data.name }}</div>
    <div>{{ data.desc }}</div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'authenticated',
  name: 'edit-project',
  middleware: 'auth',
});

const { slug } = useRoute().params;
const { data } = await useFetch(`/api/project/${slug}`);
</script>
