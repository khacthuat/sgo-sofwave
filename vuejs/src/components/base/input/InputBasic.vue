<template>
  <div class="mb-3">
    <!-- begin::Label -->
    <div class="required form-label">
      {{ title }}
    </div>
    <!-- end::Label -->

    <!-- begin::Input -->

    <a-input
      :placeholder="placeholder"
      v-model:value="valueText"
      @input="() => emits('input', valueText)"
    />
    <!-- end::Input -->
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  title: String,
  placeholder: String,
  value: {
    type: String,
    default: "",
  },
});

const emits = defineEmits(["input"]);

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
