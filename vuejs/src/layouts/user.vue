<template lang="">
    <a-layout>
        <a-layout>
            <a-layout-header>
                <TheHeader />
            </a-layout-header>
        </a-layout>

        <TheSearchBar />
        <a-layout>
            <a-layout-content>
                <TheContent />
            </a-layout-content>
        </a-layout>

        <a-layout-footer class="mt-5" :style="footerStyle"
            >Footer</a-layout-footer
        >
    </a-layout>

</template>

<script setup>
const footerStyle = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#7dbcea",
};
</script>

<script>
import TheHeader from "../components/User/TheHeader.vue";
import TheSearchBar from "../components/User/TheSearchBar.vue";
import ThePageHeader from "../components/ThePageHeader.vue";
import TheContent from "../components/User/TheContent.vue";

export default {
  components: {
    TheHeader,
    TheSearchBar,
    ThePageHeader,
    TheContent,
  },
};
</script>
<style></style>
