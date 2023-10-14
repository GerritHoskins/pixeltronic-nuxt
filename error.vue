<template>
  <q-layout
    id="safeArea"
    view="lHh lpr lFf"
    container
    style="min-height: 100vh"
    class="authenticated-layout shadow-2 rounded-borders"
  >
    <div class="fullscreen bg-primary text-accent text-center q-pa-md flex flex-center">
      <div>
        <div style="font-size: 30vh">404</div>

        <div class="text-h2 text-accent" style="opacity: 0.4">Oops. Nothing here...</div>
        <q-btn class="q-mt-xl" :ripple="false" no-caps label="Back" type="submit" color="primary" to="/" />
      </div>
    </div>
  </q-layout>
</template>
<script setup lang="ts"></script>
