<template>
    <div>
        <a-layout>
            <TheSider />

            <a-layout>
                <a-layout-header>
                    <TheHeader />
                </a-layout-header>
                <a-layout-content>
                    <TheContent />
                </a-layout-content>

                <a-layout-footer :style="footerStyle">Footer</a-layout-footer>
            </a-layout>
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
import TheHeader from "../components/User/TheHeader.vue";
import TheContent from "../components/TheContent.vue";

export default {
    components: {
        TheSider,
        TheHeader,
        TheContent,
    },
};
</script>

<style>
#components-layout-demo-custom-trigger .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
    color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.3);
    margin: 16px;
}

.site-layout .site-layout-background {
    background: #fff;
}
</style>
