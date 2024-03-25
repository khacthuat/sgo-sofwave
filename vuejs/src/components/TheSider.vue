<template>
    <div id="sider-container">
        <a-layout-sider
            v-model:collapsed="collapsed"
            collapsible
            id="sider-component"
            class="position-relative"
            :trigger="null"
        >
            <div class="logo"></div>

            <a-menu
                v-model:selectedKeys="selectedKeys"
                theme="light"
                mode="inline"
                triggerSubMenuAction="click"
                class="position-fixed max-w-[200px]"
            >
                <a-menu-item
                    class="trigger mb-3 border-b-[1px]"
                    @click="() => (collapsed = !collapsed)"
                >
                    <div class="flex align-items-center">
                        <MenuUnfoldOutlined v-if="collapsed" />
                        <MenuFoldOutlined v-else />
                        <span class="">Menu</span>
                    </div>
                </a-menu-item>
                <a-menu-item key="1">
                    <div class="flex align-items-center">
                        <PieChartOutlined />
                        <span>Tổng quan</span>
                    </div>
                </a-menu-item>
                <a-sub-menu key="sub1">
                    <template #title>
                        <div class="flex align-items-center">
                            <UserOutlined> </UserOutlined>
                            <span>Quản lý đầu chủ</span>
                        </div>
                    </template>
                    <a-menu-item key="2">Đăng tin mới</a-menu-item>
                    <a-menu-item key="3">Danh sách tin đăng</a-menu-item>
                    <a-menu-item key="4">Danh sách chủ nhà</a-menu-item>
                </a-sub-menu>
                <a-sub-menu key="sub2">
                    <template #title>
                        <div class="flex align-items-center">
                            <TeamOutlined />
                            <span>Quản lý sales</span>
                        </div>
                    </template>
                    <a-menu-item key="5">Xem tin</a-menu-item>
                    <a-menu-item key="6">Team 2</a-menu-item>
                </a-sub-menu>
                <a-sub-menu key="sub3">
                    <template #title>
                        <div class="flex align-items-center">
                            <TeamOutlined />
                            <span>Admin</span>
                        </div>
                    </template>
                    <a-menu-item key="7">Duyệt tin</a-menu-item>
                    <a-menu-item key="8">Danh sách người dùng</a-menu-item>
                    <a-menu-item key="9">Thống kê tin đăng</a-menu-item>
                    <a-menu-item key="10">Quản lý hình ảnh</a-menu-item>
                    <a-menu-item key="11">Các bộ lọc</a-menu-item>
                </a-sub-menu>
                <a-sub-menu key="sub4">
                    <template #title>
                        <div class="flex align-items-center">
                            <TeamOutlined />
                            <span>Tuyển dụng</span>
                        </div>
                    </template>
                    <a-menu-item key="12">Thông tin các ứng viên</a-menu-item>
                    <a-menu-item key="13">Quy trình</a-menu-item>
                    <a-menu-item key="14">Thống tin nhân viên</a-menu-item>
                </a-sub-menu>
                <a-sub-menu key="sub5">
                    <template #title>
                        <div class="flex align-items-center">
                            <TeamOutlined />
                            <span>Thương vụ chốt</span>
                        </div>
                    </template>
                    <a-menu-item key="15">Danh sách thương vụ</a-menu-item>
                    <a-menu-item key="16">Thống kê</a-menu-item>
                </a-sub-menu>
            </a-menu>
        </a-layout-sider>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const collapsed = ref(false);
const selectedKeys = ref(["1"]);

onMounted(() => {
    checkWindowSize(); // Kiểm tra kích thước màn hình khi component được mounted
    window.addEventListener("resize", checkWindowSize); // Thêm event listener vào sự kiện resize
});

function checkWindowSize() {
    if (window.innerWidth < 576) {
        collapsed.value = true;
    }
    if (window.innerWidth >= 576) {
        collapsed.value = false;
    }
}
</script>

<script>
import {
    UserOutlined,
    PieChartOutlined,
    TeamOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from "@ant-design/icons-vue";

export default {};
</script>

<style scoped>
#sider-container {
    background: #fff;
}

#sider-component .logo {
    height: 32px;
    margin: 16px;
    background: rgba(255, 255, 255, 0.3);
}
.site-layout .site-layout-background {
    background: #fff;
}

[data-theme="light"] .site-layout .site-layout-background {
    background: #f2f2f2;
}

.ant-layout .ant-layout-sider-children .ant-menu.ant-menu-inline-collapsed {
    width: 80px;
}
</style>
