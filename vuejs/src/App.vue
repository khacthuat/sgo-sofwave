<template>
  <router-view></router-view>
  <!-- begin::Support -->
  <div class="support">
    <a-float-button-group
      trigger="click"
      type="primary"
      :style="{
        right: '6px',
        bottom: '40vh',
      }"
    >
      <template #icon>
        <CustomerServiceOutlined />
      </template>
      <a-float-button />
      <a-float-button>
        <template #icon>
          <CommentOutlined />
        </template>
      </a-float-button>
    </a-float-button-group>
  </div>
  <!-- end::Support -->

  <!-- begin::Back to top -->
  <div class="back-to-top">
    <a-back-top :style="{ right: '6px' }">
      <template #icon>
        <ArrowUpOutlined />
      </template>
    </a-back-top>
  </div>
  <!-- end::Back to top -->
</template>


<script setup>
import {
  CustomerServiceOutlined,
  CommentOutlined,
  ArrowUpOutlined,
} from "@ant-design/icons-vue";
</script>

<script>
export default {};
</script>

<style></style>
