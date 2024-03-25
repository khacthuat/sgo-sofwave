<template>
    <!-- begin::Header -->
    <div class="app-header flex justify-center align-items-center">
        <!-- begin::Header Container -->
        <div
            class="app-container flex align-items-stretch justify-between fixed-top z-10 bg-primary-white-color"
        >
            <!-- begin::Header Wrapper -->
            <div class="flex justify-between w-100">
                <div class="flex flex-grow-1">
                    <!-- begin::Logo -->
                    <div
                        class="app-header-logo flex align-items-center justify-center gap-2 me-lg-5"
                    >
                        <router-link to="/"
                            ><!-- begin::Logo Image -->
                            <img
                                src="../../assets/logo/logo.png"
                                alt="Logo"
                                class="app-header-logo-image"
                                style="height: 50px"
                            />
                            <!-- end::Logo Image --></router-link
                        >
                    </div>
                    <!-- end::Logo -->
                </div>
                <!-- end:: Menu Wrapper -->

                <!-- begin::Control Menu -->
                <div class="app-header-control-menu">
                    <!-- begin::Control Menu Item -->
                    <div class="app-control-menu-item">
                        <div class="flex align-items-center" v-if="!login">
                            <a-popover
                                placement="bottomRight"
                                trigger="click"
                                class="flex"
                            >
                                <template #content>
                                    <div class="min-h-[440px] w-[580px]">
                                        <div
                                            class="flex align-items-center mt-5 cursor-pointer"
                                        >
                                            <div class="type me-3">
                                                <UserOutlined
                                                    :style="{
                                                        fontSize: '24px',
                                                    }"
                                                />
                                            </div>
                                            <div class="flex flex-col content">
                                                <div class="detail">
                                                    Đăng ký tham dự miễn phí Báo
                                                    cáo thị trường BĐS Quý
                                                    1/2024
                                                </div>
                                                <div class="day">
                                                    20/10/2024
                                                </div>
                                            </div>
                                        </div>

                                        <div
                                            class="flex align-items-center mt-3 cursor-pointer"
                                        >
                                            <div class="type me-3">
                                                <ClockCircleOutlined
                                                    :style="{
                                                        fontSize: '24px',
                                                    }"
                                                />
                                            </div>
                                            <div class="flex flex-col content">
                                                <div class="detail">
                                                    Số điện thoại 0373388843 đã
                                                    được thêm vào danh sách liên
                                                    lạc của bạn. Xem chi tiết
                                                    tại đây.
                                                </div>
                                                <div class="day">
                                                    20/10/2024
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </template>
                                <template #title>
                                    <h2>Thông báo</h2>
                                </template>
                                <a-badge count="5">
                                    <a-button
                                        class="flex justify-center align-items-center"
                                    >
                                        <NotificationOutlined />
                                    </a-button>
                                </a-badge>
                            </a-popover>

                            <div class="mx-4 border-x-[1px] px-4">
                                <a-dropdown
                                    :placement="'bottomRight'"
                                    trigger="click"
                                >
                                    <template #overlay>
                                        <a-menu class="mt-2">
                                            <a-menu-item key="1">
                                                Quản lý tin đăng
                                            </a-menu-item>
                                            <a-menu-item key="2">
                                                Quản lý tài trợ
                                            </a-menu-item>
                                            <a-menu-item key="3">
                                                Thay đổi thông tin các nhân
                                            </a-menu-item>
                                            <a-menu-item key="4">
                                                Đăng xuất
                                            </a-menu-item>
                                        </a-menu>
                                    </template>
                                    <div
                                        class="flex justify-center align-items-center cursor-pointer"
                                    >
                                        <a-avatar
                                            size="large"
                                            class="me-2"
                                            :style="{
                                                backgroundColor: '#ffeceb',
                                                verticalAlign: 'middle',
                                            }"
                                        >
                                            <span class="text-selected-color">
                                                Bách
                                            </span>
                                        </a-avatar>
                                        <div class="d-none d-xl-block">
                                            Nguyễn Văn Bách
                                        </div>
                                        <div class="mx-2">
                                            <DownOutlined />
                                        </div>
                                    </div>
                                </a-dropdown>
                            </div>
                            <router-link to="/user/news-form">
                                <a-button class=""> Đăng tin </a-button>
                            </router-link>
                        </div>
                        <div class="flex" v-else>
                            <div class="flex mx-4 border-x-[1px]">
                                <div class="px-4 border-r-[1px]">
                                    <a-button class="border-0">
                                        Đăng nhập
                                    </a-button>
                                </div>
                                <div class="px-4">
                                    <a-button class="border-0">
                                        Đăng ký
                                    </a-button>
                                </div>
                            </div>
                            <router-link to="/user/news-form">
                                <a-button class=""> Đăng tin </a-button>
                            </router-link>
                        </div>
                    </div>
                    <!-- end::Control Menu Item -->
                </div>
                <!-- end::Control Menu -->
            </div>
            <!-- end::Header Wrapper -->
        </div>
        <!-- end::Header Container -->
    </div>
    <!-- end::Header -->
</template>

<script setup>
import {
    NotificationOutlined,
    DownOutlined,
    UserOutlined,
    ClockCircleOutlined,
} from "@ant-design/icons-vue";
</script>

<script>
export default {};
</script>
<style></style>
