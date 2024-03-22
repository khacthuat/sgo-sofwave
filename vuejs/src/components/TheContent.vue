<template>
    <!-- begin::Content -->
    <div class="bg-slate-100">
        <!-- begin::Content Container -->
        <ThePageHeader class="" />
        <div class="app-container">
            <!-- begin::Content Wrapper -->
            <div class="">
                <router-view></router-view>
            </div>
            <!-- end::Content Wrapper -->
        </div>
        <!-- end::Content Container -->
    </div>
    <!-- end::Content -->
</template>
<script>
import ThePageHeader from "./ThePageHeader.vue";

export default {
    components: {
        ThePageHeader,
    },
};
</script>
<style></style>
