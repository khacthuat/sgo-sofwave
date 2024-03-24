<template>
    <div>
        <a-layout>
            <TheSider />

            <a-layout>
                <TheHeader />
                <!-- begin::Content Wrapper -->
                <div
                    class="px-2 px-lg-4"
                    style="min-height: calc(100vh - 64px - 64px)"
                >
                    <!-- begin::Content -->
                    <TheContent />
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
} from "@ant-design/icons-vue";

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
import TheContent from "../components/TheContent.vue";

export default {
    components: {
        TheSider,
        TheHeader,
        TheContent,
    },
};
</script>

<style></style>
