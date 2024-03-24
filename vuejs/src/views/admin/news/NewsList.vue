<template>
    <div class="card">
        <!-- begin::Card Header -->
        <div class="card-header flex justify-between flex-wrap pt-4">
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
                <div class="flex justify-end">
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
                        <a-button class="me-3">
                            <template #icon>
                                <FilterOutlined />
                            </template>
                            Lọc
                        </a-button>
                    </a-dropdown>

                    <!-- end::Filter -->

                    <!-- begin::Export -->
                    <a-button @click="showModalExport">
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
            <a-table
                :columns="columns"
                :data-source="data"
                :scroll="{ x: 1500 }"
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
                    <template v-if="column.dataIndex === 'name'">
                        <a>{{ record[column.dataIndex] }}</a>
                    </template>
                    <template v-if="column.dataIndex === 'status'">
                        <a-tag
                            :color="
                                record.status === 'sold'
                                    ? 'green'
                                    : record.status === 'unsold'
                                    ? 'red'
                                    : ''
                            "
                        >
                            {{ record.status }}</a-tag
                        >
                    </template>
                </template>
            </a-table>
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
import { createVNode } from "vue";
import { Modal, message } from "ant-design-vue";

// modal export
const openModalExport = ref(false);
const showModalExport = () => {
    openModalExport.value = true;
};
const handleOkModalExport = (e) => {
    console.log(e);
    openModalExport.value = false;
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
        title: "Địa chỉ",
        dataIndex: "address",
    },
    {
        title: "Ngày đăng",
        dataIndex: "created_at",
    },
    {
        title: "Ngày sửa",
        dataIndex: "updated_at",
    },
    {
        title: "Lươt xem",
        dataIndex: "view",
    },
    {
        title: "Trạng thái",
        dataIndex: "status",
    },
    {
        title: "Chi tiết",
        key: "detail",
        fixed: "right",
        width: 120,
    },
];
const data = [
    {
        key: "1",
        name: "Nguyễn Văn Bách",
        title: "Bất động sản",
        address: "Nam Từ Liêm, Hà Nội",
        created_at: "10/10/2021 10:00:00",
        updated_at: "10/10/2021 10:00:00",
        view: "150",
        status: "sold",
        detail: "Chi tiết",
    },
    {
        key: "2",
        name: "Nguyễn Văn Bách",
        title: "Bất động sản",
        address: "Nam Từ Liêm, Hà Nội",
        created_at: "10/10/2021 10:00:00",
        updated_at: "10/10/2021 10:00:00",
        view: "150",
        status: "unsold",
        detail: "Chi tiết",
    },
    {
        key: "3",
        name: "Nguyễn Văn Bách",
        title: "Bất động sản",
        address: "Nam Từ Liêm, Hà Nội",
        created_at: "10/10/2021 10:00:00",
        updated_at: "10/10/2021 10:00:00",
        view: "150",
        status: "unsold",
        detail: "Chi tiết",
    },
    {
        key: "4",
        name: "Nguyễn Văn Bách",
        title: "Bất động sản",
        address: "Nam Từ Liêm, Hà Nội",
        created_at: "10/10/2021 10:00:00",
        updated_at: "10/10/2021 10:00:00",
        view: "150",
        status: "unsold",
        detail: "Chi tiết",
    },
    {
        key: "5",
        name: "Nguyễn Văn Bách",
        title: "Bất động sản",
        address: "Nam Từ Liêm, Hà Nội",
        created_at: "10/10/2021 10:00:00",
        updated_at: "10/10/2021 10:00:00",
        view: "150",
        status: "unsold",
        detail: "Chi tiết",
    },
    {
        key: "6",
        name: "Nguyễn Văn Bách",
        title: "Bất động sản",
        address: "Nam Từ Liêm, Hà Nội",
        created_at: "10/10/2021 10:00:00",
        updated_at: "10/10/2021 10:00:00",
        view: "150",
        status: "sold",
        detail: "Chi tiết",
    },
    {
        key: "7",
        name: "Nguyễn Văn Bách",
        title: "Bất động sản",
        address: "Nam Từ Liêm, Hà Nội",
        created_at: "10/10/2021 10:00:00",
        updated_at: "10/10/2021 10:00:00",
        view: "150",
        status: "sold",
        detail: "Chi tiết",
    },
    {
        key: "8",
        name: "Nguyễn Văn Bách",
        title: "Bất động sản",
        address: "Nam Từ Liêm, Hà Nội",
        created_at: "10/10/2021 10:00:00",
        updated_at: "10/10/2021 10:00:00",
        view: "150",
        status: "sold",
        detail: "Chi tiết",
    },
    {
        key: "9",
        name: "Nguyễn Văn Bách",
        title: "Bất động sản",
        address: "Nam Từ Liêm, Hà Nội",
        created_at: "10/10/2021 10:00:00",
        updated_at: "10/10/2021 10:00:00",
        view: "150",
        status: "sold",
        detail: "Chi tiết",
    },
    {
        key: "10",
        name: "Nguyễn Văn Bách",
        title: "Bất động sản",
        address: "Nam Từ Liêm, Hà Nội",
        created_at: "10/10/2021 10:00:00",
        updated_at: "10/10/2021 10:00:00",
        view: "150",
        status: "unsold",
        detail: "Chi tiết",
    },
    {
        key: "11",
        name: "Nguyễn Văn Bách",
        title: "Bất động sản",
        address: "Nam Từ Liêm, Hà Nội",
        created_at: "10/10/2021 10:00:00",
        updated_at: "10/10/2021 10:00:00",
        view: "150",
        status: "sold",
        detail: "Chi tiết",
    },
    {
        key: "12",
        name: "Nguyễn Văn Bách",
        title: "Bất động sản",
        address: "Nam Từ Liêm, Hà Nội",
        created_at: "10/10/2021 10:00:00",
        updated_at: "10/10/2021 10:00:00",
        view: "150",
        status: "unsold",
        detail: "Chi tiết",
    },
];
const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(
            `selectedRowKeys: ${selectedRowKeys}`,
            "selectedRows: ",
            selectedRows
        );
    },
    getCheckboxProps: (record) => ({
        disabled: record.name === "Disabled User",
        // Column configuration not to be checked
        name: record.name,
    }),
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
<style></style>
