<template>
    <div id="header__container" class="position-relative" style="height: 64px">
        <a-layout-header
            id="header__component"
            class="d-flex align-items-center justify-content-between px-2 px-lg-4 col-12"
            style="z-index: 1"
        >
            <div class="d-none d-lg-flex col-lg-4 input__container">
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
                class="icon__container col-12 col-lg-4 d-flex align-items-center justify-content-end"
                style="font-size: 20px"
            >
                <div
                    class="list__icon d-flex align-items-center mx-1 mx-lg-4"
                    style="height: 40px"
                >
                    <div
                        class="list__icon--item d-flex align-items-center justify-content-center"
                    >
                        <BulbOutlined />
                    </div>
                    <div
                        class="list__icon--item d-flex align-items-center justify-content-center"
                    >
                        <a-badge :count="109">
                            <a-avatar
                                size="medium"
                                style="background-color: gray"
                            >
                                <NotificationOutlined />
                            </a-avatar>
                        </a-badge>
                    </div>
                </div>

                <div
                    class="icon__user d-flex align-items-center"
                    style="height: 40px"
                >
                    <a-avatar
                        :size="{
                            xs: 40,
                            sm: 40,
                            md: 40,
                            lg: 40,
                            xl: 40,
                            xxl: 40,
                        }"
                    >
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
#header__component {
    background-color: gray;
    color: #fff;
}

.list__icon--item {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    margin-right: 12px;
}

.list__icon--item:hover {
    background-color: black;
}
</style>
