<template>
    <div class="">
        <!-- begin::Card Header -->
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
        <!-- end::Card Header -->

        <!-- begin::Card Body -->
        <div class="card-body">
            <!-- begin::Table -->
            <div clas="table">
                <a-table
                    :columns="columns"
                    :data-source="data"
                    :scroll="{ x: 1500 }"
                    size="medium"
                >
                    <template #bodyCell="{ column, record }">
                        <!-- modal show up when click actions button -->
                        <template v-if="column.key === 'operation'">
                            <div>
                                <a-dropdown>
                                    <template #overlay>
                                        <a-menu @click="handleMenuClick">
                                            <a-menu-item key="1">
                                                <div>
                                                    <div @click="showModalEdit">
                                                        Sửa
                                                    </div>
                                                </div>
                                                <a-modal
                                                    v-model:open="openModalEdit"
                                                    title="Cập nhật thông tin"
                                                    :confirm-loading="
                                                        confirmLoading
                                                    "
                                                    cancelText="Huỷ"
                                                    okText="Lưu"
                                                    @ok="handleOkModalEdit"
                                                    :onOk="success"
                                                >
                                                    <a-form
                                                        :label-col="labelCol"
                                                        :wrapper-col="
                                                            wrapperCol
                                                        "
                                                        layout="horizontal"
                                                        style="max-width: 600px"
                                                    >
                                                        <a-form-item
                                                            label="Tên"
                                                        >
                                                            <a-input />
                                                        </a-form-item>
                                                        <a-form-item
                                                            label="Email"
                                                        >
                                                            <a-input />
                                                        </a-form-item>
                                                        <a-form-item
                                                            label="Chọn quyền:"
                                                        >
                                                            <a-select>
                                                                <a-select-option
                                                                    value="admin"
                                                                    >Admin</a-select-option
                                                                >
                                                                <a-select-option
                                                                    value="user"
                                                                    >User</a-select-option
                                                                >
                                                                <a-select-option
                                                                    value="sale"
                                                                    >Sale</a-select-option
                                                                >
                                                            </a-select>
                                                        </a-form-item>
                                                    </a-form>
                                                </a-modal>
                                            </a-menu-item>
                                            <a-menu-item key="2">
                                                <div>
                                                    <div
                                                        @click="
                                                            showConfirmDelete
                                                        "
                                                    >
                                                        Xoá
                                                    </div>
                                                </div>
                                            </a-menu-item>
                                        </a-menu>
                                    </template>
                                    <a-button>
                                        Chức năng
                                        <DownOutlined />
                                    </a-button>
                                </a-dropdown>
                            </div>
                        </template>

                        <!-- tag for role user -->
                        <template v-if="column.dataIndex === 'role'">
                            <a-tag
                                :color="
                                    record.role === 'admin'
                                        ? '#87d068'
                                        : record.role === 'user'
                                        ? '#2db7f5'
                                        : ''
                                "
                            >
                                {{ record.role }}</a-tag
                            >
                        </template>
                        <template v-else-if="column.dataIndex === 'status'">
                            <a-tag
                                :bordered="false"
                                :color="
                                    record.status === 'online'
                                        ? 'success'
                                        : record.status === 'offline'
                                        ? 'error'
                                        : ''
                                "
                            >
                                {{ record.status }}</a-tag
                            >
                        </template>
                        <template v-else>
                            <div class="">
                                {{ record[column.dataIndex] }}
                            </div>
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
    DownOutlined,
} from "@ant-design/icons-vue";
import { createVNode } from "vue";
import { Modal, message } from "ant-design-vue";

// radio value
const radioValue = ref("online");

// modal filter
const openModalFilter = ref(false);
const showModalFilter = () => {
    openModalFilter.value = true;
};
const handleOkModalFilter = (e) => {
    console.log(e);
    openModalFilter.value = false;
};

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
        title: "STT",
        width: 50,
        dataIndex: "number",
        key: "1",
    },
    {
        title: "Tên",
        width: 100,
        dataIndex: "name",
        key: "2",
    },
    {
        title: "Email",
        dataIndex: "email",
        key: "3",
        width: 150,
    },
    {
        title: "Ngày tham gia",
        dataIndex: "created_at",
        key: "4",
        width: 150,
    },
    {
        title: "Ngày cập nhật",
        dataIndex: "updated_at",
        key: "5",
        width: 150,
    },
    {
        title: "Chức vụ",
        dataIndex: "role",
        key: "6",
        width: 150,
    },
    {
        title: "Trạng thái",
        dataIndex: "status",
        key: "7",
        width: 150,
    },
    {
        title: "Số tin đã đăng",
        dataIndex: "activity",
        key: "8",
        width: 150,
    },
    {
        title: "Action",
        key: "operation",
        width: 120,
    },
];

const data = [];
for (let i = 0; i < 102; i++) {
    if (i % 2 == 0) {
        data.push({
            number: i,
            name: `Edrward ${i}`,
            email: "admin@gmail.com",
            created_at: "2021-10-10 10:10:10",
            updated_at: "2021-10-10 10:10:10",
            role: "admin",
            status: "online",
            activity: "120",
        });
    } else {
        data.push({
            number: i,
            name: `Edrward ${i}`,
            email: "admin@gmail.com",
            created_at: "2021-10-10 10:10:10",
            updated_at: "2021-10-10 10:10:10",
            role: "user",
            status: "offline",
            activity: "120",
        });
    }
}

// dropdown
const handleMenuClick = (e) => {
    console.log("click", e);
};
</script>

<script>
import { ref, h, defineComponent, reactive } from "vue";
import ThePageHeader from "../../../components/ThePageHeader.vue";

export default {
    components: {
        ThePageHeader,
    },
};
</script>
<style></style>
