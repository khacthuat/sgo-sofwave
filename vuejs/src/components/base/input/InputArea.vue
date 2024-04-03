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
          v-model:value="content"
          :maxlength="200"
          :style="{ width: type === 'comment' ? 'calc(100% - 46px)' : '100%' }"
        />
        <a-button
          type="primary"
          class="absolute h-100 bg-[#654321] text-white hover:text-black"
          @click="onsubmit"
          v-if="type == 'comment'"
        >
          <SendOutlined class="" />
        </a-button>
      </a-input-group>
    </div>
    <!-- end::Input -->
  </div>
</template>

<script setup>
import { ref } from "vue";
import { SendOutlined } from "@ant-design/icons-vue";

const emits = defineEmits(["submitComment"]);
const content = ref("");

const onsubmit = () => {
  emits("submitComment", content.value);
  content.value = "";
};
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
    type: {
      type: String,
      default: "textarea",
    },
  },
};
</script>
<style>
</style>
