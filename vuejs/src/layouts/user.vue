<template lang="">
    <div>
        <a-layout>
            <div>
                <TheHeader />
                <TheSearchBar />
            </div>

            <TheContent />
            <a-layout-footer class="mt-5" :style="footerStyle"
                >Footer</a-layout-footer
            >
        </a-layout>
    </div>
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
const headerStyle = {
    textAlign: "center",
    color: "#fff",
    height: 64,
    paddingInline: 50,
    lineHeight: "64px",
    backgroundColor: "#7dbcea",
};
const contentStyle = {
    textAlign: "center",
    minHeight: 120,
    lineHeight: "120px",
    color: "#fff",
    backgroundColor: "#108ee9",
};
const siderStyle = {
    textAlign: "center",
    lineHeight: "120px",
    color: "#fff",
    backgroundColor: "#3ba0e9",
};
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

import {
    ArrowUpOutlined,
    CustomerServiceOutlined,
    CommentOutlined,
    DownOutlined,
} from "@ant-design/icons-vue";

export default {
    components: {
        TheHeader,
        TheSearchBar,
        ThePageHeader,
        TheContent,
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
    border-radius: 0.75rem;
    background-repeat: no-repeat;
    background-size: cover;
}

.card {
    border: 1px solid #f2f2f2;
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

.form-label {
    margin-bottom: 0.5rem;
    font-size: 1.05rem;
    font-weight: 500;
    color: gray;
}

.app-container {
    padding-left: 30px !important;
    padding-right: 30px !important;
}
</style>
