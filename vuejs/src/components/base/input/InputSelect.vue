<template>
  <!-- begin::Label -->
  <div class="form-label">{{ title }}</div>
  <!-- end::Label -->

  <!-- begin::Select -->
  <!-- begin::Select -->
  <a-select
    v-model:value="valueSelect"
    :options="options"
    class="mb-2 w-100 flex justify-between align-items-center"
  ></a-select>
  <!-- end::Select -->
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  title: String,
  valueSelected: String,
  options: Array,
});

const valueSelect = ref(props.valueSelected);

watch(
  () => props.valueSelected,
  (newValue, oldValue) => {
    if (newValue) {
      valueSelect.value = newValue;
    }
  }
);
</script>

<script>
</script>
<style></style>
