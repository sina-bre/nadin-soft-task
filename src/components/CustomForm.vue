<template>
  <a-form :layout="layout">
    <a-form-item v-for="item in items" :label="item.label" :key="items.indexOf(item)">
      <a-input :size="item.size" :type="item.size"></a-input>
    </a-form-item>
  </a-form>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
interface FormItem {
  label: string;
  size: string;
  type: string;
}
export default defineComponent({
  name: 'CustomForm',
  props: {
    items: {
      type: Array as PropType<FormItem[]>,
      required: true
    },
    layout: {
      type: String,
      required: true
    }
  },
  setup() {
    return {};
  }
});
</script>
