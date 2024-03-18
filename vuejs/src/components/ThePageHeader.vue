<template>
    <div class="toolbar">
        <!-- begin::Toolbar Container -->
        <div class="app-container container-fluid d-flex align-items-stretch">
            <!-- begin::Toolbar Wrapper -->
            <div
                class="app-toolbar-wrapper d-flex flex-stack flex-wrap gap-4 w-100"
            >
                <!-- begin::Page Title -->
                <div class="page-title">
                    <a-page-header
                        style="border: 1px solid rgb(235, 237, 240)"
                        title="Người dùng"
                        :breadcrumb="{ routes }"
                        sub-title=""
                        class="px-0"
                    />
                </div>
                <!-- end::Page Title -->
            </div>
            <!-- end::Toolbar Wrapper -->
        </div>
        <!-- end::Toolbar Container -->
    </div>
</template>

<script setup>
const routes = [
    {
        path: "index",
        breadcrumbName: "Home",
    },
    {
        path: "first",
        breadcrumbName: "Người dùng",
    },
];
</script>
