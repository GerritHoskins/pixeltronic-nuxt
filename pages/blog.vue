<template>
  <div v-if="data" class="q-pa-md items-start q-gutter-md blog">
    <page-header>Blog</page-header>
    <div class="row" v-for="article in data" :key="article.id">
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
  </div>
</template>

<script setup lang="ts">
import PageHeader from '~/components/common/PageHeader.vue';
definePageMeta({
  layout: 'authenticated',
  middleware: 'auth',
  name: 'blog',
});
//const { data } = await useFetch('/api/articles');
//console.table(data);
const { find } = useStrapi4();
const { data } = await find('articles');
console.log(data);
</script>
