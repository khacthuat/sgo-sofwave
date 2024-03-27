<template>
  <ThePageHeader />

  <div class="">
    <!-- begin::Card Header -->
    <div class="card-header flex justify-between flex-wrap py-4">
      <!-- begin::Card Title -->
      <div class="card-title my-1">
        <a-input-search placeholder="Tìm kiếm" style="width: 200px" />
      </div>
      <!-- end::Card Title -->

      <!-- begin::Card Toolbar -->
      <div class="card-toolbar my-1">
        <div class="flex justify-end flex-wrap">
          <!-- begin::Filter -->
          <a-button
            class="me-3 flex align-items-center justify-center"
            @click="showModalFilter"
          >
            <template #icon>
              <FilterOutlined />
            </template>
            <span>Lọc</span>
          </a-button>
          <a-modal
            v-model:open="openModalFilter"
            title="Lọc"
            cancelText="Reset"
            okText="Áp dụng"
            :onOk="
              () => {
                handleOkModalFilter();
                messageAnt.success();
              }
            "
          >
            <a-form layout="horizontal" style="max-width: 600px">
              <a-form-item label="Chức vụ">
                <a-select>
                  <a-select-option value="user">User</a-select-option>
                  <a-select-option value="admin">Admin</a-select-option>
                </a-select>
              </a-form-item>
              <a-form-item label="Trạng thái">
                <a-radio-group v-model:value="radioValue">
                  <a-radio value="active">Hoạt động</a-radio>
                  <a-radio value="inactive">Không hoạt động</a-radio>
                </a-radio-group>
              </a-form-item>
            </a-form>
          </a-modal>
          <!-- end::Filter -->

          <!-- begin::Export -->
          <a-button
            class="me-0 me-sm-3 mb-3 mb-lg-0 flex align-items-center justify-center"
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
            cancelText="Huỷ"
            okText="Xuất file"
            :onOk="
              () => {
                handleOkModalExport();
                messageAnt.success();
              }
            "
          >
            <a-form layout="horizontal" style="max-width: 600px">
              <a-form-item label="Loại file">
                <a-select>
                  <a-select-option value="excel">Excel</a-select-option>
                  <a-select-option value="admin">PDF</a-select-option>
                  <a-select-option value="admin">Zip</a-select-option>
                </a-select>
              </a-form-item>
              <a-form-item label="Khoảng thời gian">
                <a-range-picker />
              </a-form-item>
            </a-form>
          </a-modal>
          <!-- end::Export -->

          <!-- begin::Add New -->
          <a-button type="primary" @click="showModalAdd"> Thêm mới </a-button>
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
        <a-table :columns="columns" :data-source="data" :scroll="{ x: 1500 }">
          <template #bodyCell="{ column, record }">
            <!-- modal show up when click actions button -->
            <template v-if="column.key === 'operation'">
              <div>
                <a-dropdown trigger="click">
                  <template #overlay>
                    <a-menu>
                      <a-menu-item key="1">
                        <div>
                          <div @click="showModalUpdate(record)">Sửa</div>
                        </div>
                      </a-menu-item>
                      <a-menu-item key="2">
                        <div @click="showConfirmDelete">Xoá</div>
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
                    : record.role === 'employee'
                    ? '#2db7f5'
                    : record.role === 'sale'
                    ? '#8b5cf6'
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
                  record.status === 'active'
                    ? 'success'
                    : record.status === 'inactive'
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

  <UserDetail
    v-model:open="isShowDetail"
    @isShowDetail="showDetail"
    :title="title"
    :userSelected="userSelected"
  />
</template>

<script setup>
import {
  ExclamationCircleOutlined,
  FilterOutlined,
  ExportOutlined,
  DownOutlined,
} from "@ant-design/icons-vue";
import { ref, reactive } from "vue";

import { Modal } from "ant-design-vue";

import { createVNode } from "vue";
import listUsersAPI from "../../../api/users/index";
import delteUserAPI from "../../../api/users/deleteUser";
import formatDate from "../../../scripts/formatDate";
import UserDetail from "./UserDetail.vue";

// table
const columns = [
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

const data = ref([]);
const fetchUsersList = async () => {
  const listUsers = await listUsersAPI();
  for (let i = 0; i < listUsers.length; i++) {
    data.value.push({
      id: listUsers[i].id,
      name: listUsers[i].name,
      email: listUsers[i].email,
      created_at: formatDate(listUsers[i].created_at),
      updated_at: formatDate(listUsers[i].updated_at),
      role: listUsers[i].role,
      status: listUsers[i].status,
      activity: 120,
    });
  }
};
fetchUsersList();

// modal update/add
const title = ref("");
const isShowDetail = ref(false);
const userSelected = ref({
  name: "test",
  email: "test",
  role: "test",
  status: "test",
});

const showDetail = (value) => {
  isShowDetail.value = value;
};
const showModalAdd = () => {
  userSelected.value = {
    name: "",
    email: "",
    role: "",
    status: "",
  };
  isShowDetail.value = true;
  title.value = "Thêm mới";
};
const showModalUpdate = async (user) => {
  title.value = "Sửa";
  userSelected.value = user;
  isShowDetail.value = true;
};

// const updateData = {
//     name: "",
//     email: "",
//     role: "",
//     status: "",
// };

// const showModalUpdate = async (id) => {
//     const user = await getUserAPI.getById(id);
//     console.log(user);
//     updateData.name = user.name;
//     updateData.email = user.email;
//     updateData.role = user.role;
//     updateData.status = user.status;

//     openModalUpdate.value = true;
// };

// radio value
const radioValue = ref("active");

// modal filter
const openModalFilter = ref(false);
const showModalFilter = () => {
  openModalFilter.value = true;
};
const handleOkModalFilter = (e) => {
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

// comfirm modal
const showConfirmDelete = () => {
  Modal.confirm({
    title: "Cảnh báo",
    icon: createVNode(ExclamationCircleOutlined),
    content: createVNode(
      "div",
      {
        class: "text-danger",
      },
      "Bạn chắc chắn muốn xoá người dùng này ?"
    ),
    okText: "Xoá",
    cancelText: "Huỷ",
    async onOk() {
      const fetchDeleteUser = async (id) => {
        const deleteUser = await delteUserAPI(id);
      };
      await new Promise((resolve, reject) => {
        setTimeout(resolve, 500);
      });
      messageAnt.success();
    },

    onCancel() {},
  });
};
</script>

<script>
import ThePageHeader from "../../../components/ThePageHeader.vue";

export default {
  components: {
    ThePageHeader,
  },
};
</script>
<style></style>
