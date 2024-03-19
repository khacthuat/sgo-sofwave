<template>
    <!-- begin::Header -->
    <div class="app-header">
        <!-- begin::Header Container -->
        <div
            class="app-container container-fluid d-flex align-items-stretch justify-content-between"
        >
            <!-- begin::Header Wrapper -->
            <div class="d-flex align-items-center flex-grow-1">
                <!-- begin::Logo -->
                <div
                    class="app-header-logo d-flex align-items-center justify-content-center gap-2 me-lg-5"
                >
                    <!-- begin::Sidebar Toggle -->
                    <!-- end::Sidebar Toggle -->
                    <!-- begin::Logo Image -->
                    <img
                        src="../../assets/logo/logo.png"
                        alt="Logo"
                        class="app-header-logo-image"
                        style="height: 50px"
                    />
                </div>
                <!-- end::Logo -->

                <!-- begin:: Menu Wrapper -->
                <div class="" id="app-header-menu-wrapper">
                    <!-- begin::Menu Item -->
                    <div class="app-menu-item d-flex">
                        <a-menu
                            v-model:selectedKeys="current1"
                            mode="horizontal"
                            :items="items1"
                            :subMenuOpenDelay="0.5"
                        />
                        <a-menu
                            v-model:selectedKeys="current1"
                            mode="horizontal"
                            :items="items2"
                            :subMenuOpenDelay="0.5"
                        />
                        <a-menu
                            v-model:selectedKeys="current1"
                            mode="horizontal"
                            :items="items3"
                            :subMenuOpenDelay="0.5"
                        />
                    </div>

                    <!-- end::Menu Item -->
                </div>

                <!-- end:: Menu Wrapper -->

                <!-- begin::Control Menu -->
                <div>
                    <!-- begin::Control Menu Wrapper -->
                    <div>
                        <!-- begin::Control Menu Item -->
                        <div></div>
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
import {
    MailOutlined,
    AppstoreOutlined,
    SettingOutlined,
} from "@ant-design/icons-vue";
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
const current2 = ref(["sub2"]);
const items2 = ref([
    {
        key: "sub2",
        label: h(
            "a",
            {
                href: "https://antdv.com",
                target: "_blank",
            },
            "Nhà đất cho thuê"
        ),
        title: "Nhà đất thuê - Submenu",
        children: [
            {
                label: "Cho thuê căn hộ chung cư",
                key: "landRent:1",
            },
            {
                label: "Cho thuê nhà riêng",
                key: "landRent:2",
            },
            {
                label: "Cho thuê nhà biệt thự, liền kề",
                key: "landRent:3",
            },
            {
                label: "Cho thuê nhà mặt phố",
                key: "landRent:4",
            },
            {
                label: "Cho thuê nhà shophouse, nhà phố thương mại",
                key: "landRent:5",
            },
            {
                label: "Cho thuê nhà trọ, phòng trọ",
                key: "landRent:6",
            },
        ],
    },
]);
const current3 = ref(["sub3"]);
const items3 = ref([
    {
        key: "sub3",
        label: h(
            "a",
            {
                href: "https://antdv.com",
                target: "_blank",
            },
            "Dự án"
        ),
        title: "Dự án - Submenu",
        children: [
            {
                label: "Căn hộ chung cư",
                key: "project:1",
            },
            {
                label: "Cao ốc văn phòng",
                key: "project:2",
            },
            {
                label: "Trung tâm thương mại",
                key: "project:3",
            },
            {
                label: "Khu đô thị mới",
                key: "project:4",
            },
            {
                label: "Khu phức hợp",
                key: "project:5",
            },
            {
                label: "Nhà ở xã hội",
                key: "project:6",
            },
        ],
    },
]);
const current4 = ref(["mail"]);
const items4 = ref([
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
const current5 = ref(["mail"]);
const items5 = ref([
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
