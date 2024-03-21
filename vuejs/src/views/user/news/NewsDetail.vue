<template>
    <!-- begin::Primary Content -->
    <div class="flex flex-col col-12 col-lg-10 lg:pr-[30px]">
        <!-- begin::Main Content -->
        <div class="w-full lg:w-4/5 flex flex-col ml-auto">
            <!-- begin::Slider Media Item -->
            <div class="flex justify-end">
                <a-carousel
                    class="w-100 h-100"
                    arrows
                    dots-class="slick-dots slick-thumb"
                >
                    <!-- begin::Arrow -->
                    <template #prevArrow>
                        <div
                            class="custom-slick-arrow"
                            style="left: 10px; z-index: 1"
                        >
                            <LeftCircleOutlined />
                        </div>
                    </template>
                    <template #nextArrow>
                        <div class="custom-slick-arrow" style="right: 10px">
                            <RightCircleOutlined />
                        </div>
                    </template>
                    <!-- end::Arrow -->

                    <!-- begin::Paging -->
                    <template #customPaging="props">
                        <div class="flex">
                            <a class="flex">
                                <img :src="getImgUrl(props.i)" />
                            </a>
                        </div>
                    </template>
                    <!-- end::Paging -->

                    <div
                        v-for="item in 4"
                        :key="item"
                        class="d-flex align-items-center justify-center w-100"
                    >
                        <img :src="getImgUrl(item - 1)" />
                    </div>
                </a-carousel>
            </div>
            <!-- end::Slider Media Item -->

            <!-- begin::Detail Infor -->
            <div class="detail-infor border-y-2">
                <!-- begin::Short Infor -->
                <div class="short-infor mt-3">
                    <div class="py-4 flex flex-wrap justify-between">
                        <div class="infor flex">
                            <div class="price">
                                <a-descriptions title="Mức giá">
                                    <a-descriptions-item label="">
                                        Thỏa thuận
                                    </a-descriptions-item>
                                </a-descriptions>
                            </div>
                            <div class="area mx-5">
                                <a-descriptions title="Diện tích">
                                    <a-descriptions-item label="">
                                        Thỏa thuận
                                    </a-descriptions-item>
                                </a-descriptions>
                            </div>
                            <div class="bedroom">
                                <a-descriptions title="Phòng ngủ">
                                    <a-descriptions-item label="">
                                        4PN
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
                                    ><ShareAltOutlined
                                        :style="{ fontSize: '24px' }"
                                /></a-button>
                            </a-tooltip>
                            <a-tooltip placement="top">
                                <template #title>
                                    <span>Báo cáo</span>
                                </template>
                                <a-button class="border-0 hover:bg-slate-200"
                                    ><WarningOutlined
                                        :style="{ fontSize: '24px' }"
                                /></a-button>
                            </a-tooltip>
                            <a-tooltip placement="top">
                                <template #title>
                                    <span>Lưu tin</span>
                                </template>
                                <a-button class="border-0 hover:bg-slate-200"
                                    ><HeartOutlined
                                        :style="{ fontSize: '24px' }"
                                /></a-button>
                            </a-tooltip>

                            <a-tooltip placement="top">
                                <template #title>
                                    <span>Sao chép ảnh</span>
                                </template>
                                <a-button class="border-0 hover:bg-slate-200"
                                    ><CopyOutlined
                                        :style="{ fontSize: '24px' }"
                                /></a-button>
                            </a-tooltip>
                        </div>
                    </div>
                </div>
                <!-- end::Short Infor -->

                <!-- begin::Description -->
                <div class="description mt-3">
                    <a-descriptions title="Thông tin mô tả">
                        <a-descriptions-item label="">
                            Suất ngoại giao cực hot khu P Ciputra - KĐT Nam
                            Thăng Long, Tây Hồ, Hà Nội!
                            <br />
                            - Mặt đường 50m Nguyễn Văn Huyên kéo dài diện tích
                            300m² (12mx 25m).
                            <br />
                            - Mặt đường 30 trục trung tâm Ciputra diện tích
                            230m² (10mx23m).
                            <br />
                            - Mặt view công viên sân golf diện tích 324m²
                            (12mx27m).
                            <br />
                            - Đường nội bộ diện tích 120m² - 150m² - 180m².
                            <br />
                            - Bàn giao nhà 1 hầm + 3.5 tầng nổi, hoàn thiện mặt
                            ngoài. Suất ngoại giao đợt đầu giá ưu đãi, phù hợp
                            cho khách đầu tư, vào tiền ít, sinh lời cao, pháp lý
                            an toàn, khách mua được vào tên hợp đồng mua bán
                            trực tiếp chủ đầu tư.
                            <br />
                            Anh chị quan tâm đầu tư mua ở liên hệ ngay em Nhữ
                            Hiếu
                        </a-descriptions-item>
                    </a-descriptions>
                </div>
                <!-- end::Description -->

                <!-- begin::Feature -->
                <div class="feature mt-3">
                    <a-descriptions title="Đặc điểm bất động sản">
                        <a-descriptions-item label="Diện tích">
                            300 m&sup2
                        </a-descriptions-item>
                        <a-descriptions-item label="Pháp lý">
                            Hợp đồng mua bán
                        </a-descriptions-item>
                        <a-descriptions-item label="Mức giá">
                            Thỏa thuận
                        </a-descriptions-item>
                    </a-descriptions>
                </div>
                <!-- end::Feature -->

                <!-- begin::Date -->
                <div class="date mt-3">
                    <a-descriptions title="Thời gian">
                        <a-descriptions-item label="Ngày đăng">
                            20/03/2023
                        </a-descriptions-item>
                        <a-descriptions-item label="Ngày hết hạn">
                            27/03/2023
                        </a-descriptions-item>
                        <a-descriptions-item label="Mã tin">
                            39369169
                        </a-descriptions-item>
                    </a-descriptions>
                </div>
                <!-- end::Feature -->
            </div>
            <!-- end::Detail Infor -->
        </div>
        <!-- end::Main Content -->
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
import {
    MinusOutlined,
    LeftCircleOutlined,
    RightCircleOutlined,
    HeartOutlined,
    WarningOutlined,
    ShareAltOutlined,
    CopyOutlined,
    BorderOutlined,
} from "@ant-design/icons-vue";
import { ref } from "vue";

const baseUrl =
    "https://raw.githubusercontent.com/vueComponent/ant-design-vue/main/components/carousel/demo/";

const current = ref(2);
var totalLand = "Hiện có 1000 bất động sản";
var normal = "Thông thường";

const getImgUrl = (i) => {
    return `${baseUrl}abstract0${i + 1}.jpg`;
};
</script>

<script>
import Clipboard from "clipboard";

export default {};
</script>

<style scoped>
.sidebar-box-item {
    margin-bottom: 12px;
    font-weight: normal;
}

.ant-pagination .ant-pagination-options {
    display: none !important;
}

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
:deep(.slick-arrow.custom-slick-arrow:hover) {
    color: black;
    opacity: 0.5;
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
