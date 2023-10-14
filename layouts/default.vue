<template>
  <q-layout
    id="safeArea"
    view="lHh lpr lFf"
    container
    style="min-height: 100vh"
    class="default-layout shadow-2 rounded-borders"
  >
    <layout-header />
    <q-page-container>
      <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in">
        <q-page padding>
          <slot />
        </q-page>
      </transition>
    </q-page-container>
  </q-layout>
</template>
<script setup lang="ts">
import LayoutHeader from '~/components/common/LayoutHeader.vue';
</script>
