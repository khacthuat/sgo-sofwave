<template>
  <div class="mb-3">
    <!-- begin::Label -->
    <div class="required form-label">
      {{ title }}
    </div>
    <!-- end::Label -->

    <!-- begin::Input -->
    <div class="form-control mb-2">
      <a-input :placeholder="placeholder" v-model:value="valueText" />
    </div>
    <!-- end::Input -->
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  title: String,
  placeholder: String,
  value: String,
});

const valueText = ref(props.value);
watch(
  () => props.value,
  (newValue, oldValue) => {
    if (newValue) {
      valueText.value = newValue;
    }
  }
);
</script>

<script>
</script>
<style></style>
