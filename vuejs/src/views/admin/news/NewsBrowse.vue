<template>
    <div class="card">
        <!-- begin::Card Header -->
        <div class="card-header d-flex justify-content-between flex-wrap pt-4">
            <!-- begin::Card Title -->
            <div class="card-title">
                <a-input-search
                    v-model:value="value"
                    placeholder="Tìm kiếm"
                    style="width: 200px"
                    @search="onSearch"
                />
            </div>
            <!-- end::Card Title -->

            <!-- begin::Card Toolbar -->
            <div class="card-toolbar">
                <div class="d-flex justify-content-end">
                    <!-- begin::Filter -->
                    <a-dropdown :trigger="click">
                        <template #overlay>
                            <a-menu @click="handleMenuClick">
                                <a-menu-item key="1">
                                    <UserOutlined />
                                    Trạng thái
                                </a-menu-item>
                                <a-menu-item key="2">
                                    <UserOutlined />
                                    Ngày đăng
                                </a-menu-item>
                                <a-menu-item key="3">
                                    <UserOutlined />
                                    3rd item
                                </a-menu-item>
                            </a-menu>
                        </template>
                        <a-button class="me-3" :size="size">
                            <template #icon>
                                <FilterOutlined />
                            </template>
                            Lọc
                        </a-button>
                    </a-dropdown>

                    <!-- end::Filter -->

                    <!-- begin::Export -->
                    <a-button class="" :size="size" @click="showModalExport">
                        <template #icon>
                            <ExportOutlined />
                        </template>
                        Xuất file
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
                </div>
            </div>
            <!-- end::Card Toolbar -->
        </div>
        <!-- end::Card Header -->

        <!-- begin::Card Body -->
        <div class="card-body">
            <!-- begin::Table -->
            <div>
                <div style="margin-bottom: 16px">
                    <a-button
                        type="primary"
                        :disabled="!hasSelected"
                        :loading="state.loading"
                        @click="start"
                    >
                        Duyệt tin
                    </a-button>
                    <span style="margin-left: 8px">
                        <template v-if="hasSelected">
                            {{
                                `Selected ${state.selectedRowKeys.length} items`
                            }}
                        </template>
                    </span>
                </div>
                <a-table
                    :row-selection="{
                        selectedRowKeys: state.selectedRowKeys,
                        onChange: onSelectChange,
                    }"
                    :columns="columns"
                    :data-source="data"
                >
                    <template #bodyCell="{ column, record }">
                        <template v-if="column.key === 'detail'">
                            <div>
                                <a-button
                                    type="link"
                                    style="color: red"
                                    :href="`/admin/news-detail`"
                                    >Chi tiết</a-button
                                >
                            </div>
                        </template>
                        <template v-if="column.dataIndex === 'status'">
                            <a-tag
                                :color="
                                    record.status === 'unpublished'
                                        ? '#f50'
                                        : '#87d068'
                                "
                            >
                                {{ record.status }}</a-tag
                            >
                        </template>
                        <template v-else>
                            {{ record[column.dataIndex] }}
                        </template>
                    </template>
                </a-table>
            </div>
            <!-- end::Table -->
        </div>
    </div>
</template>

<script setup>
import {
    ExclamationCircleOutlined,
    FilterOutlined,
    ExportOutlined,
} from "@ant-design/icons-vue";
import { computed, reactive, createVNode } from "vue";
import { Modal, message } from "ant-design-vue";

// radio value
const radioValue = ref("online");

// modal export

const openModalExport = ref(false);
const showModalExport = () => {
    openModalExport.value = true;
};
const handleOkModalExport = (e) => {
    console.log(e);
    openModalExport.value = false;
};

// modal add new

const openModalAddNew = ref(false);
const showModalAddNew = () => {
    openModalAddNew.value = true;
};
const handleOkModalAddNew = (e) => {
    console.log(e);
    openModalAddNew.value = false;
};

// modal edit
const openModalEdit = ref(false);
const showModalEdit = () => {
    openModalEdit.value = true;
};
const handleOkModalEdit = (e) => {
    console.log(e);
    openModalEdit.value = false;
};

// alert message

const success = () => {
    message.success("Thao tác thành công");
};
const error = () => {
    message.error("Thao tác thất bại");
};
const warning = () => {
    message.warning("Cảnh báo!");
};

// comfirm modal
const showConfirmDelete = () => {
    Modal.confirm({
        title: "Cảnh báo",
        icon: createVNode(ExclamationCircleOutlined),
        content: createVNode(
            "div",
            {
                style: "color:red;",
            },
            "Bạn chắc chắn muốn xoá người dùng này ?"
        ),
        okText: "Xoá",
        cancelText: "Huỷ",
        onOk() {
            success();
        },
        onCancel() {},
        class: "test",
    });
};

const labelCol = {
    style: {
        width: "150px",
    },
};
const wrapperCol = {
    span: 14,
};

// table
const columns = [
    {
        title: "Người đăng",
        dataIndex: "name",
    },
    {
        title: "Tiêu đề",
        dataIndex: "title",
    },
    {
        title: "Loại bất động sản",
        dataIndex: "landType",
    },
    {
        title: "Dự án",
        dataIndex: "project",
    },
    {
        title: "Địa chỉ",
        dataIndex: "address",
    },
    {
        title: "Ngày đăng",
        dataIndex: "date",
    },
    {
        title: "Trạng thái",
        dataIndex: "status",
    },
    {
        title: "Chi tiết bài viết",
        dataIndex: "detail",
        key: "detail",
    },
];
const data = [];
for (let i = 0; i < 46; i++) {
    data.push({
        key: i,
        name: `Edward King ${i}`,
        title: `Bất động sản`,
        landType: `Cho thuê nhà riêng`,
        project: `Alo city`,
        address: `London, Park Lane no. ${i}`,
        date: `2021-10-10`,
        status: `unpublished`,
    });
}

const state = reactive({
    selectedRowKeys: [],
    // Check here to configure the default column
    loading: false,
});
const hasSelected = computed(() => state.selectedRowKeys.length > 0);
const start = () => {
    state.loading = true;
    // ajax request after empty completing
    setTimeout(() => {
        state.loading = false;
        state.selectedRowKeys = [];
    }, 1000);
};
const onSelectChange = (selectedRowKeys) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    state.selectedRowKeys = selectedRowKeys;
};
// dropdown
const handleMenuClick = (e) => {
    console.log("click", e);
};
</script>

<script>
import { ref } from "vue";
import ThePageHeader from "../../../components/ThePageHeader.vue";

export default {
    components: {
        ThePageHeader,
    },
};
</script>
<style lang=""></style>
