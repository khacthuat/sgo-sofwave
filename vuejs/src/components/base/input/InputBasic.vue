<template>
  <div class="mb-3">
    <!-- begin::Label -->
    <div class="required form-label">
      {{ title }}
    </div>
    <!-- end::Label -->

    <!-- begin::Input -->
    <div class="form-control mb-2">
      <a-input :placeholder="placeholder" />
    </div>
    <!-- end::Input -->
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    placeholder: {
      type: String,
    },
  },
};
</script>
<style></style>
