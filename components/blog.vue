<template>
  <div class="row" v-for="article in data" :key="article.attributes._id">
    <q-card flat bordered class="text-white full-width">
      <q-card-section>
        <div class="text-h6">{{ article.attributes.title }}</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <p>
          {{ article.attributes.description }}
        </p>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <nuxt-link href="https://strapi.io" target="_blank" class="text-white">Read more</nuxt-link>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script setup lang="ts">
import { Article } from '~/types/article.types';

defineProps<{
  data: Article[];
}>();
</script>
