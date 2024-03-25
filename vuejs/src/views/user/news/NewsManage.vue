<template>
    <div class="flex flex-col justify-center w-4/5 ml-auto mr-auto">
        <div class="">
            <ThePageHeader
                title="Quản lý tin đăng"
                breadcrumb="Quản lý tin đăng"
            />
        </div>

        <div class="card-header flex justify-between flex-wrap pt-4">
            <!-- begin::Card Title -->
            <div class="card-title my-1">
                <a-input-search
                    v-model:value="value"
                    placeholder="Tìm kiếm"
                    style="width: 200px"
                    @search="onSearch"
                />
            </div>
            <!-- end::Card Title -->

            <!-- begin::Card Toolbar -->
            <div class="card-toolbar my-1">
                <div class="flex justify-end flex-wrap">
                    <!-- begin::Filter -->
                    <a-button
                        class="me-3 flex align-items-center justify-center"
                        :size="size"
                        @click="showModalFilter"
                    >
                        <template #icon>
                            <FilterOutlined />
                        </template>
                        <span>Lọc</span>
                    </a-button>
                    <a-modal
                        v-model:open="openModalFilter"
                        title="Basic Modal"
                        @ok="handleOkModalFilter"
                        cancelText="Reset"
                        okText="Áp dụng"
                        :onOk="success"
                    >
                        <a-form
                            :label-col="labelCol"
                            :wrapper-col="wrapperCol"
                            layout="horizontal"
                            style="max-width: 600px"
                        >
                            <a-form-item label="Chức vụ">
                                <a-select>
                                    <a-select-option value="user"
                                        >User</a-select-option
                                    >
                                    <a-select-option value="admin"
                                        >Admin</a-select-option
                                    >
                                </a-select>
                            </a-form-item>
                            <a-form-item label="Trạng thái">
                                <a-radio-group v-model:value="radioValue">
                                    <a-radio value="online">Online</a-radio>
                                    <a-radio value="offline">Offline</a-radio>
                                </a-radio-group>
                            </a-form-item>
                        </a-form>
                    </a-modal>
                    <!-- end::Filter -->

                    <!-- begin::Export -->
                    <a-button
                        class="me-0 me-sm-3 mb-3 mb-lg-0 flex align-items-center justify-center"
                        :size="size"
                        @click="showModalExport"
                    >
                        <template #icon>
                            <ExportOutlined />
                        </template>
                        <span>Xuất file</span>
                    </a-button>
                    <a-modal
                        v-model:open="openModalExport"
                        title="Xuất file"
                        @ok="handleOkModalExport"
                        cancelText="Huỷ"
                        okText="Xuất file"
                        :onOk="success"
                    >
                        <a-form
                            :label-col="labelCol"
                            :wrapper-col="wrapperCol"
                            layout="horizontal"
                            style="max-width: 600px"
                        >
                            <a-form-item label="Loại file">
                                <a-select>
                                    <a-select-option value="excel"
                                        >Excel</a-select-option
                                    >
                                    <a-select-option value="admin"
                                        >PDF</a-select-option
                                    >
                                    <a-select-option value="admin"
                                        >Zip</a-select-option
                                    >
                                </a-select>
                            </a-form-item>
                            <a-form-item label="Khoảng thời gian">
                                <a-range-picker />
                            </a-form-item>
                        </a-form>
                    </a-modal>
                    <!-- end::Export -->

                    <!-- begin::Add New -->
                    <a-button
                        type="primary"
                        @click="showModalAddNew"
                        :size="size"
                    >
                        Thêm mới
                    </a-button>
                    <a-modal
                        v-model:open="openModalAddNew"
                        title="Xuất file"
                        @ok="handleOkModalAddNew"
                        cancelText="Huỷ"
                        okText="Xuất file"
                        :onOk="success"
                    >
                        <a-form
                            :label-col="labelCol"
                            :wrapper-col="wrapperCol"
                            layout="horizontal"
                            style="max-width: 600px"
                        >
                            <a-form-item label="Tên">
                                <a-input />
                            </a-form-item>
                            <a-form-item label="Email">
                                <a-input />
                            </a-form-item>
                            <a-form-item label="Chức vụ">
                                <a-select>
                                    <a-select-option value="admin"
                                        >Admin</a-select-option
                                    >
                                    <a-select-option value="user"
                                        >User</a-select-option
                                    >
                                </a-select>
                            </a-form-item>
                        </a-form>
                    </a-modal>
                    <!-- end::Add New -->
                </div>
            </div>
            <!-- end::Card Toolbar -->
        </div>

        <!-- begin::Main Content -->
        <div class="">
            <a-tabs v-model:activeKey="activeKey">
                <a-tab-pane key="1">
                    <template #tab> Tất cả ({{ totalLand }}) </template>
                    <!-- begin::News Items -->
                    <div class="flex border-[1px]">
                        <div class="col-3 p-3">
                            <div>
                                <img
                                    src="../../../assets/images/land/land1.png"
                                    class="flex object-fit-cover w-full h-full"
                                />
                            </div>
                        </div>
                        <div class="col-9">
                            <Card title="Bán nhanh biệt thự">
                                <template #content>
                                    <span class="text-sm"
                                        >Bán nhà mặt phố Hồ Chí Minh</span
                                    >
                                </template>
                            </Card>
                        </div>
                    </div>
                    <!-- end::News Items -->
                </a-tab-pane>
                <a-tab-pane key="2" force-render>
                    <template #tab>
                        Đang hiển thị ({{ totalLand - 10 }})
                    </template>
                    Content of Tab Pane 2
                </a-tab-pane>
                <a-tab-pane key="3">
                    <template #tab> Chờ duyệt ({{ totalLand - 10 }}) </template>
                    Content of Tab Pane 3
                </a-tab-pane>
            </a-tabs>
        </div>
        <!-- end::Main Content -->

        <!-- begin::Pagination -->
        <div class="mb-5 ml-auto mr-auto">
            <a-pagination
                v-model:current="current"
                :total="8000"
                show-less-items
            >
            </a-pagination>
        </div>
        <!-- end::Pagination -->
    </div>
</template>

<script setup>
import { MinusOutlined } from "@ant-design/icons-vue";
import { ref } from "vue";

const current = ref(2);
var totalLand = 30;
var normal = "Thông thường";
</script>

<script>
import { ref, h, defineComponent, reactive } from "vue";
import ThePageHeader from "../../../components/ThePageHeader.vue";
import Card from "../../../components/base/card/Card.vue";

export default {
    components: {
        ThePageHeader,
        Card,
    },
};
</script>
<style>
.sidebar-box-item {
    margin-bottom: 12px;
    font-weight: normal;
}
</style>
