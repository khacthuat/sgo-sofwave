<template>
  <div class="mb-3">
    <!-- begin::Label -->
    <div class="required form-label">
      {{ title }}
    </div>
    <!-- end::Label -->

    <!-- begin::Input -->
    <div>
      <a-input-group>
        <a-textarea
          :placeholder="placeholder"
          :rows="rows"
          :value="value"
          :maxlength="200"
          style="width: calc(100% - 46px)"
        />
        <a-button type="primary" class="absolute z-2 text-black h-100">
          <SendOutlined
        /></a-button>
      </a-input-group>
    </div>
    <!-- end::Input -->
  </div>
</template>

<script setup>
import { SendOutlined } from "@ant-design/icons-vue";
</script>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    placeholder: {
      type: String,
    },
    rows: {
      type: Number,
      default: 4,
    },
    value: {
      type: String,
    },
  },
};
</script>
<style></style>
