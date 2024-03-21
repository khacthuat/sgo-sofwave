<template>
    <!-- begin::Header -->
    <div class="app-header flex justify-content-center align-items-center">
        <!-- begin::Header Container -->
        <div
            class="app-container container-fluid flex align-items-stretch justify-content-between fixed-top z-10 bg-slate-200"
            style="height: 80px"
        >
            <!-- begin::Header Wrapper -->
            <div class="flex align-items-center justify-content-between w-100">
                <div class="flex align-items-center flex-grow-1">
                    <!-- begin::Logo -->
                    <div
                        class="app-header-logo flex align-items-center justify-content-center gap-2 me-lg-5"
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

                    <!-- begin:: Menu Wrapper -->
                    <div class="" id="app-header-menu-wrapper">
                        <!-- begin::Menu Item -->
                        <!-- <div class="app-menu-item flex">
                            <a-menu
                                v-model:selectedKeys="current1"
                                mode="horizontal"
                                :items="items1"
                                :subMenuOpenDelay="0.4"
                            />
                        </div> -->
                        <!-- end::Menu Item -->
                    </div>
                </div>

                <!-- end:: Menu Wrapper -->

                <!-- begin::Control Menu -->
                <div class="app-header-control-menu">
                    <!-- begin::Control Menu Wrapper -->
                    <div class="">
                        <!-- begin::Control Menu Item -->
                        <div
                            class="app-control-menu-item flex align-items-center"
                        >
                            <a-button
                                class="flex justify-center align-items-center me-4"
                                ><NotificationOutlined
                            /></a-button>
                            <div class="flex align-items-center me-4">
                                <a-dropdown :placement="'bottomRight'">
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
                                        class="ant-dropdown-link flex justify-center align-items-center cursor-pointer"
                                    >
                                        <a-avatar
                                            size="large"
                                            class="me-2"
                                            :style="{
                                                backgroundColor: '#f50',
                                                verticalAlign: 'middle',
                                            }"
                                        >
                                            Bách
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
                        <!-- end::Control Menu Item -->
                    </div>
                    <!-- end::Control Menu Wrapper -->
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
import { h, ref } from "vue";
import { NotificationOutlined, DownOutlined } from "@ant-design/icons-vue";
const current1 = ref(["sub1"]);
const items1 = ref([
    {
        key: "sub1",
        label: h(
            "a",
            {
                href: "https://antdv.com",
                target: "_blank",
            },
            "Nhà đất bán"
        ),
        title: "Nhà đất bán - Submenu",
        children: [
            {
                label: "Bán căn hộ chung cư",
                key: "landSell:1",
            },
            {
                label: "Bán nhà riêng",
                key: "landSell:2",
            },
            {
                label: "Bán nhà biệt thự, liền kề",
                key: "landSell:3",
            },
            {
                label: "Bán nhà mặt phố",
                key: "landSell:4",
            },
            {
                label: "Bán nhà shophouse, nhà phố thương mại",
                key: "landSell:5",
            },
            {
                label: "Bán nhà đất nền dự án",
                key: "landSell:6",
            },
        ],
    },
]);
</script>

<script>
export default {};
</script>
<style></style>
