<template>
  <a-tooltip placement="bottom">
    <template #title>
      <span>Lọc thêm</span>
    </template>
    <div
      class="filter-item-content"
      @click.prevent
      @click="setModalOptions(true)"
    >
      <FilterOutlined />
    </div>
  </a-tooltip>

  <a-modal
    v-model:open="modalOptions"
    @ok="setModalOptions(false)"
    :okText="'Tìm kiếm'"
    :cancelText="'Hủy'"
    class="top-1/5"
    title="Lọc thêm"
  >
    <div class="mt-3 w-50">
      <div class="flex flex-col">
        <div class="text-md font-semibold mb-3">Hướng nhà</div>
        <div class="flex flex-wrap">
          <label class="custom-checkbox me-2">
            <input type="checkbox" value="east" />
            <span>Đông</span>
          </label>
          <label class="custom-checkbox me-2">
            <input type="checkbox" value="west" />
            <span>Tây</span>
          </label>
          <label class="custom-checkbox me-2">
            <input type="checkbox" value="south" />
            <span>Nam</span>
          </label>
          <label class="custom-checkbox">
            <input type="checkbox" value="north" />
            <span>Bắc</span>
          </label>
          <label class="custom-checkbox me-2 mt-2">
            <input type="checkbox" value="east-north" />
            <span>Đông - Bắc</span>
          </label>
          <label class="custom-checkbox me-2 mt-2">
            <input type="checkbox" value="west-north" />
            <span>Tây - Bắc</span>
          </label>
          <label class="custom-checkbox me-2 mt-2">
            <input type="checkbox" value="west-south" />
            <span>Tây - Nam</span>
          </label>
          <label class="custom-checkbox mt-2">
            <input type="checkbox" value="east-south" />
            <span>Đông - Nam</span>
          </label>
        </div>
      </div>
    </div>

    <div class="mt-3 w-100">
      <div class="flex flex-col">
        <div class="text-md font-semibold mb-3">Nội dung tin có</div>
        <div class="flex flex-wrap">
          <label class="custom-checkbox me-2">
            <input type="checkbox" value="picture" />
            <span>Hình ảnh</span>
          </label>
          <label class="custom-checkbox">
            <input type="checkbox" value="Video" />
            <span>Video</span>
          </label>
        </div>
      </div>
    </div>
  </a-modal>
</template>

<script setup>
import { ref } from "vue";
import { FilterOutlined } from "@ant-design/icons-vue";

const modalOptions = ref(false);
const setModalOptions = (open) => {
  modalOptions.value = open;
};
</script>

<script>
export default {};
</script>
<style></style>
