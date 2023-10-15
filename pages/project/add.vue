<template>
  <aside-menu>
    <q-form @submit.prevent="handleSubmit" class="add-project q-gutter-md q-mt-md">
      <q-input
        v-model="name"
        :rules="[rules.required]"
        label="Title"
        name="name"
        placeholder="Title"
        required
        square
        outlined
      />
      <q-input
        v-model="description"
        :rules="[rules.required]"
        label="Description"
        name="desc"
        placeholder="Description"
        required
        square
        outlined
      />
      <q-file type="file" name="file" v-model="file" label="File name" square outlined />
      <div v-if="file">{{ file.name }}</div>
      <q-btn
        :disabled="!isValid"
        type="submit"
        label="Submit"
        text-color="primary"
        color="secondary"
        :ripple="false"
        no-caps
      />
    </q-form>
  </aside-menu>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import { useProjectStore } from '~/stores/project';
import { useRouter } from 'vue-router';
import AsideMenu from '~/components/common/AsideMenu.vue';
import { ProjectAddRequestParams } from '~/types/project.types';

definePageMeta({
  layout: 'authenticated',
  name: 'add-project',
  middleware: 'auth',
});

const name = ref('');
const description = ref('');
const file = ref<File | undefined>();

const rules = {
  required: (value: string) => !!value || 'This field is required.',
};

const isValid = computed(() => {
  return name.value && description.value && (!file.value || (file.value && file.value?.name));
});

const projectStore = useProjectStore();
const router = useRouter();
const handleSubmit = async () => {
  if (isValid.value) {
    const data: ProjectAddRequestParams = {
      name: name.value,
      desc: description.value,
      file: null,
      fileName: '',
    };

    if (file.value) {
      data.file = file.value;
      data.fileName = file.value.name;
    }

    await projectStore.add(data);
    await router.push({ name: 'projects' });
  }
};
</script>
