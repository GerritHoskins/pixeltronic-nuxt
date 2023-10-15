<template>
  <q-scroll-area class="full-width" :thumb-style="thumbStyle" :bar-style="barStyle" style="height: 70vh">
    <div class="q-gutter-md">
      <q-intersection
        once
        ssr-prerender
        v-for="project in projects"
        :key="project.name"
        transition="scale"
        class="example-item"
      >
        <q-card flat bordered class="project-card">
          <q-img
            :src="project.file"
            loading="lazy"
            :alt="project.name"
            style="max-width: 100%; height: 150px"
            fit="contain"
            placeholder-src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWBAMAAADOL2zRAAAAG1BMVEXMzMyWlpaqqqq3t7fFxcW+vr6xsbGjo6OcnJyLKnDGAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABAElEQVRoge3SMW+DMBiE4YsxJqMJtHOTITPeOsLQnaodGImEUMZEkZhRUqn92f0MaTubtfeMh/QGHANEREREREREREREtIJJ0xbH299kp8l8FaGtLdTQ19HjofxZlJ0m1+eBKZcikd9PWtXC5DoDotRO04B9YOvFIXmXLy2jEbiqE6Df7DTleA5socLqvEFVxtJyrpZFWz/pHM2CVte0lS8g2eDe6prOyqPglhzROL+Xye4tmT4WvRcQ2/m81p+/rdguOi8Hc5L/8Qk4vhZzy08DduGt9eVQyP2qoTM1zi0/uf4hvBWf5c77e69Gf798y08L7j0RERERERERERH9P99ZpSVRivB/rgAAAABJRU5ErkJggg=="
          >
            <template v-slot:error>
              <div class="absolute-full flex flex-center bg-negative text-white">Cannot load image</div>
            </template>
            <div class="absolute-bottom text-h6">
              {{ project?.name }}
            </div>
          </q-img>

          <q-card-section>
            {{ project?.desc }}
          </q-card-section>
        </q-card>
      </q-intersection>
    </div>
  </q-scroll-area>
</template>

<script lang="ts" setup>
import { computed, onMounted } from 'vue';
import { useProjectStore } from '~/stores/project';
import { Project } from '~/types/project.types';

const thumbStyle = {
  right: '0px',
  borderRadius: '4px',
  backgroundColor: '#5ce0bc',
  width: '2px',
  opacity: 0.75,
};

const barStyle = {
  right: '0px',
  borderRadius: '8px',
  backgroundColor: '#324958',
  width: '4px',
  opacity: 0.2,
};

const projectStore = useProjectStore();

onMounted(async () => {
  await projectStore.all();
});
const projects = computed((): Project[] => projectStore.projects);
</script>

<style lang="scss" scoped>
.project-card {
  width: 99%;
}
</style>
