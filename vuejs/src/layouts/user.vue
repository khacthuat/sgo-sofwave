<template lang="">
    <div>
        <a-layout>
            <TheHeader />
            <TheSearchBar />
            <a-layout-content :style="contentStyle">Content</a-layout-content>
            <a-layout-footer :style="footerStyle">Footer</a-layout-footer>
        </a-layout>
    </div>
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

export default {
    components: {
        TheHeader,
        TheSearchBar,
    },
};
</script>
<style>
.app-container {
    padding-left: 30px !important;
    padding-right: 30px !important;
}
</style>
