<template>
    <div id="sider-container">
        <a-layout-sider
            v-model:collapsed="collapsed"
            collapsible
            id="sider-component"
            class="position-relative"
        >
            <div class="logo"></div>
            <a-menu
                v-model:selectedKeys="selectedKeys"
                theme="dark"
                mode="inline"
                triggerSubMenuAction="click"
            >
                <a-menu-item key="1">
                    <PieChartOutlined />
                    <span>Tổng quan</span>
                </a-menu-item>
                <a-sub-menu key="sub1">
                    <template #title>
                        <span>
                            <UserOutlined />
                            <span>Quản lý đầu chủ</span>
                        </span>
                    </template>
                    <a-menu-item key="2">Đăng tin mới</a-menu-item>
                    <a-menu-item key="3">Danh sách tin đăng</a-menu-item>
                    <a-menu-item key="4"
                        >Thống kê danh sách chủ nhà</a-menu-item
                    >
                </a-sub-menu>
                <a-sub-menu key="sub2">
                    <template #title>
                        <span>
                            <TeamOutlined />
                            <span>Quản lý sales</span>
                        </span>
                    </template>
                    <a-menu-item key="5">Xem tin</a-menu-item>
                    <a-menu-item key="6">Team 2</a-menu-item>
                </a-sub-menu>
                <a-sub-menu key="sub3">
                    <template #title>
                        <span>
                            <TeamOutlined />
                            <span>Admin</span>
                        </span>
                    </template>
                    <a-menu-item key="7">Duyệt tin</a-menu-item>
                    <a-menu-item key="8">Danh sách người dùng</a-menu-item>
                    <a-menu-item key="9">Thống kê tin đăng</a-menu-item>
                    <a-menu-item key="10">Quản lý hình ảnh</a-menu-item>
                    <a-menu-item key="11">Các bộ lọc</a-menu-item>
                </a-sub-menu>
                <a-sub-menu key="sub4">
                    <template #title>
                        <span>
                            <TeamOutlined />
                            <span>Tuyển dụng</span>
                        </span>
                    </template>
                    <a-menu-item key="12">Thông tin các ứng viên</a-menu-item>
                    <a-menu-item key="13">Quy trình</a-menu-item>
                    <a-menu-item key="14">Thống tin nhân viên</a-menu-item>
                </a-sub-menu>
                <a-sub-menu key="sub5">
                    <template #title>
                        <span>
                            <TeamOutlined />
                            <span>Thương vụ chốt</span>
                        </span>
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
    const sidebarTrigger = document.querySelector(".ant-layout-sider-trigger");
    if (sidebarTrigger) {
        sidebarTrigger.classList.add("d-none", "d-sm-block"); // Ẩn nút trigger khi màn hình nhỏ hơn 576px
    }
    checkWindowSize(); // Kiểm tra kích thước màn hình khi component được mounted
    window.addEventListener("resize", checkWindowSize); // Thêm event listener vào sự kiện resize
});

function checkWindowSize() {
    if (window.innerWidth < 576) {
        collapsed.value = true;
    }
}
</script>

<script>
import {
    UserOutlined,
    PieChartOutlined,
    TeamOutlined,
} from "@ant-design/icons-vue";

export default {};
</script>

<style scoped>
#sider-container {
    background: #001529;
}

#sider-component .logo {
    height: 32px;
    margin: 16px;
    background: rgba(255, 255, 255, 0.3);
}
.site-layout .site-layout-background {
    background: #fff;
}
[data-theme="dark"] .site-layout .site-layout-background {
    background: #141414;
}
</style>
