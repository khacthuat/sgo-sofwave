<template>
    <!-- begin::Carousel Container -->
    <div class="flex justify-end">
        <a-carousel
            class="w-100 h-100"
            arrows
            dots-class="slick-dots slick-thumb"
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
                <div
                    class="custom-slick-arrow bg-transparent"
                    style="right: 10px"
                >
                    <RightCircleOutlined class="" />
                </div>
            </template>
            <!-- end::Arrow -->

            <!-- begin::Paging -->
            <template #customPaging="props">
                <div class="flex">
                    <a class="flex">
                        <img :src="getImgUrl(props.i)" />
                    </a>
                </div>
            </template>
            <!-- end::Paging -->

            <div
                v-for="item in 4"
                :key="item"
                class="d-flex align-items-center justify-center w-100"
            >
                <img :src="getImgUrl(item - 1)" />
            </div>
        </a-carousel>
    </div>
    <!-- end::Carousel Container -->
</template>

<script setup>
import { ref } from "vue";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons-vue";

// begin: carousel
const baseUrl =
    "https://raw.githubusercontent.com/vueComponent/ant-design-vue/main/components/carousel/demo/";

const current = ref(2);
var totalLand = "Hiện có 1000 bất động sản";
var normal = "Thông thường";

const getImgUrl = (i) => {
    return `${baseUrl}abstract0${i + 1}.jpg`;
};
// end: carousel
</script>

<script>
export default {};
</script>
<style></style>
