<template>
  <q-drawer
    show-if-above
    :width="200"
    :breakpoint="500"
    v-model="leftDrawerOpen"
    side="left"
    class="navigation-drawer dark-page"
  >
    <q-list padding>
      <q-item v-for="item in navItems" :key="item.title" :to="item.to">
        <q-item-section avatar>
          <q-icon :name="item.icon" />
        </q-item-section>

        <q-item-section> {{ item.title }} </q-item-section>
      </q-item>
    </q-list>
  </q-drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const leftDrawerOpen = ref(false);

const navItems = [
  {
    title: 'blog',
    to: '/',
    icon: 'newspaper',
  },
  {
    title: 'projects',
    to: '/projects',
    icon: 'rocket',
  },
  {
    title: 'logout',
    to: '/logout',
    icon: 'logout',
  },
  {
    title: 'privacy',
    to: '/privacy',
    icon: 'policy',
  },
  {
    title: 'terms',
    to: '/terms',
    icon: 'gavel',
  },
];
</script>
