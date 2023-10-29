<template>
  <a-row justify="center">
    <custom-form layout="vertical" :items="items" />
  </a-row>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import CustomForm from '@/components/CustomForm.vue';
export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Register',
  components: {
    CustomForm
  },
  setup() {
    const items = [
      {
        label: 'Name',
        size: 'lg',
        type: 'text'
      },
      {
        label: 'Email',
        size: 'lg',
        type: 'text'
      },
      {
        label: 'Password',
        size: 'lg',
        type: 'password'
      }
    ];
    interface FormState {
      name: string;
      email: string;
      password: string;
    }
    const formState = reactive<FormState>({
      name: '',
      email: '',
      password: ''
    });
    return {
      formState,
      items
    };
  }
});
</script>
