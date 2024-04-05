<template>
  <!-- begin::Carousel Container -->
  <div class="flex justify-end">
    <a-carousel
      class="w-100 h-100"
      arrows
      dots-class="slick-dots slick-thumb"
      autoplay
    >
      <!-- begin::Arrow -->
      <template #prevArrow>
        <div
          class="custom-slick-arrow bg-transparent"
          style="left: 10px; z-index: 1"
        >
          <LeftCircleOutlined class="" />
        </div>
      </template>
      <template #nextArrow>
        <div class="custom-slick-arrow bg-transparent" style="right: 10px">
          <RightCircleOutlined class="" />
        </div>
      </template>
      <!-- end::Arrow -->

      <!-- begin::Paging -->
      <template #customPaging="props">
        <a class="flex">
          <img class="" :src="getImgUrl(props.i)" />
        </a>
      </template>
      <!-- end::Paging -->
      <div
        v-for="item in 3"
        :key="item"
        class="d-flex align-items-center justify-center w-100"
      >
        <img :src="getImgUrl(item - 1)" class="" />
      </div>
    </a-carousel>
  </div>
  <!-- end::Carousel Container -->
</template>

<script setup>
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons-vue";

// begin: carousel
const baseUrl =
  "https://raw.githubusercontent.com/vueComponent/ant-design-vue/main/components/carousel/demo/";

const getImgUrl = (i) => {
  return "https://file4.batdongsan.com.vn/2024/03/29/20240329141419-303a_wm.jpg";
};
// end: carousel
</script>

<script>
export default {};
</script>
<style>
.custom-slick-arrow {
  opacity: 1 !important;
  color: white !important;
}

.custom-slick-arrow:hover {
  color: #cfc9c9 !important;
}
</style>
