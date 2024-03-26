<template>
    <div class="flex flex-col justify-center n:w-full lg:w-4/5 ml-auto mr-auto">
        <div class="">
            <ThePageHeader
                title="Quản lý tin đăng"
                breadcrumb="Quản lý tin đăng"
            />
        </div>

        <div class="card-header flex justify-between flex-wrap py-4">
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
                        <span class="d-none d-md-block">Lọc</span>
                    </a-button>
                    <a-modal
                        v-model:open="openModalFilter"
                        title="Basic Modal"
                        @ok="handleOkModalFilter"
                        cancelText="Reset"
                        okText="Áp dụng"
                        :onOk="() => messageAnt.success()"
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
                        class="me-3 flex align-items-center justify-center"
                        :size="size"
                        @click="showModalExport"
                    >
                        <template #icon>
                            <ExportOutlined />
                        </template>
                        <span class="d-none d-md-block">Xuất file</span>
                    </a-button>
                    <a-modal
                        v-model:open="openModalExport"
                        title="Xuất file"
                        @ok="handleOkModalExport"
                        cancelText="Huỷ"
                        okText="Xuất file"
                        :onOk="() => messageAnt.success()"
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
                        :onOk="() => messageAnt.success()"
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
                <a-tab-pane key="1" class="space-y-5">
                    <template #tab> Tất cả ({{ totalLand }}) </template>
                    <!-- begin::News Items -->
                    <div class="flex n:flex-col sm:flex-row border-[1px]">
                        <div
                            class="flex align-items-center justify-center col-sm-3"
                        >
                            <img
                                src="../../../assets/images/land/land1.png"
                                class="object-fit-cover n:w-5/6"
                            />
                        </div>
                        <div class="col-sm-9">
                            <Card title="Bán nhanh biệt thự">
                                <template #content>
                                    <span class="text-sm">
                                        Bán nhà mặt phố Hồ Chí Minh
                                    </span>
                                    <CardInfor type="manage" />
                                </template>
                            </Card>
                        </div>
                    </div>
                    <div class="flex n:flex-col sm:flex-row border-[1px]">
                        <div
                            class="flex align-items-center justify-center col-sm-3"
                        >
                            <img
                                src="../../../assets/images/land/land1.png"
                                class="object-fit-cover n:w-5/6"
                            />
                        </div>
                        <div class="col-sm-9">
                            <Card title="Bán nhanh biệt thự">
                                <template #content>
                                    <span class="text-sm">
                                        Bán nhà mặt phố Hồ Chí Minh
                                    </span>
                                    <CardInfor type="manage" />
                                </template>
                            </Card>
                        </div>
                    </div>
                    <div class="flex n:flex-col sm:flex-row border-[1px]">
                        <div
                            class="flex align-items-center justify-center col-sm-3"
                        >
                            <img
                                src="../../../assets/images/land/land1.png"
                                class="object-fit-cover n:w-5/6"
                            />
                        </div>
                        <div class="col-sm-9">
                            <Card title="Bán nhanh biệt thự">
                                <template #content>
                                    <span class="text-sm">
                                        Bán nhà mặt phố Hồ Chí Minh
                                    </span>
                                    <CardInfor type="manage" />
                                </template>
                            </Card>
                        </div>
                    </div>
                    <!-- end::News Items -->
                </a-tab-pane>
                <a-tab-pane key="2" force-render class="space-y-5">
                    <template #tab>
                        Đang hiển thị ({{ totalLand - 10 }})
                    </template>
                    <!-- begin::News Items -->
                    <div class="flex n:flex-col sm:flex-row border-[1px]">
                        <div
                            class="flex align-items-center justify-center col-sm-3"
                        >
                            <img
                                src="../../../assets/images/land/land1.png"
                                class="object-fit-cover n:w-5/6"
                            />
                        </div>
                        <div class="col-sm-9">
                            <Card title="Bán nhanh biệt thự">
                                <template #content>
                                    <span class="text-sm">
                                        Bán nhà mặt phố Hồ Chí Minh
                                    </span>
                                    <CardInfor type="manage" />
                                </template>
                            </Card>
                        </div>
                    </div>
                    <div class="flex n:flex-col sm:flex-row border-[1px]">
                        <div
                            class="flex align-items-center justify-center col-sm-3"
                        >
                            <img
                                src="../../../assets/images/land/land1.png"
                                class="object-fit-cover n:w-5/6"
                            />
                        </div>
                        <div class="col-sm-9">
                            <Card title="Bán nhanh biệt thự">
                                <template #content>
                                    <span class="text-sm">
                                        Bán nhà mặt phố Hồ Chí Minh
                                    </span>
                                    <CardInfor type="manage" />
                                </template>
                            </Card>
                        </div>
                    </div>
                    <div class="flex n:flex-col sm:flex-row border-[1px]">
                        <div
                            class="flex align-items-center justify-center col-sm-3"
                        >
                            <img
                                src="../../../assets/images/land/land1.png"
                                class="object-fit-cover n:w-5/6"
                            />
                        </div>
                        <div class="col-sm-9">
                            <Card title="Bán nhanh biệt thự">
                                <template #content>
                                    <span class="text-sm">
                                        Bán nhà mặt phố Hồ Chí Minh
                                    </span>
                                    <CardInfor type="manage" />
                                </template>
                            </Card>
                        </div>
                    </div>
                    <!-- end::News Items -->
                </a-tab-pane>
                <a-tab-pane key="3" class="space-y-5">
                    <template #tab> Chờ duyệt ({{ totalLand - 10 }}) </template>
                </a-tab-pane>
            </a-tabs>
        </div>
        <!-- end::Main Content -->

        <!-- begin::Pagination -->
        <div class="my-5 ml-auto mr-auto">
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
import { FilterOutlined, ExportOutlined } from "@ant-design/icons-vue";
import { ref } from "vue";
import messageAnt from "../../../scripts/message";

const current = ref(2);
var totalLand = 30;
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
            () => {
                messageAnt.success();
            };
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
</script>

<script>
import { ref } from "vue";
import ThePageHeader from "../../../components/ThePageHeader.vue";
import Card from "../../../components/base/card/Card.vue";
import CardInfor from "../../../components/base/card/CardInfor.vue";

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
