<template>
    <div class="toolbar">
        <!-- begin::Toolbar Container -->
        <div class="">
            <!-- begin::Toolbar Wrapper -->
            <div class="app-toolbar-wrapper">
                <!-- begin::Page Title -->
                <div class="page-title">
                    <a-page-header
                        title="Người dùng"
                        :breadcrumb="{ routes }"
                        sub-title=""
                        class="px-0 border-y-[1px]"
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
