<template>
    <!-- begin::Primary Content -->
    <div class="flex flex-col col-12 col-lg-10 lg:pr-[30px]">
        <div class="w-full lg:w-4/5 ml-auto">
            <ThePageHeader />
        </div>

        <!-- begin::Content Navbar -->
        <div
            class="flex align-content-center justify-between my-3 w-full lg:w-4/5 ml-auto"
        >
            <!-- begin::Total land -->
            <div v-text="totalLand"></div>
            <!-- end::Total land -->

            <!-- begin::Filter -->
            <div>
                <a-select
                    v-model:value="normal"
                    :placeholder="normal"
                    class="n:w-auto lg:w-56"
                    placehoder="Sắp xếp"
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
        <div class="w-full lg:w-4/5 ml-auto space-y-10">
            <!-- begin::Content Item -->
            <div class="flex flex-col border-1">
                <router-link to="/user/news-detail">
                    <!-- begin::Card Image -->
                    <div
                        class="grid grid-cols-6 grid-rows-2 gap-1 w-100 h-[233px]"
                    >
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
                        <div
                            class="d-none d-md-block md:row-span-1 image-container"
                        >
                            <img
                                src="../../../assets/images/land/land1.png"
                                class="flex object-fit-cover w-full h-full"
                            />
                        </div>
                        <div
                            class="d-none d-md-block md:row-span-1 image-container"
                        >
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
                            <CardInfor />
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
                    </div>
                    <!-- end::Card Info -->
                </router-link>

                <!-- begin::Card Contact -->
                <div class="p-3 flex justify-between">
                    <!-- begin::Card Published Info -->
                    <div class="flex align-items-center">
                        <a-avatar
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
                        <a-button type="primary ">
                            <div class="flex align-items-center">
                                <div @click="copyText(phoneNumber)">
                                    {{ phoneNumber }}
                                </div>
                                <MinusOutlined class="mx-1 d-none d-md-block" />
                                <div class="d-none d-md-block">Sao chép</div>
                            </div>
                        </a-button>
                    </div>
                    <!-- end::Card Contact Button -->
                </div>
                <!-- end::Card Contact -->
            </div>
            <!-- end::Content Item -->

            <!-- begin::Content Item -->
            <div class="flex flex-col border-1">
                <router-link to="/user/news-detail">
                    <!-- begin::Card Image -->
                    <div
                        class="grid grid-cols-6 grid-rows-2 gap-1 w-100 h-[233px]"
                    >
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
                        <div
                            class="d-none d-md-block md:row-span-1 image-container"
                        >
                            <img
                                src="../../../assets/images/land/land1.png"
                                class="flex object-fit-cover w-full h-full"
                            />
                        </div>
                        <div
                            class="d-none d-md-block md:row-span-1 image-container"
                        >
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
                            <CardInfor />
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
                    </div>
                    <!-- end::Card Info -->
                </router-link>

                <!-- begin::Card Contact -->
                <div class="p-3 flex justify-between">
                    <!-- begin::Card Published Info -->
                    <div class="flex align-items-center">
                        <a-avatar
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
                        <a-button type="primary " class="bg-phone-color">
                            <div class="flex align-items-center">
                                <div @click="copyText(phoneNumber)">
                                    {{ phoneNumber }}
                                </div>
                                <MinusOutlined class="mx-1 d-none d-md-block" />
                                <div class="d-none d-md-block">Sao chép</div>
                            </div>
                        </a-button>
                    </div>
                    <!-- end::Card Contact Button -->
                </div>
                <!-- end::Card Contact -->
            </div>
            <!-- end::Content Item -->
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
    <SidebarFilter />
    <!-- end::Sidebar -->
</template>

<script setup>
import { MinusOutlined } from "@ant-design/icons-vue";
import { ref } from "vue";
import copyText from "../../../scripts/copyText";

const current = ref(1);
var totalLand = "Hiện có 1000 bất động sản";
var normal = "Thông thường";
var phoneNumber = "0986853388";
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
