<template>
    <a-menu
        v-model:openKeys="state.openKeys"
        v-model:selectedKeys="state.selectedKeys"
        mode="inline"
        theme="dark"
        :items="items"
        click=""
    >
    </a-menu>
</template>

<script setup>
import { reactive, h } from "vue";
import { RouterLink } from "vue-router";

const state = reactive({
    selectedKeys: ["1"],
    openKeys: ["sub1"],
});
const items = reactive([
    {
        key: "1",
        label: createLabel("Home", "/"),
        title: "Option 12",
    },
    {
        key: "2",
        label: createLabel("Roles", "/admin/roles"),
        title: "Option 22",
    },
    {
        key: "3",
        label: createLabel("Settings", "/admin/settings"),
        title: "Option 32",
    },
    {
        key: "sub1",
        label: "Navigation One1",
        title: "Navigation One2",
        children: [
            {
                key: "5",
                label: "Option 51",
                title: "Option 52",
            },
            {
                key: "6",
                label: "Option 61",
                title: "Option 62",
            },
            {
                key: "7",
                label: "Option 71",
                title: "Option 72",
            },
            {
                key: "8",
                label: "Option 81",
                title: "Option 82",
            },
        ],
    },
    {
        key: "sub2",
        label: "Navigation Two",
        title: "Navigation Two",
        children: [
            {
                key: "9",
                label: "Option 9",
                title: "Option 9",
            },
            {
                key: "10",
                label: "Option 10",
                title: "Option 10",
            },
            {
                key: "sub3",
                label: "Submenu",
                title: "Submenu",
                children: [
                    {
                        key: "11",
                        label: "Option 11",
                        title: "Option 11",
                    },
                    {
                        key: "12",
                        label: "Option 12",
                        title: "Option 12",
                    },
                ],
            },
        ],
    },
]);

function createLabel(text, to) {
    return h(RouterLink, { to }, () => h("span", text));
}
</script>

<script>
export default {
    name: "TheMenu",
};
</script>

<style lang=""></style>
