<template>
    <!-- begin::Search Bar -->
    <div class="">
        <!-- begin::Search Bar Container-->
        <div class="app-container fixed-top mt-[80px] z-10 bg-slate-200">
            <!-- begin::Search Bar Wrapper -->
            <div class="flex flex-wrap align-items-center mt-2 border-t-[1px]">
                <!-- begin::Search Bar Item Wrapper -->
                <div class="search-box col-12 col-xl-4 xl:pe-3">
                    <a-input-search
                        v-model:value="value"
                        placeholder="Đường Nguyễn Thị Minh Khai"
                        @search="onSearch"
                        class="w-100"
                    />
                </div>
                <!-- end::Search Bar Item Wrapper -->

                <!-- begin::Filter Item Wrapper -->
                <div class="flex align-items-center h-14 col-12 col-xl-8">
                    <!-- begin::Filter Item -->
                    <div class="filter-item col-4 col-xl-4 h-100">
                        <div
                            class="flex flex-col justify-center h-100 border-y-0 border-x-[1px] px-3 rounded-none cursor-pointer hover:bg-slate-500"
                            @click.prevent
                            @click="setModal1Visible(true)"
                        >
                            <div class="flex text-black">
                                <div>Khu vực</div>
                                <div class="ml-2 flex align-items-center">
                                    <DownOutlined />
                                </div>
                            </div>

                            <div
                                class="list-search-selected w-100 text-black flex mt-1"
                            >
                                Toàn quốc
                            </div>
                        </div>
                        <a-modal
                            class="top-52 modal"
                            v-model:open="modal1Visible"
                            @ok="setModal1Visible(false)"
                            :okText="'Tìm kiếm'"
                            :cancelText="'Hủy'"
                            zIndex="1050"
                            :bodyStyle="{ paddingRight: '0' }"
                        >
                            <a-select
                                v-model:value="value1"
                                show-search
                                placeholder="Tỉnh/Thành"
                                class="w-100 mt-5"
                                :options="options"
                                :filter-option="filterOption"
                                @focus="handleFocus"
                                @blur="handleBlur"
                                @change="handleChange"
                            >
                            </a-select>
                            <a-select
                                mode="multiple"
                                class="w-100 mt-3"
                                placeholder="Quận/Huyện"
                                :options="
                                    [...Array(25)].map((_, i) => ({
                                        value: (i + 10).toString(36) + (i + 1),
                                    }))
                                "
                                @change="handleChange"
                            >
                            </a-select>
                            <a-select
                                mode="multiple"
                                class="w-100 mt-3"
                                placeholder="Phường/Xã"
                                :options="
                                    [...Array(25)].map((_, i) => ({
                                        value: (i + 10).toString(36) + (i + 1),
                                    }))
                                "
                                @change="handleChange"
                            >
                            </a-select>
                            <a-select
                                mode="multiple"
                                class="w-100 my-3"
                                placeholder="Đường/Phố"
                                :options="
                                    [...Array(25)].map((_, i) => ({
                                        value: (i + 10).toString(36) + (i + 1),
                                    }))
                                "
                                @change="handleChange"
                            >
                            </a-select>
                        </a-modal>
                    </div>
                    <!-- end::Filter Item -->

                    <!-- begin::Filter Item -->
                    <div class="filter-item col-4 col-sm-3 col-xl-3 h-100">
                        <div
                            class="flex flex-col justify-center h-100 border-y-0 border-x-[1px] px-3 rounded-none cursor-pointer hover:bg-slate-500"
                            @click.prevent
                            @click="setModal2Visible(true)"
                        >
                            <div class="flex text-black">
                                <div>Mức giá</div>
                                <div class="ml-2 flex align-items-center">
                                    <DownOutlined />
                                </div>
                            </div>

                            <div
                                class="list-search-selected w-100 text-black flex mt-1"
                            >
                                <div v-text="computedRangePrice"></div>
                            </div>
                        </div>
                        <a-modal
                            v-model:open="modal2Visible"
                            @ok="setModal2Visible(false)"
                            :okText="'Tìm kiếm'"
                            :cancelText="'Hủy'"
                            class="top-52"
                            zIndex="1050"
                        >
                            <div class="flex mt-5">
                                <a-input-number
                                    v-model:value="value2[0]"
                                    :min="0"
                                    :max="60000"
                                    :step="100"
                                    class="w-80 col-5"
                                />
                                <div
                                    class="col-2 flex align-items-center justify-center"
                                >
                                    <ArrowRightOutlined />
                                </div>
                                <a-input-number
                                    v-model:value="value2[1]"
                                    :min="0"
                                    :max="60000"
                                    :step="100"
                                    class="w-80 col-5"
                                />
                            </div>
                            <div>
                                <a-slider
                                    v-model:value="value2"
                                    range
                                    :min="0"
                                    :max="60000"
                                    :step="100"
                                >
                                </a-slider>
                            </div>
                            <div>
                                <a-button
                                    class="flex align-items-center border-0 hover:bg-slate-500 w-100 py-2"
                                    >Dưới 500 triệu</a-button
                                >
                            </div>
                            <div>
                                <a-button
                                    class="flex align-items-center border-0 hover:bg-slate-500 w-100 py-2"
                                    >500 - 800 triệu</a-button
                                >
                            </div>
                            <div>
                                <a-button
                                    class="flex align-items-center border-0 hover:bg-slate-500 w-100 py-2"
                                    >800 triệu - 1 tỷ</a-button
                                >
                            </div>
                            <div>
                                <a-button
                                    class="flex align-items-center border-0 hover:bg-slate-500 w-100 py-2"
                                    >1 - 2 tỷ</a-button
                                >
                            </div>
                            <div>
                                <a-button
                                    class="flex align-items-center border-0 hover:bg-slate-500 w-100 py-2"
                                    >2 - 3 tỷ</a-button
                                >
                            </div>
                            <div>
                                <a-button
                                    class="flex align-items-center border-0 hover:bg-slate-500 w-100 py-2"
                                    >3 - 5 tỷ</a-button
                                >
                            </div>
                            <div>
                                <a-button
                                    class="flex align-items-center border-0 hover:bg-slate-500 w-100 py-2"
                                    >Thương lượng</a-button
                                >
                            </div>
                        </a-modal>
                    </div>
                    <!-- end::Filter Item -->

                    <!-- begin::Filter Item -->
                    <div class="filter-item col-4 col-sm-3 col-xl-3 h-100">
                        <div
                            class="flex flex-col justify-center h-100 border-y-0 border-x-[1px] px-3 rounded-none cursor-pointer hover:bg-slate-500"
                            @click.prevent
                            @click="setModal3Visible(true)"
                        >
                            <div class="flex align-items-center text-black">
                                <div>Diện tích</div>
                                <div class="ml-2 flex align-items-center">
                                    <DownOutlined />
                                </div>
                            </div>

                            <div
                                class="list-search-selected w-100 text-black flex mt-1"
                            >
                                <div v-text="computedRangeArea"></div>
                            </div>
                        </div>
                        <a-modal
                            v-model:open="modal3Visible"
                            @ok="setModal3Visible(false)"
                            :okText="'Tìm kiếm'"
                            :cancelText="'Hủy'"
                            class="top-52"
                            zIndex="1050"
                        >
                            <div class="flex mt-5">
                                <a-input-number
                                    v-model:value="value3[0]"
                                    :min="0"
                                    :max="500"
                                    :step="5"
                                    class="w-80 col-5"
                                />
                                <div
                                    class="col-2 flex align-items-center justify-center"
                                >
                                    <ArrowRightOutlined />
                                </div>
                                <a-input-number
                                    v-model:value="value3[1]"
                                    :min="0"
                                    :max="500"
                                    :step="5"
                                    class="w-80 col-5"
                                />
                            </div>
                            <div>
                                <a-slider
                                    v-model:value="value3"
                                    range
                                    :min="0"
                                    :max="500"
                                    :step="5"
                                >
                                </a-slider>
                            </div>
                            <div>
                                <a-button
                                    class="flex align-items-center border-0 hover:bg-slate-500 w-100 py-2"
                                    >Dưới 30 m&sup2</a-button
                                >
                            </div>
                            <div>
                                <a-button
                                    class="flex align-items-center border-0 hover:bg-slate-500 w-100 py-2"
                                    >30 - 50 m&sup2</a-button
                                >
                            </div>
                            <div>
                                <a-button
                                    class="flex align-items-center border-0 hover:bg-slate-500 w-100 py-2"
                                    >50 - 80 m&sup2</a-button
                                >
                            </div>
                            <div>
                                <a-button
                                    class="flex align-items-center border-0 hover:bg-slate-500 w-100 py-2"
                                    >80 - 100 m&sup2</a-button
                                >
                            </div>
                            <div>
                                <a-button
                                    class="flex align-items-center border-0 hover:bg-slate-500 w-100 py-2"
                                    >100 - 150 m&sup2</a-button
                                >
                            </div>
                            <div>
                                <a-button
                                    class="flex align-items-center border-0 hover:bg-slate-500 w-100 py-2"
                                    >150 - 200 m&sup2</a-button
                                >
                            </div>
                            <div>
                                <a-button
                                    class="flex align-items-center border-0 hover:bg-slate-500 w-100 py-2"
                                    >Trên 500 m&sup2</a-button
                                >
                            </div>
                        </a-modal>
                    </div>
                    <!-- end::Filter Item -->

                    <!-- begin::Filter Item -->
                    <div
                        class="filter-item d-none d-sm-block col-sm-1 col-xl-1 h-100"
                    >
                        <div
                            class="flex justify-center align-items-center w-100 h-100 border-y-0 border-x-[1px] rounded-none cursor-pointer hover:bg-slate-500"
                            @click.prevent
                            @click="setModal4Visible(true)"
                        >
                            <FilterOutlined />
                            <div class="ml-3 d-none d-xxl-block">Lọc thêm</div>
                        </div>

                        <a-modal
                            v-model:open="modal4Visible"
                            @ok="setModal4Visible(false)"
                            :okText="'Tìm kiếm'"
                            :cancelText="'Hủy'"
                            class="top-52"
                            zIndex="1050"
                        >
                            <div class="mt-5">
                                <div class="flex flex-col">
                                    <div class="text-md font-semibold">
                                        Số phòng ngủ
                                    </div>
                                    <div class="flex">
                                        <label class="custom-checkbox me-2">
                                            <input type="checkbox" value="1" />
                                            <span>1</span>
                                        </label>
                                        <label class="custom-checkbox me-2">
                                            <input type="checkbox" value="2" />
                                            <span>2</span>
                                        </label>
                                        <label class="custom-checkbox me-2">
                                            <input type="checkbox" value="3" />
                                            <span>3</span>
                                        </label>
                                        <label class="custom-checkbox me-2">
                                            <input type="checkbox" value="4" />
                                            <span>4</span>
                                        </label>
                                        <label class="custom-checkbox">
                                            <input type="checkbox" value="5" />
                                            <span>5+</span>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div class="mt-3 w-50">
                                <div class="flex flex-col">
                                    <div class="text-md font-semibold">
                                        Hướng nhà
                                    </div>
                                    <div class="flex flex-wrap">
                                        <label class="custom-checkbox me-2">
                                            <input
                                                type="checkbox"
                                                value="east"
                                            />
                                            <span>Đông</span>
                                        </label>
                                        <label class="custom-checkbox me-2">
                                            <input
                                                type="checkbox"
                                                value="west"
                                            />
                                            <span>Tây</span>
                                        </label>
                                        <label class="custom-checkbox me-2">
                                            <input
                                                type="checkbox"
                                                value="south"
                                            />
                                            <span>Nam</span>
                                        </label>
                                        <label class="custom-checkbox">
                                            <input
                                                type="checkbox"
                                                value="north"
                                            />
                                            <span>Bắc</span>
                                        </label>
                                        <label
                                            class="custom-checkbox me-2 mt-2"
                                        >
                                            <input
                                                type="checkbox"
                                                value="east-north"
                                            />
                                            <span>Đông - Bắc</span>
                                        </label>
                                        <label
                                            class="custom-checkbox me-2 mt-2"
                                        >
                                            <input
                                                type="checkbox"
                                                value="west-north"
                                            />
                                            <span>Tây - Bắc</span>
                                        </label>
                                        <label
                                            class="custom-checkbox me-2 mt-2"
                                        >
                                            <input
                                                type="checkbox"
                                                value="west-south"
                                            />
                                            <span>Tây - Nam</span>
                                        </label>
                                        <label class="custom-checkbox mt-2">
                                            <input
                                                type="checkbox"
                                                value="east-south"
                                            />
                                            <span>Đông - Nam</span>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div class="mt-3 w-100">
                                <div class="flex flex-col">
                                    <div class="text-md font-semibold">
                                        Nội dung tin có
                                    </div>
                                    <div class="flex flex-wrap">
                                        <label class="custom-checkbox me-2">
                                            <input
                                                type="checkbox"
                                                value="picture"
                                            />
                                            <span>Hình ảnh</span>
                                        </label>
                                        <label class="custom-checkbox">
                                            <input
                                                type="checkbox"
                                                value="Video"
                                            />
                                            <span>Video</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </a-modal>
                    </div>
                    <!-- end::Filter Item -->

                    <!-- begin::Filter Item -->
                    <div
                        class="filter-item d-none d-sm-block col-sm-1 col-xl-1 h-100"
                    >
                        <div
                            class="flex justify-center align-items-center w-100 h-100 border-y-0 border-x-[1px] rounded-none cursor-pointer hover:bg-slate-500"
                        >
                            <ReloadOutlined />
                            <div class="ml-3 d-none d-xxl-block">Đặt lại</div>
                        </div>
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
import { h, ref, computed } from "vue";
import {
    DownOutlined,
    PlusOutlined,
    FilterOutlined,
    ReloadOutlined,
    ArrowRightOutlined,
} from "@ant-design/icons-vue";

const value2 = ref([0, 60000]);
const value3 = ref([0, 500]);
const computedRangePrice = computed(() => {
    return value2.value[0] === 0 && value2.value[1] === 60000
        ? "Tất cả"
        : value2.value[0] === 0 && value2.value[1] < 60000
        ? `Dưới ${value2.value[1] / 1000} tỷ`
        : value2.value[0] === 0 && value2.value[1] < 1000
        ? `Dưới ${value2.value[1]} triệu`
        : value2.value[0] > 0 && value2.value[1] < 1000
        ? `${value2.value[0]} - ${value2.value[1]} triệu`
        : value2.value[0] > 0 &&
          value2.value[0] < 1000 &&
          value2.value[1] <= 60000
        ? `${value2.value[0]} triệu - ${value2.value[1] / 1000} tỷ`
        : value2.value[0] > 1000 && value2.value[1] <= 60000
        ? `${value2.value[0] / 1000} - ${value2.value[1] / 1000} tỷ`
        : "Tất cả";
});

const computedRangeArea = computed(() => {
    return value3.value[0] === 0 && value3.value[1] === 500
        ? "Tất cả"
        : value3.value[0] === 0 && value3.value[1] < 500
        ? `Dưới ${value3.value[1]} m²`
        : value3.value[0] > 0 && value3.value[1] <= 500
        ? `${value3.value[0]} - ${value3.value[1]} m²`
        : "Tất cả";
});

const modal1Visible = ref(false);
const modal2Visible = ref(false);
const modal3Visible = ref(false);
const modal4Visible = ref(false);

const setModal1Visible = (open) => {
    modal1Visible.value = open;
};
const setModal2Visible = (open) => {
    modal2Visible.value = open;
};
const setModal3Visible = (open) => {
    modal3Visible.value = open;
};
const setModal4Visible = (open) => {
    modal4Visible.value = open;
};

const handleChange = (value) => {
    console.log(`selected ${value}`);
};

const options = ref([
    {
        value: "HaNoi",
        label: "Hà Nội",
    },
    {
        value: "HoChiMinh",
        label: "Hồ Chí Minh",
    },
    {
        value: "BinhDuong",
        label: "Bình Dương",
    },
]);

const handleBlur = () => {
    console.log("blur");
};
const handleFocus = () => {
    console.log("focus");
};
const filterOption = (input, option) => {
    return option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
};
const value = ref(undefined);
</script>

<script>
export default {};
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
