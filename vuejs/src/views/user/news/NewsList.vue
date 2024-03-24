<template>
    <!-- begin::Primary Content -->
    <div class="flex flex-col col-12 col-lg-10 lg:pr-[30px]">
        <!-- begin::Content Navbar -->
        <div class="w-full lg:w-4/5 ml-auto">
            <ThePageHeader />
        </div>

        <div
            class="flex align-content-center justify-between my-3 w-full lg:w-4/5 ml-auto"
        >
            <!-- begin::Total land -->
            <div v-text="totalLand"></div>
            <!-- end::Total land -->

            <!-- begin::Filter -->
            <div>
                <a-select
                    ref="select"
                    v-model:value="normal"
                    :placeholder="normal"
                    class="w-56"
                    placehoder="Sắp xếp"
                    @focus="focus"
                    @change="handleChange"
                >
                    <a-select-option value="normal"
                        >Thông thường</a-select-option
                    >
                    <a-select-option value="newest"
                        >Tin mới nhất</a-select-option
                    >
                    <a-select-option value="priceAsc"
                        >Giá từ thấp đến cao</a-select-option
                    >
                    <a-select-option value="priceDesc"
                        >Giá cao đến thấp</a-select-option
                    >
                </a-select>
            </div>
            <!-- end::Filter -->
        </div>
        <!-- end::Content Navbar -->

        <!-- begin::Main Content -->
        <div class="w-full lg:w-4/5 ml-auto">
            <router-link to="/user/news-detail">
                <!-- begin::Content Item -->
                <div class="flex flex-col border-1 mb-4">
                    <!-- begin::Card Image -->
                    <div
                        class="grid grid-cols-6 grid-rows-2 gap-1 w-100 h-[233px]"
                    >
                        <div
                            class="col-span-4 row-span-2 bg-emerald-300 image-container"
                        >
                            <img
                                src="../../../assets/images/land/land1.png"
                                class="flex object-fit-cover w-full h-full"
                            />
                        </div>
                        <div
                            class="col-span-2 row-span-1 bg-emerald-500 image-container"
                        >
                            <img
                                src="../../../assets/images/land/land1.png"
                                class="flex object-fit-cover w-full h-full"
                            />
                        </div>
                        <div class="row-span-1 bg-emerald-600 image-container">
                            <img
                                src="../../../assets/images/land/land1.png"
                                class="flex object-fit-cover w-full h-full"
                            />
                        </div>
                        <div class="row-span-1 bg-emerald-300 image-container">
                            <img
                                src="../../../assets/images/land/land1.png"
                                class="flex object-fit-cover w-full h-full"
                            />
                        </div>
                    </div>
                    <!-- end::Card Image -->

                    <!-- begin::Card Info -->
                    <div>
                        <!-- begin::Card Info Content -->
                        <div class="p-3 border-b-[1px]">
                            <!-- begin::Card Info Title -->
                            <div class="mt-1">
                                <h3 class="text-xl font-semibold">
                                    <span class="line-clamp-2">
                                        Bán nhanh nhiều biệt thự - Shophouse
                                        vinhomes, vị trí đẹp
                                    </span>
                                </h3>
                            </div>
                            <!-- end::Card Info Title -->

                            <!-- begin::Card Info -->
                            <div class="flex">
                                <!-- begin::Card Info Config -->
                                <div class="flex align-items-center space-x-5">
                                    <span class="text-sm text-gray-500">
                                        17,5 tỷ
                                    </span>
                                    <span class="text-sm text-gray-500">
                                        126 m&sup2
                                    </span>
                                    <span class="text-sm text-gray-500">
                                        138 triệu/m&sup2
                                    </span>
                                    <span class="text-sm text-gray-500">
                                        4 phòng ngủ
                                    </span>
                                    <span class="text-sm text-gray-500">
                                        4 WC
                                    </span>
                                </div>
                                <!-- end::Card Info Config -->

                                <!-- begin::Card Info Location -->
                                <div>
                                    <span class="text-sm text-gray-500 mx-1">
                                        Quận 9, Hồ Chí Minh
                                    </span>
                                </div>
                                <!-- end::Card Info Location -->
                            </div>
                            <!-- end::Card Info -->

                            <!-- begin::Card Info Description -->
                            <div class="mt-2 line-clamp-2">
                                *Chuyên bán biệt thự, nhà phố và tất cả các sản
                                phẩm trong dự án Vinhomes Grand Park - Quận 9 -
                                Thành phố Thủ Đức
                            </div>
                            <!-- end::Card Info Description -->
                        </div>
                        <!-- end::Card Info Content -->

                        <!-- begin::Card Contact -->
                        <div class="p-3 flex justify-between">
                            <!-- begin::Card Published Info -->
                            <div class="flex align-items-center">
                                <a-avatar
                                    size="medium"
                                    class="me-2"
                                    :style="{
                                        backgroundColor: '#f50',
                                        verticalAlign: 'middle',
                                    }"
                                >
                                    B
                                </a-avatar>
                                <div class="flex flex-col">
                                    <div>Nguyễn Văn Bách</div>
                                    <div>2 giờ trước</div>
                                </div>
                            </div>
                            <!-- end::Card Published Info -->

                            <!-- begin::Card Contact Button -->
                            <div>
                                <a-button
                                    type="primary "
                                    class="bg-phone-color"
                                >
                                    <div class="flex align-items-center">
                                        <div>0986853388</div>
                                        <MinusOutlined class="mx-1" />
                                        <div>Sao chép</div>
                                    </div>
                                </a-button>
                            </div>
                            <!-- end::Card Contact Button -->
                        </div>
                        <!-- end::Card Contact -->
                    </div>
                    <!-- end::Card Info -->
                </div>
                <!-- end::Content Item -->
            </router-link>

            <router-link to="/user/news-detail">
                <!-- begin::Content Item -->
                <div class="flex flex-col border-1 mb-4">
                    <!-- begin::Card Image -->
                    <div
                        class="grid grid-cols-6 grid-rows-2 gap-1 w-100 h-[233px]"
                    >
                        <div
                            class="col-span-4 row-span-2 bg-emerald-300 image-container"
                        >
                            <img
                                src="../../../assets/images/land/land1.png"
                                class="flex object-fit-cover w-full h-full"
                            />
                        </div>
                        <div
                            class="col-span-2 row-span-1 bg-emerald-500 image-container"
                        >
                            <img
                                src="../../../assets/images/land/land1.png"
                                class="flex object-fit-cover w-full h-full"
                            />
                        </div>
                        <div class="row-span-1 bg-emerald-600 image-container">
                            <img
                                src="../../../assets/images/land/land1.png"
                                class="flex object-fit-cover w-full h-full"
                            />
                        </div>
                        <div class="row-span-1 bg-emerald-300 image-container">
                            <img
                                src="../../../assets/images/land/land1.png"
                                class="flex object-fit-cover w-full h-full"
                            />
                        </div>
                    </div>
                    <!-- end::Card Image -->

                    <!-- begin::Card Info -->
                    <div>
                        <!-- begin::Card Info Content -->
                        <div class="p-3 border-b-[1px]">
                            <!-- begin::Card Info Title -->
                            <div class="mt-1">
                                <h3 class="text-xl font-semibold">
                                    <span class="line-clamp-2">
                                        Bán nhanh nhiều biệt thự - Shophouse
                                        vinhomes, vị trí đẹp
                                    </span>
                                </h3>
                            </div>
                            <!-- end::Card Info Title -->

                            <!-- begin::Card Info -->
                            <div class="flex">
                                <!-- begin::Card Info Config -->
                                <div class="flex align-items-center space-x-5">
                                    <span class="text-sm text-gray-500">
                                        17,5 tỷ
                                    </span>
                                    <span class="text-sm text-gray-500">
                                        126 m&sup2
                                    </span>
                                    <span class="text-sm text-gray-500">
                                        138 triệu/m&sup2
                                    </span>
                                    <span class="text-sm text-gray-500">
                                        4 phòng ngủ
                                    </span>
                                    <span class="text-sm text-gray-500">
                                        4 WC
                                    </span>
                                </div>
                                <!-- end::Card Info Config -->

                                <!-- begin::Card Info Location -->
                                <div>
                                    <span class="text-sm text-gray-500 mx-1">
                                        Quận 9, Hồ Chí Minh
                                    </span>
                                </div>
                                <!-- end::Card Info Location -->
                            </div>
                            <!-- end::Card Info -->

                            <!-- begin::Card Info Description -->
                            <div class="mt-2 line-clamp-2">
                                *Chuyên bán biệt thự, nhà phố và tất cả các sản
                                phẩm trong dự án Vinhomes Grand Park - Quận 9 -
                                Thành phố Thủ Đức
                            </div>
                            <!-- end::Card Info Description -->
                        </div>
                        <!-- end::Card Info Content -->

                        <!-- begin::Card Contact -->
                        <div class="p-3 flex justify-between">
                            <!-- begin::Card Published Info -->
                            <div class="flex align-items-center">
                                <a-avatar
                                    size="medium"
                                    class="me-2"
                                    :style="{
                                        backgroundColor: '#f50',
                                        verticalAlign: 'middle',
                                    }"
                                >
                                    B
                                </a-avatar>
                                <div class="flex flex-col">
                                    <div>Nguyễn Văn Bách</div>
                                    <div>2 giờ trước</div>
                                </div>
                            </div>
                            <!-- end::Card Published Info -->

                            <!-- begin::Card Contact Button -->
                            <div>
                                <a-button
                                    type="primary "
                                    class="bg-phone-color"
                                >
                                    <div class="flex align-items-center">
                                        <div>0986853388</div>
                                        <MinusOutlined class="mx-1" />
                                        <div>Sao chép</div>
                                    </div>
                                </a-button>
                            </div>
                            <!-- end::Card Contact Button -->
                        </div>
                        <!-- end::Card Contact -->
                    </div>
                    <!-- end::Card Info -->
                </div>
                <!-- end::Content Item -->
            </router-link>
        </div>
        <!-- end::Main Content -->

        <!-- begin::Pagination -->
        <div class="flex mb-5 justify-center align-items-center">
            <a-pagination
                v-model:current="current"
                :total="8000"
                show-less-items
            >
            </a-pagination>
        </div>

        <!-- end::Pagination -->
    </div>
    <!-- end::Primary Content -->

    <!-- begin::Sidebar -->
    <div class="flex flex-col d-none d-lg-flex col-lg-2">
        <!-- begin::Sidebar Box -->
        <div class="p-3 mb-3 border-1 sidebar-box">
            <!-- begin::Sidebar Box Title -->
            <div class="mb-3">
                <h2>Lọc theo khoảng giá</h2>
            </div>
            <!-- end::Sidebar Box Title -->

            <!-- begin::Sidebar Box Content -->
            <div class="sidebar-box-content">
                <h3 class="sidebar-box-item">
                    <a>Dưới 500 triệu</a>
                </h3>
                <h3 class="sidebar-box-item">
                    <a>500 - 800 triệu</a>
                </h3>
                <h3 class="sidebar-box-item">
                    <a>800 triệu - 1 tỷ</a>
                </h3>
                <h3 class="sidebar-box-item">
                    <a>1 - 2 tỷ</a>
                </h3>
                <h3 class="sidebar-box-item">
                    <a>2 - 3 tỷ</a>
                </h3>
                <h3 class="sidebar-box-item">
                    <a>3 - 5 tỷ</a>
                </h3>
                <h3 class="sidebar-box-item">
                    <a>5 - 7 tỷ</a>
                </h3>
            </div>
            <!-- end::Sidebar Box Content -->
        </div>
        <!-- end::Sidebar Box -->

        <!-- begin::Sidebar Box -->
        <div class="p-3 mb-3 border-1 sidebar-box">
            <!-- begin::Sidebar Box Title -->
            <div class="mb-3">
                <h2>Lọc theo khoảng giá</h2>
            </div>
            <!-- end::Sidebar Box Title -->

            <!-- begin::Sidebar Box Content -->
            <div class="sidebar-box-content">
                <h3 class="sidebar-box-item">
                    <a>Dưới 500 triệu</a>
                </h3>
                <h3 class="sidebar-box-item">
                    <a>500 - 800 triệu</a>
                </h3>
                <h3 class="sidebar-box-item">
                    <a>800 triệu - 1 tỷ</a>
                </h3>
                <h3 class="sidebar-box-item">
                    <a>1 - 2 tỷ</a>
                </h3>
                <h3 class="sidebar-box-item">
                    <a>2 - 3 tỷ</a>
                </h3>
                <h3 class="sidebar-box-item">
                    <a>3 - 5 tỷ</a>
                </h3>
                <h3 class="sidebar-box-item">
                    <a>5 - 7 tỷ</a>
                </h3>
            </div>
            <!-- end::Sidebar Box Content -->
        </div>
        <!-- end::Sidebar Box -->

        <!-- begin::Sidebar Box -->
        <div class="p-3 border-1 sidebar-box">
            <!-- begin::Sidebar Box Title -->
            <div class="mb-3">
                <h2>Lọc theo khoảng giá</h2>
            </div>
            <!-- end::Sidebar Box Title -->

            <!-- begin::Sidebar Box Content -->
            <div class="sidebar-box-content">
                <h3 class="sidebar-box-item">
                    <a>Dưới 500 triệu</a>
                </h3>
                <h3 class="sidebar-box-item">
                    <a>500 - 800 triệu</a>
                </h3>
                <h3 class="sidebar-box-item">
                    <a>800 triệu - 1 tỷ</a>
                </h3>
                <h3 class="sidebar-box-item">
                    <a>1 - 2 tỷ</a>
                </h3>
                <h3 class="sidebar-box-item">
                    <a>2 - 3 tỷ</a>
                </h3>
                <h3 class="sidebar-box-item">
                    <a>3 - 5 tỷ</a>
                </h3>
                <h3 class="sidebar-box-item">
                    <a>5 - 7 tỷ</a>
                </h3>
            </div>
            <!-- end::Sidebar Box Content -->
        </div>
        <!-- end::Sidebar Box -->
    </div>
    <!-- end::Sidebar -->
</template>

<script setup>
import { MinusOutlined } from "@ant-design/icons-vue";
import { ref } from "vue";

const current = ref(2);
var totalLand = "Hiện có 1000 bất động sản";
var normal = "Thông thường";
</script>

<script>
import ThePageHeader from "../../../components/ThePageHeader.vue";

export default {
    components: {
        ThePageHeader,
    },
};
</script>

<style scoped>
.sidebar-box-item {
    margin-bottom: 12px;
    font-weight: normal;
}
</style>
