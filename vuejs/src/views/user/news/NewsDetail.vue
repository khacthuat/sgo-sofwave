<template>
  <!-- begin::Primary Content -->
  <div class="flex flex-col col-12 col-xl-10 xl:pr-[30px]">
    <!-- begin::Main Content -->
    <div class="w-full">
      <!-- begin::Breadcrumb -->
      <ThePageHeader />
      <!-- end::Breadcrumb -->

      <!-- begin::Carousel Media -->
      <Carousel />
      <!-- end::Carousel Media  -->

      <!-- begin::Detail Infor -->
      <div class="detail-infor">
        <!-- begin::Short Infor -->
        <div class="short-infor mt-3 border-b-[1px]">
          <div class="py-4 flex flex-wrap justify-between">
            <div class="infor flex justify-between">
              <div class="price">
                <a-descriptions title="Mức giá">
                  <a-descriptions-item label="">
                    {{ formatMoney(data.price) }}
                  </a-descriptions-item>
                </a-descriptions>
              </div>
              <div class="area mx-5">
                <a-descriptions title="Diện tích">
                  <a-descriptions-item label="">
                    {{ data.area }} m&sup2
                  </a-descriptions-item>
                </a-descriptions>
              </div>
            </div>
            <div class="feature flex ml-auto align-items-center">
              <a-tooltip placement="top">
                <template #title>
                  <span>Chia sẻ</span>
                </template>
                <a-button class="border-0 hover:bg-slate-200"
                  ><ShareAltOutlined :style="{ fontSize: '24px' }"
                /></a-button>
              </a-tooltip>
              <a-tooltip placement="top">
                <template #title>
                  <span>Báo cáo</span>
                </template>
                <a-button class="border-0"
                  ><WarningOutlined :style="{ fontSize: '24px' }"
                /></a-button>
              </a-tooltip>
              <a-tooltip placement="top">
                <template #title>
                  <span>Lưu tin</span>
                </template>
                <a-button class="border-0"
                  ><HeartOutlined :style="{ fontSize: '24px' }"
                /></a-button>
              </a-tooltip>

              <a-tooltip placement="top">
                <template #title>
                  <span>Sao chép nội dung</span>
                </template>
                <a-button class="border-0" @click="copyText(data.description)"
                  ><CopyOutlined :style="{ fontSize: '24px' }"
                /></a-button>
              </a-tooltip>
            </div>
          </div>
        </div>
        <!-- end::Short Infor -->

        <!-- begin::Description -->
        <div class="description mt-3 border-b-[1px]">
          <a-descriptions title="Thông tin mô tả">
            <a-descriptions-item label="">
              {{ data.description }}
            </a-descriptions-item>
          </a-descriptions>
        </div>
        <!-- end::Description -->

        <!-- begin::Feature -->
        <div class="feature mt-3 border-b-[1px]">
          <a-descriptions title="Đặc điểm bất động sản">
            <a-descriptions-item label="Diện tích">
              {{ data.area }} m&sup2
            </a-descriptions-item>
            <a-descriptions-item label="Pháp lý">
              Hợp đồng mua bán
            </a-descriptions-item>
            <a-descriptions-item label="Mức giá">
              {{ formatMoney(data.price) }}
            </a-descriptions-item>
          </a-descriptions>
        </div>
        <!-- end::Feature -->

        <!-- begin::Date -->
        <div class="date mt-3 border-b-[1px]">
          <a-descriptions title="Thời gian">
            <a-descriptions-item label="Ngày đăng">
              {{ formatDate(data.created_at) }}
            </a-descriptions-item>
            <a-descriptions-item label="Mã tin"> 39369169 </a-descriptions-item>
          </a-descriptions>
        </div>
        <!-- end::Date -->

        <!-- begin::Comments -->
        <Comment :comments="comments" />
        <!-- end::Comments -->
      </div>
      <!-- end::Detail Infor -->
    </div>
    <!-- end::Main Content -->
  </div>
  <!-- end::Primary Content -->

  <!-- begin::Sidebar -->
  <SidebarFilter>
    <template #author>
      <div class="flex flex-col align-items-center">
        <a-avatar
          :size="64"
          :style="{
            backgroundColor: '#f50',
            verticalAlign: 'middle',
          }"
          class=""
        >
          Bách
        </a-avatar>
        <div class="upload-by mt-3">Được đăng bởi</div>
        <div class="author mt-2">
          <h2>Nguyễn Văn Bách</h2>
        </div>
      </div>
    </template>
  </SidebarFilter>
  <!-- end::Sidebar -->
</template>

<script setup>
import {
  HeartOutlined,
  WarningOutlined,
  ShareAltOutlined,
  CopyOutlined,
} from "@ant-design/icons-vue";
import { ref } from "vue";
import { useRoute } from "vue-router";

import getPostAPI from "../../../api/posts/getDetails";
import formatMoney from "../../../utils/formatMoney";
import formatDate from "../../../scripts/formatDate";
import copyText from "../../../scripts/copyText";

const route = useRoute();

const data = ref({});
const comments = ref([]);
if (route.params.id) {
  const postId = route.params.id;
  const fetchPostsList = async (id) => {
    const post = await getPostAPI.getById(id);
    data.value = {
      id: post.id,
      username: post.user.name,
      title: post.title,
      description: post.description,
      price: post.price,
      area: post.area,
      address: post.address,
      created_at: post.created_at,
      view: 1000,
      sold_status: post.sold_status,
      status: post.status.name,
    };
  };

  fetchPostsList(postId);

  const fetchCommentsList = async (id) => {
    comments = await getPostAPI.getComments(id);
    console.log(comments);
  };

  fetchCommentsList(postId);
}
</script>

<script>
import ThePageHeader from "../../../components/ThePageHeader.vue";
import Carousel from "../../../components/base/carousel/Carousel.vue";
import Comment from "../../../components/base/comment/Comment.vue";
import SidebarFilter from "../../../components/base/sidebar/SidebarFilter.vue";

export default {
  components: {
    ThePageHeader,
    Carousel,
    Comment,
    SidebarFilter,
  },

  methods: {},
};
</script>

<style scoped>
:deep(.slick-arrow.custom-slick-arrow) {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: black;
  background-color: white;
  transition: ease all 0.3s;
  opacity: 0.3;
  z-index: 1;
}
:deep(.slick-arrow.custom-slick-arrow:before) {
  display: none;
}

:deep(.slick-dots) {
  position: relative;
  height: auto;
}

:deep(.slick-thumb) {
  bottom: -10px;
}
:deep(.slick-thumb li) {
  width: 60px;
  height: 45px;
}

:deep(.slick-thumb li img) {
  width: 100%;
  height: 100%;
  display: block;
  filter: grayscale(100%);
}

:deep(.slick-thumb li.slick-active) {
  width: 60px;
  height: 45px;
}

:deep(.slick-thumb li.slick-active img) {
  filter: grayscale(0%);
}
</style>
