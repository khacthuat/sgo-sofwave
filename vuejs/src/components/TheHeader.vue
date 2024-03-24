<template>
    <div id="header-container" class="position-relative" style="height: 64px">
        <a-layout-header
            id="header-component"
            class="flex align-items-center justify-between px-2 px-lg-4 col-12"
        >
            <div class="d-none d-lg-flex col-lg-4 input-container">
                <a-input-search
                    v-model:value="value"
                    placeholder="input search text"
                    enter-button="Search"
                    size="large"
                    @search="onSearch"
                    style="width: 300px"
                />
            </div>
            <div
                class="icon-container col-12 col-lg-4 flex align-items-center justify-end"
                style="font-size: 20px"
            >
                <div
                    class="list-icon d-flex align-items-center mx-1 mx-lg-4"
                    style="height: 40px"
                >
                    <div
                        class="list-icon-item d-flex align-items-center justify-center"
                    >
                        <BulbOutlined />
                    </div>
                    <div
                        class="list-icon-item d-flex align-items-center justify-center"
                    >
                        <a-badge :count="109">
                            <a-avatar style="background-color: transparent">
                                <NotificationOutlined />
                            </a-avatar>
                        </a-badge>
                    </div>
                </div>

                <div
                    class="icon-user flex align-items-center"
                    style="height: 40px"
                >
                    <a-avatar :size="40">
                        <template #icon>
                            <AntDesignOutlined />
                        </template>
                    </a-avatar>
                </div>
            </div>
        </a-layout-header>
    </div>
</template>

<script setup>
import { ref } from "vue";
const value = ref("");
const onSearch = (searchValue) => {
    console.log("use value", searchValue);
    console.log("or use this.value", value.value);
};
</script>

<script>
import {
    AntDesignOutlined,
    PieChartOutlined,
    NotificationOutlined,
    BulbOutlined,
} from "@ant-design/icons-vue";
import { defineComponent } from "vue";

export default defineComponent({
    components: {
        AntDesignOutlined,
        PieChartOutlined,
        NotificationOutlined,
        BulbOutlined,
    },
});
</script>

<style scope>
#header-component {
    background: #ffffff;
}

.list-icon-item {
    margin-right: 12px;
}

.list-icon-item:hover {
    background-color: #f2f2f2;
}
</style>
