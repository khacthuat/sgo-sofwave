<template>
    <div>
        <a-layout>
            <TheSider />

            <a-layout style="min-height: 100vh">
                <TheHeader />
                <!-- begin::Content Wrapper -->
                <div
                    class="px-2 px-lg-4"
                    style="min-height: calc(100vh - 64px - 64px)"
                >
                    <!-- begin::Toolbar -->
                    <ThePageHeader />
                    <!-- end::Toolbar -->

                    <!-- begin::Content -->
                    <router-view></router-view>
                    <!-- end::Content -->
                    <!-- begin::Support -->
                    <div class="support">
                        <a-float-button-group
                            trigger="click"
                            type="primary"
                            :style="{
                                right: '6px',
                                bottom: '40vh',
                            }"
                        >
                            <template #icon>
                                <CustomerServiceOutlined />
                            </template>
                            <a-float-button />
                            <a-float-button>
                                <template #icon>
                                    <CommentOutlined />
                                </template>
                            </a-float-button>
                        </a-float-button-group>
                    </div>
                    <!-- end::Support -->

                    <!-- begin::Back to top -->
                    <div class="back-to-top">
                        <a-back-top :style="{ right: '6px' }">
                            <template #icon>
                                <ArrowUpOutlined />
                            </template>
                        </a-back-top>
                    </div>
                    <!-- end::Back to top -->
                </div>

                <a-layout-footer :style="footerStyle">Footer</a-layout-footer>
            </a-layout>
        </a-layout>
    </div>
</template>

<script setup>
import {
    ArrowUpOutlined,
    CustomerServiceOutlined,
    CommentOutlined,
    DownOutlined,
} from "@ant-design/icons-vue";

const contentStyle = {
    textAlign: "center",
    minHeight: 120,
    lineHeight: "120px",
    color: "#fff",
    backgroundColor: "#108ee9",
};

const footerStyle = {
    textAlign: "center",
    minHeight: 64,
    color: "#fff",
    backgroundColor: "#7dbcea",
};
</script>

<script>
import TheSider from "../components/TheSider.vue";
import TheHeader from "../components/TheHeader.vue";
import ThePageHeader from "../components/ThePageHeader.vue";

export default {
    components: {
        TheSider,
        TheHeader,
        ThePageHeader,
    },
};
</script>

<style>
/* card css */
.card .card-header {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    flex-wrap: wrap;
    min-height: 70px;
    padding: 0 2.25rem;
}

/* card image css */
.image-input .image-input-wrapper {
    width: 120px;
    height: 120px;
    border-radius: 0.75rem;
    background-repeat: no-repeat;
    background-size: cover;
}

.card {
    border: 1px solid gray;
}

.card .card-body {
    padding: 2rem 2.25rem;
}
.image-input {
    position: relative;
    display: inline-block;
    border-radius: 0.75rem;
    background-repeat: no-repeat;
    background-size: cover;
}

.mb-7 {
    margin-bottom: 1.75rem !important;
}

.form-label {
    margin-bottom: 0.5rem;
    font-size: 1.05rem;
    font-weight: 500;
    color: gray;
}
</style>
