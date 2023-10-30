<template>
  <a-form-item v-for="item in items" :label="item.label" :key="items.indexOf(item)">
    <a-input :size="item.size" :type="item.size"></a-input>
  </a-form-item>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
interface FormItem {
  label: string;
  size: string;
  type: string;
}
export default defineComponent({
  name: 'CustomFormInput',
  props: {
    items: {
      type: Array as PropType<FormItem[]>,
      required: true
    }
  },
  setup() {
    return {};
  }
});
</script>
