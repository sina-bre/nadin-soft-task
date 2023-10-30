<template>
  <a-form :layout="layout">
    <custom-form-input :items="items" />
    <a-button type="primary" style="width: 100%">{{ buttonText }}</a-button>
    <a-typography-text
      >{{ directionText + '' }}
      <a-typography-link strong>{{ directionLink.text }}</a-typography-link></a-typography-text
    >
  </a-form>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import CustomFormInput from '@/components/CustomFormInput.vue';
interface FormItem {
  label: string;
  size: string;
  type: string;
}
interface DirectionLink {
  text: string;
  path: string;
}

export default defineComponent({
  name: 'CustomForm',
  components: {
    CustomFormInput
  },
  props: {
    layout: {
      type: String,
      required: true
    },
    items: {
      type: Array as PropType<FormItem[]>,
      required: true
    },
    buttonText: {
      type: String,
      required: true
    },
    directionText: {
      type: String,
      required: true
    },
    directionLink: {
      type: Object as PropType<DirectionLink>,
      required: true
    }
  },
  setup() {
    return {};
  }
});
</script>
