<template>
  <a-row justify="center">
    <a-col :span="6">
      <custom-form
        layout="vertical"
        :items="items"
        :buttonText="buttonText"
        :directionText="directionText"
        :directionLink="directionLink"
      />
    </a-col>
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
        size: 'large',
        type: 'text'
      },
      {
        label: 'Email',
        size: 'large',
        type: 'text'
      },
      {
        label: 'Password',
        size: 'large',
        type: 'password'
      }
    ];
    const buttonText = 'Register';
    const directionText = 'Do you already have an account?';
    const directionLink = {
      text: 'Login',
      path: '/login'
    };

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
      items,
      buttonText,
      directionText,
      directionLink
    };
  }
});
</script>
