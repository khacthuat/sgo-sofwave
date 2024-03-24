<template>
    <div
        class="filter-item-content"
        @click.prevent
        @click="setModalPriceRangeVisible(true)"
    >
        <div class="flex">
            <div>Mức giá</div>
            <div class="ml-2 flex align-items-center">
                <DownOutlined />
            </div>
        </div>

        <div class="list-search-selected w-100 flex mt-2">
            <div v-text="computedRangePrice"></div>
        </div>
    </div>
    <a-modal
        v-model:open="modalPriceRangeVisible"
        @ok="setModalPriceRangeVisible(false)"
        :okText="'Tìm kiếm'"
        :cancelText="'Hủy'"
        class="top-[20%]"
    >
        <div class="flex mt-5">
            <a-input-number
                v-model:value="price[0]"
                :min="min"
                :max="max"
                :step="100"
                class="w-80 col-5"
            />
            <div class="col-2 flex align-items-center justify-center">
                <ArrowRightOutlined />
            </div>
            <a-input-number
                v-model:value="price[1]"
                :min="0"
                :max="60000"
                :step="100"
                class="w-80 col-5"
            />
        </div>
        <div>
            <a-slider
                v-model:value="price"
                range
                :min="0"
                :max="60000"
                :step="100"
            >
            </a-slider>
        </div>
        <div class="filter-list">
            <a-button class="filter-list-item">Dưới 500 triệu</a-button>
            <a-button class="filter-list-item">500 - 800 triệu</a-button>
            <a-button class="filter-list-item">800 triệu - 1 tỷ</a-button>
            <a-button class="filter-list-item">1 - 2 tỷ</a-button>
            <a-button class="filter-list-item">2 - 3 tỷ</a-button>
            <a-button class="filter-list-item">3 - 5 tỷ</a-button>
            <a-button class="filter-list-item">Thương lượng</a-button>
        </div>
    </a-modal>
</template>

<script setup>
import { ref, computed } from "vue";
import { DownOutlined, ArrowRightOutlined } from "@ant-design/icons-vue";

const modalPriceRangeVisible = ref(false);
const setModalPriceRangeVisible = (open) => {
    modalPriceRangeVisible.value = open;
};

var min = 0;
var max = 60000;

const price = ref([min, max]);

const computedRangePrice = computed(() => {
    return price.value[0] === min && price.value[1] === max
        ? "Tất cả"
        : price.value[0] === min && price.value[1] < max
        ? `Dưới ${price.value[1] / 1000} tỷ`
        : price.value[0] === min && price.value[1] < 1000
        ? `Dưới ${price.value[1]} triệu`
        : price.value[0] > min && price.value[1] < 1000
        ? `${price.value[0]} - ${price.value[1]} triệu`
        : price.value[0] > min && price.value[0] < 1000 && price.value[1] <= max
        ? `${price.value[0]} triệu - ${price.value[1] / 1000} tỷ`
        : price.value[0] > min && price.value[1] <= max
        ? `${price.value[0] / 1000} - ${price.value[1] / 1000} tỷ`
        : "Tất cả";
});
</script>

<script>
export default {};
</script>
<style></style>
