<template>
  <!-- begin::Search Bar -->
  <div class="h-[64px]">
    <!-- begin::Search Bar Container-->
    <div
      class="app-container fixed-top min-h-[64px] mt-[64px] bg-primary-white-color"
    >
      <!-- begin::Search Bar Wrapper -->
      <div class="flex flex-wrap align-items-center border-t-[1px]">
        <!-- begin::Search Bar Item Wrapper -->
        <div class="search-box col-12 col-xl-4 xl:pe-3">
          <a-input-search
            v-model:value="value"
            placeholder="Đường Nguyễn Thị Minh Khai"
            class="w-100"
          />
        </div>
        <!-- end::Search Bar Item Wrapper -->

        <!-- begin::Filter Item Wrapper -->
        <div class="flex align-items-center h-14 col-12 col-xl-8 my-3">
          <!-- begin::Filter Item -->
          <div class="filter-item col-4 col-xl-4">
            <FilterAddress />
          </div>
          <!-- end::Filter Item -->

          <!-- begin::Filter Item -->
          <div class="filter-item col-4 col-sm-3 col-xl-3">
            <FilterPriceRange />
          </div>
          <!-- end::Filter Item -->

          <!-- begin::Filter Item -->
          <div class="filter-item col-4 col-sm-3 col-xl-3">
            <FilterAreaRange />
          </div>
          <!-- end::Filter Item -->

          <!-- begin::Filter Item -->
          <div class="filter-item d-none d-sm-block col-sm-1">
            <FilterOptions />
          </div>
          <!-- end::Filter Item -->

          <!-- begin::Filter Item -->
          <div class="filter-item d-none d-sm-block col-sm-1">
            <a-tooltip placement="bottom">
              <template #title>
                <span>Đặt lại</span>
              </template>
              <div class="filter-item-content align-items-center">
                <ReloadOutlined class="" />
              </div>
            </a-tooltip>
          </div>
          <!-- end::Filter Item -->
        </div>
        <!-- end::Filter Item Wrapper-->
      </div>
      <!-- end::Search Bar Wrapper -->
    </div>
    <!-- end::Search Bar Container-->
  </div>
  <!-- end::Search bar -->
</template>

<script setup>
import { ref } from "vue";
import { ReloadOutlined } from "@ant-design/icons-vue";

const value = ref(undefined);

// Khai báo biến và refs
</script>

<script>
import axios from "axios";
import FilterAddress from "../base/filter/FilterAddress.vue";
import FilterPriceRange from "../base/filter/FilterPriceRange.vue";
import FilterAreaRange from "../base/filter/FilterAreaRange.vue";
import FilterOptions from "../base/filter/FilterOptions.vue";

export default {
  components: {
    FilterAddress,
    FilterPriceRange,
    FilterAreaRange,
    FilterOptions,
  },

  created() {},

  beforeMount() {
    //Có thể truy cập data, event, method ở đây
    //Chưa có DOM
    //Chỉ chạy 1 lần
  },
  mounted() {},
  beforeUpdate() {
    //thay đổi style -> update dữ liệu -> render lại DOM
    //*Nên dùng để update dữ liệu vào DOM */
  },
  updated() {
    //update dữ liệu -> thay đổi state -> render lại DOM
    //Cũng có thể dùng để update dữ liệu vào DOM
  },
  beforeUnmount() {
    //Chưa bị hủy
  },
  unmounted() {
    //Đã bị hủy, không thể truy cập data, event, method ở đây
    //Ít khi dùng
  },

  methods: {},

  data() {
    return {
      provinceList: [],
    };
  },
};
</script>
<style>
.custom-checkbox {
  display: inline-block;
  position: relative;
  min-width: 40px;
  height: 40px;
}

.custom-checkbox input[type="checkbox"] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.custom-checkbox span {
  display: block;
  height: 40px;
  padding: 0 10px;
  border-radius: 10%;
  border: 1px solid #ccc;
  text-align: center;
  line-height: 40px;
  font-weight: normal;
  cursor: pointer;
  color: #2c2c2c;
}

.custom-checkbox input[type="checkbox"]:checked ~ span {
  background-color: #ffeceb;
  color: #74150f;
  height: 40px;
}
</style>
