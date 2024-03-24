<template lang="">
    <a-layout>
        <a-layout>
            <a-layout-header>
                <TheHeader />
            </a-layout-header>
        </a-layout>

        <TheSearchBar />
        <a-layout>
            <a-layout-content>
                <TheContent />
            </a-layout-content>
        </a-layout>

        <a-layout-footer class="mt-5" :style="footerStyle"
            >Footer</a-layout-footer
        >
    </a-layout>
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
</template>

<script setup>
import {
    CustomerServiceOutlined,
    CommentOutlined,
    ArrowUpOutlined,
} from "@ant-design/icons-vue";

const footerStyle = {
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#7dbcea",
};
</script>

<script>
import TheHeader from "../components/User/TheHeader.vue";
import TheSearchBar from "../components/User/TheSearchBar.vue";
import ThePageHeader from "../components/ThePageHeader.vue";
import TheContent from "../components/User/TheContent.vue";

export default {
    components: {
        TheHeader,
        TheSearchBar,
        ThePageHeader,
        TheContent,
    },
};
</script>
<style></style>
