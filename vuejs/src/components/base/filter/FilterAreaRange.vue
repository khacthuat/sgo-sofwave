<template>
  <div
    class="filter-item-content n:border-r-[1px] sm:border-r-[0px]"
    @click.prevent
    @click="setModalAreaRangeVisible(true)"
  >
    <div class="flex align-items-center text-black">
      <div>Diện tích</div>
      <div class="ml-2 flex align-items-center">
        <DownOutlined />
      </div>
    </div>

    <div class="list-search-selected w-100 text-black flex mt-2">
      <div v-text="computedRangeArea"></div>
    </div>
  </div>
  <a-modal
    v-model:open="modalAreaRangeVisible"
    @ok="setModalAreaRangeVisible(false)"
    :okText="'Tìm kiếm'"
    :cancelText="'Hủy'"
    class="top-[20%]"
    title="Chọn diện tích"
  >
    <div class="flex mt-5">
      <a-input-number
        v-model:value="area[0]"
        :min="0"
        :max="500"
        :step="5"
        class="w-80 col-5"
      />
      <div class="col-2 flex align-items-center justify-center">
        <ArrowRightOutlined />
      </div>
      <a-input-number
        v-model:value="area[1]"
        :min="min"
        :max="max"
        :step="5"
        class="w-80 col-5"
      />
    </div>
    <div>
      <a-slider v-model:value="area" range :min="0" :max="500" :step="5">
      </a-slider>
    </div>
    <div class="filter-list">
      <a-button class="filter-list-item">Dưới 30 m&sup2</a-button>
      <a-button class="filter-list-item">30 - 50 m&sup2</a-button>
      <a-button class="filter-list-item">50 - 80 m&sup2</a-button>
      <a-button class="filter-list-item">80 - 100 m&sup2</a-button>
      <a-button class="filter-list-item">100 - 150 m&sup2</a-button>
      <a-button class="filter-list-item">150 - 200 m&sup2</a-button>
      <a-button class="filter-list-item">Trên 500 m&sup2</a-button>
    </div>
  </a-modal>
</template>

<script setup>
import { ref, computed } from "vue";
import { DownOutlined, ArrowRightOutlined } from "@ant-design/icons-vue";

const modalAreaRangeVisible = ref(false);
const setModalAreaRangeVisible = (open) => {
  modalAreaRangeVisible.value = open;
};

var min = 0;
var max = 500;

const area = ref([min, max]);

const computedRangeArea = computed(() => {
  return area.value[0] === min && area.value[1] === max
    ? "Tất cả"
    : area.value[0] === min && area.value[1] < max
    ? `Dưới ${area.value[1]} m²`
    : area.value[0] > min && area.value[1] <= max
    ? `${area.value[0]} - ${area.value[1]} m²`
    : "Tất cả";
});
</script>

<script>
export default {};
</script>

<style></style>
