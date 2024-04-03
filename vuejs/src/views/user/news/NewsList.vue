<template>
  <!-- begin::Primary Content -->
  <div class="flex flex-col col-12 col-xl-10 xl:pr-[30px]">
    <div class="w-full">
      <ThePageHeader />
    </div>

    <!-- begin::Content Navbar -->
    <div class="flex align-content-center justify-between my-3 w-full">
      <!-- begin::Total land -->
      <div>Hiện có {{ totalLand }} bất động sản</div>
      <!-- end::Total land -->
    </div>
    <!-- end::Content Navbar -->

    <!-- begin::Main Content -->
    <div class="space-y-10">
      <!-- begin::Content Item -->
      <a-list
        item-layout="vertical"
        size="large"
        :data-source="data"
        :pagination="pagination"
      >
        <template #header>
          <div class="flex justify-between">
            <div>
              <h3 class="text-xl font-semibold">Danh sách bài viết</h3>
            </div>
          </div>
        </template>
        <template #renderItem="{ item }">
          <a-list-item key="item.title" class="flex flex-col-reverse px-0">
            <router-link :to="{ name: 'news-detail', params: { id: item.id } }">
              <a-list-item-meta class="mt-3">
                <template #title>
                  <a :href="item.href">{{ item.title }}</a>
                </template>
                <template #description>
                  <div>
                    {{ item.address }}
                  </div>
                  <div class="line-clamp-2 mt-2">
                    {{ item.description }}
                  </div>
                </template>
                <template #avatar> </template>
              </a-list-item-meta>
            </router-link>

            <template #extra>
              <router-link
                :to="{ name: 'news-detail', params: { id: item.id } }"
              >
                <div class="grid grid-cols-6 grid-rows-2 gap-1 w-100 h-[233px]">
                  <div
                    class="n:col-span-6 n:row-span-2 md:col-span-4 md:row-span-2 image-container"
                  >
                    <img
                      src="../../../assets/images/land/land1.png"
                      class="flex object-fit-cover w-full h-full"
                    />
                  </div>
                  <div
                    class="d-none d-md-block md:col-span-2 md:row-span-1 image-container"
                  >
                    <img
                      src="../../../assets/images/land/land1.png"
                      class="flex object-fit-cover w-full h-full"
                    />
                  </div>
                  <div class="d-none d-md-block md:row-span-1 image-container">
                    <img
                      src="../../../assets/images/land/land1.png"
                      class="flex object-fit-cover w-full h-full"
                    />
                  </div>
                  <div class="d-none d-md-block md:row-span-1 image-container">
                    <img
                      src="../../../assets/images/land/land1.png"
                      class="flex object-fit-cover w-full h-full"
                    />
                  </div>
                </div>
              </router-link>
            </template>
            <!-- begin::Card Contact -->
            <div class="flex justify-between">
              <!-- begin::Card Published Info -->
              <div class="flex align-items-center">
                <a-avatar
                  class="me-2"
                  :style="{
                    backgroundColor: '#f50',
                    verticalAlign: 'middle',
                  }"
                >
                  {{ item.username.charAt(0) }}
                </a-avatar>
                <div class="flex flex-col">
                  <div>{{ item.username }}</div>
                  <div>{{ item.created_at }}</div>
                </div>
              </div>
              <!-- end::Card Published Info -->
            </div>
            <!-- end::Card Contact -->
          </a-list-item>
        </template>
      </a-list>

      <!-- end::Content Item -->
    </div>
    <!-- end::Main Content -->
  </div>
  <!-- end::Primary Content -->

  <!-- begin::Sidebar -->
  <SidebarFilter />
  <!-- end::Sidebar -->
</template>

<script setup>
import listPostsAPI from "../../../api/posts/index";
import getTimeSincePostCreation from "../../../utils/getTimeSincePostCreation";
import { ref } from "vue";

const totalLand = ref(0);

const data = ref([]);

/**
 * Hàm lấy danh sách  bài viết đã duyệt
 * @param
 * CreatedBy: youngbachhh (29/03/2024)
 */

const fetchPostsList = async () => {
  data.value = [];

  const listPosts = await listPostsAPI.getPostNotPending();
  const posts = [];

  for (const post of listPosts) {
    posts.push({
      id: post.id,
      username: post.user.name,
      title: post.title,
      description: post.description,
      address: post.address,
      created_at: getTimeSincePostCreation(post.created_at),
      view: 1000,
      sold_status: post.sold_status,
      status: post.status.name,
    });
  }

  data.value = posts;
  totalLand.value = posts.length;
};

fetchPostsList();

// Pagination
const pagination = {
  onChange: (page) => {},
  pageSize: 2,
};
</script>

<script>
import ThePageHeader from "../../../components/ThePageHeader.vue";
import SidebarFilter from "../../../components/base/sidebar/SidebarFilter.vue";
import CardInfor from "../../../components/base/card/CardInfor.vue";

export default {
  components: {
    ThePageHeader,
    SidebarFilter,
    CardInfor,
  },
};
</script>

<style scoped>
.sidebar-box-item {
  margin-bottom: 12px;
  font-weight: normal;
}
</style>
