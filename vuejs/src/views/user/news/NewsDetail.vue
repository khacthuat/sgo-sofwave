<template>
    <!-- begin::Primary Content -->
    <div class="flex flex-col col-12 col-lg-10 lg:pr-[30px]">
        <!-- begin::Main Content -->
        <div class="w-full lg:w-4/5 flex flex-col ml-auto">
            <ThePageHeader />

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
            <div class="detail-infor">
                <!-- begin::Short Infor -->
                <div class="short-infor detail-infor-item border-b-[1px]">
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
                                <a-button
                                    class="border-0 hover:bg-slate-200"
                                    @click="copyImgToClipboard"
                                    ><CopyOutlined
                                        :style="{ fontSize: '24px' }"
                                /></a-button>
                            </a-tooltip>
                        </div>
                    </div>
                </div>
                <!-- end::Short Infor -->

                <!-- begin::Description -->
                <div class="description detail-infor-item border-b-[1px]">
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
                <div class="feature detail-infor-item border-b-[1px]">
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
                <div class="date detail-infor-item border-b-[1px]">
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
                <!-- end::Date -->

                <!-- begin::Comments -->

                <div class="comments detail-infor-item">
                    <a-descriptions title="Bình luận"> </a-descriptions>

                    <a-list
                        item-layout="vertical"
                        size="large"
                        :pagination="pagination"
                        :data-source="listData"
                    >
                        <template #renderItem="{ item }">
                            <a-list-item key="item.title">
                                <template #extra>
                                    <img
                                        width="272"
                                        alt="logo"
                                        src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                                    />
                                </template>
                                <a-list-item-meta
                                    :description="item.description"
                                >
                                    <template #title>
                                        <a :href="item.href">{{
                                            item.title
                                        }}</a>
                                    </template>
                                    <template #avatar>
                                        <a-avatar
                                            :src="item.avatar"
                                            size="medium"
                                            class="me-2"
                                            :style="{
                                                backgroundColor: '#f50',
                                                verticalAlign: 'middle',
                                            }"
                                        >
                                            {{ item.title[0].toUpperCase() }}
                                        </a-avatar>
                                    </template>
                                </a-list-item-meta>
                                {{ item.content }}
                            </a-list-item>
                        </template>
                    </a-list>
                </div>
                <!-- end::Comments -->
            </div>
            <!-- end::Detail Infor -->
        </div>
        <!-- end::Main Content -->
    </div>
    <!-- end::Primary Content -->

    <!-- begin::Sidebar -->
    <div class="flex flex-col d-none d-lg-flex col-lg-2">
        <!-- begin::Sidebar Box -->
        <div class="flex-col p-3 mb-3 border-1 sidebar-box">
            <!-- begin::Author -->
            <div class="flex flex-col align-items-center">
                <a-avatar
                    :size="64"
                    :style="{
                        backgroundColor: '#f50',
                        verticalAlign: 'middle',
                    }"
                    class=""
                >
                    Bách
                </a-avatar>
                <div class="upload-by mt-3">Được đăng bởi</div>
                <div class="author mt-2">
                    <h2>Nguyễn Văn Bách</h2>
                </div>
            </div>
            <!-- end::Author -->

            <div class="sidebar-box-content mt-3">
                <a-button class="sidebar-box-item w-full">
                    0986853388
                </a-button>
                <a-button class="sidebar-box-item w-full">
                    Chat qua Zalo
                </a-button>
                <a-button class="sidebar-box-item w-full">
                    Yêu cầu gọi lại
                </a-button>
            </div>
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
    StarOutlined,
    LikeOutlined,
    MessageOutlined,
} from "@ant-design/icons-vue";
import { ref } from "vue";

// begin: comments
const listData = [];
for (let i = 0; i < 23; i++) {
    listData.push({
        href: "https://www.antdv.com/",
        title: "Nguyễn Văn Bách",
        avatar: "https://joeschmoe.io/api/v1/random",
        description: "2024-03-23 6:58",
        content:
            "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
    });
}
const pagination = {
    onChange: (page) => {
        console.log(page);
    },
    pageSize: 3,
};

// end: comments

// begin: carousel
const baseUrl =
    "https://raw.githubusercontent.com/vueComponent/ant-design-vue/main/components/carousel/demo/";

const current = ref(2);
var totalLand = "Hiện có 1000 bất động sản";
var normal = "Thông thường";

const getImgUrl = (i) => {
    return `${baseUrl}abstract0${i + 1}.jpg`;
};
// end: carousel
</script>

<script>
import Clipboard from "clipboard";
import ThePageHeader from "../../../components/ThePageHeader.vue";

export default {
    components: {
        ThePageHeader,
    },

    methods: {
        async copyImgToClipboard() {
            try {
                const imageUrls = [
                    `https://www.js-craft.io/_public-files/img-cat.png`,
                    `https://www.js-craft.io/_public-files/img-dog.png`,
                ];

                for (const imageUrl of imageUrls) {
                    const response = await fetch(imageUrl);

                    if (!response.ok) {
                        // Handle failed fetch for individual image
                        console.warn(`Failed to fetch image: ${imageUrl}`);
                        continue; // Skip to next image if fetch fails
                    }

                    const blob = await response.blob();
                    const clipboardItem = new ClipboardItem({
                        "image/png": blob,
                    });

                    await navigator.clipboard.write([clipboardItem]);
                }

                console.log("Images copied to clipboard!");
            } catch (error) {
                console.error("Failed to copy images:", error);
            }
        },
    },
};
</script>

<style scoped>
.detail-infor-item {
    margin-top: 2rem;
}

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
