<template>
  <div class="flex flex-col mt-3">
    <!-- begin::Card Infor For List -->
    <div v-if="type === 'list'">
      <!-- begin::Card Info Config -->
      <div class="flex flex-wrap align-items-center space-x-5">
        <span class="text-sm text-gray-500"> 17,5 tỷ </span>
        <span class="text-sm text-gray-500"> 126 m&sup2 </span>
        <span class="text-sm text-gray-500"> 138 triệu/m&sup2 </span>
      </div>
      <!-- end::Card Info Config -->

      <!-- begin::Card Info Location -->
      <div class="mt-2">
        <span class="text-sm text-gray-500"> Quận 9, Hồ Chí Minh </span>
      </div>
      <!-- end::Card Info Location -->
    </div>
    <!-- end::Card Infor For List -->

    <!-- begin::Card Infor For Manage -->
    <div class="flex flex-wrap space-x-10" v-else-if="type === 'manage'">
      <div class="flex flex-col">
        <span class="text-slate-400">Trạng thái</span>
        <div class="news-status">
          <a-tag color="#2db7f5">Đang hiển thị</a-tag>
        </div>
      </div>
      <div class="flex flex-col">
        <span class="text-slate-400">Ngày đăng</span>
        <div class="news-date">12/12/2024</div>
      </div>
    </div>
    <!-- end::Card Infor For Manage -->
  </div>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    default: "list",
  },
});
</script>

<script>
export default {};
</script>

<style></style>
