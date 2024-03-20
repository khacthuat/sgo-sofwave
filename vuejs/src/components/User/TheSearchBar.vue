<template>
    <!-- begin::Search Bar -->
    <div class="h-14 mt-2">
        <!-- begin::Search Bar Container-->
        <div class="">
            <!-- begin::Search Bar Wrapper -->
            <div class="d-flex align-items-center justify-between">
                <!-- begin::Search Bar Item Wrapper -->
                <div class="d-flex align-items-center">
                    <!-- begin::Search Bar Item -->
                    <div class="search-box mx-3">
                        <a-input-search
                            v-model:value="value"
                            placeholder="Đường Nguyễn Thị Minh Khai"
                            @search="onSearch"
                            class="w-64"
                        />
                    </div>
                    <!-- end::Search Bar Item -->
                </div>
                <!-- end::Search Bar Item Wrapper -->

                <!-- begin::Filter Item Wrapper -->
                <div class="flex">
                    <!-- begin::Filter Item -->
                    <div class="filter-item mx-3 hover:bg-sky-700">
                        <a-dropdown class="flex" :trigger="'click'">
                            <a
                                class="ant-dropdown-link flex flex-col justify-center items-center"
                                @click.prevent
                            >
                                <div class="flex">
                                    Khu vực & Dự án
                                    <DownOutlined class="ml-2 flex" />
                                </div>
                                <div class="list-search-selected mt-2 w-100">
                                    Toàn quốc
                                </div>
                            </a>
                            <template #overlay>
                                <a-select
                                    v-model:value="value1"
                                    mode="multiple"
                                    style="width: 100%"
                                    placeholder="Please select"
                                    :options="
                                        [...Array(25)].map((_, i) => ({
                                            value:
                                                (i + 10).toString(36) + (i + 1),
                                        }))
                                    "
                                    @change="handleChange"
                                    @click.stop
                                ></a-select>
                            </template>
                        </a-dropdown>
                    </div>
                    <!-- end::Filter Item -->

                    <!-- begin::Filter Item -->
                    <div class="filter-item mx-3 hover:bg-sky-700">
                        <a-dropdown class="flex" :trigger="'click'">
                            <a
                                class="ant-dropdown-link flex flex-col justify-center items-center"
                                @click.prevent
                            >
                                <div class="flex">
                                    Mức giá
                                    <DownOutlined class="ml-2 flex" />
                                </div>

                                <div class="list-search-selected mt-2 w-100">
                                    Tất cả
                                </div>
                            </a>

                            <template #overlay>
                                <a-table
                                    :columns="columns"
                                    :data-source="data"
                                    :row-selection="rowSelection"
                                >
                                    <template #icon>
                                        <PlusOutlined />
                                    </template>
                                </a-table>
                            </template>
                        </a-dropdown>
                    </div>
                    <!-- end::Filter Item -->

                    <!-- begin::Filter Item -->
                    <div class="filter-item mx-3 hover:bg-sky-700">
                        <a-dropdown class="flex" :trigger="'click'">
                            <a
                                class="ant-dropdown-link flex flex-col justify-center items-center"
                                @click.prevent
                            >
                                <div class="flex">
                                    Diện tích
                                    <DownOutlined class="ml-2 flex" />
                                </div>

                                <div class="list-search-selected mt-2 w-100">
                                    < 500m2
                                </div>
                            </a>

                            <template #overlay>
                                <a-table
                                    :columns="columns"
                                    :data-source="data"
                                    :row-selection="rowSelection"
                                >
                                    <template #icon>
                                        <PlusOutlined />
                                    </template>
                                </a-table>
                            </template>
                        </a-dropdown>
                    </div>
                    <!-- end::Filter Item -->

                    <!-- begin::Filter Item -->
                    <div class="filter-item mx-3">
                        <a-button
                            class="flex justify-center align-items-center"
                        >
                            <FilterOutlined />
                        </a-button>
                    </div>
                    <!-- end::Filter Item -->

                    <!-- begin::Filter Item -->
                    <div class="filter-item mx-3">
                        <a-button
                            class="flex justify-center align-items-center"
                        >
                            <ReloadOutlined />
                        </a-button>
                    </div>
                    <!-- end::Filter Item -->
                </div>
                <!-- end::Filter Item Wrapper-->
            </div>
            <!-- end::Search Bar Wrapper -->
        </div>
        <!-- end::Search Bar Container-->
    </div>
    <!-- end::Search bar -->
</template>

<script setup>
import { h, ref } from "vue";
import {
    DownOutlined,
    PlusOutlined,
    FilterOutlined,
    ReloadOutlined,
} from "@ant-design/icons-vue";

const handleChange = (value) => {
    console.log(`selected ${value}`);
};
const value = ref(["a1", "b2"]);
const columns = [
    {
        title: "Tất cả nhà đất",
        dataIndex: "name",
        key: "name",
    },
];
const data = [
    {
        key: 1,
        name: "John Brown sr.",
        children: [
            {
                key: 11,
                name: "John Brown",
            },
            {
                key: 12,
                name: "John Brown jr.",
                children: [
                    {
                        key: 121,
                        name: "Jimmy Brown",
                    },
                ],
            },
        ],
    },
    {
        key: 2,
        name: "Joe Black",
    },
];
const rowSelection = ref({
    checkStrictly: false,
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(
            `selectedRowKeys: ${selectedRowKeys}`,
            "selectedRows: ",
            selectedRows
        );
    },
    onSelect: (record, selected, selectedRows) => {
        console.log(record, selected, selectedRows);
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
        console.log(selected, selectedRows, changeRows);
    },
});

const options = ref([
    {
        label: "Manager",
        options: [
            {
                value: "jack",
                label: "Jack",
            },
            {
                value: "lucy",
                label: "Lucy",
            },
        ],
    },
    {
        label: "Engineer",
        options: [
            {
                value: "yiminghe",
                label: "Yiminghe",
            },
        ],
    },
]);
</script>

<script>
export default {};
</script>
<style></style>
