<template>
  <ThePageHeader />

  <div class="">
    <!-- begin::Card Header -->
    <div class="card-header flex justify-between flex-wrap py-4">
      <!-- begin::Card Title -->
      <div class="card-title my-1">
        <a-input-search placeholder="Tìm kiếm" style="min-width: 200px" />
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
        <a-table
          :columns="columns"
          v-model:data-source="data"
          :scroll="{ x: 1500 }"
        >
          <template #bodyCell="{ column, record }">
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
                        <div @click="showConfirmDelete(record.id)">Xoá</div>
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
            <template v-if="column.dataIndex === 'role_id'">
              <a-tag
                :color="
                  record.role_id === 1
                    ? '#87d068'
                    : record.role_id === 2
                    ? '#2db7f5'
                    : record.role_id === 3
                    ? '#8b5cf6'
                    : ''
                "
              >
                {{
                  record.role_id === 1
                    ? "admin"
                    : record.role_id === 2
                    ? "đầu chủ"
                    : record.role_id === 3
                    ? "sale"
                    : ""
                }}
              </a-tag>
            </template>
            <template v-else-if="column.dataIndex === 'is_active'">
              <a-tag
                :bordered="false"
                :color="
                  record.is_active == 1
                    ? 'success'
                    : record.is_active == 0
                    ? 'error'
                    : ''
                "
              >
                {{
                  record.is_active == 1 ? "hoạt động" : "không hoạt động"
                }}</a-tag
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
    @updateUserList="fetchUsersList"
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
import messageAnt from "../../../scripts/message";

// table
const columns = [
  {
    title: "Tên",
    width: 200,
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
    dataIndex: "role_id",
    key: "6",
    width: 100,
  },
  {
    title: "Trạng thái",
    dataIndex: "is_active",
    key: "7",
    width: 100,
  },
  {
    title: "Số tin đã đăng",
    dataIndex: "activity",
    key: "8",
    width: 100,
  },
  {
    title: "Action",
    key: "operation",
    width: 100,
  },
];

const data = ref([]);

/**
 * Hàm lấy danh sách người dùng
 * @param
 * CreatedBy: youngbachhh (28/03/2024)
 */
const fetchUsersList = async () => {
  data.value = [];
  const listUsers = await listUsersAPI();
  for (let i = 0; i < listUsers.length; i++) {
    data.value.push({
      id: listUsers[i].id,
      name: listUsers[i].name,
      email: listUsers[i].email,
      created_at: formatDate(listUsers[i].created_at),
      updated_at: formatDate(listUsers[i].updated_at),
      role_id: listUsers[i].role_id,
      is_active: listUsers[i].is_active,
      activity: 120,
    });
  }
};
fetchUsersList();

// modal update/add
const title = ref("");
const isShowDetail = ref(false);
const userSelected = ref({
  name: "",
  email: "",
  role_id: "",
  is_active: "",
});

const showDetail = (value) => {
  isShowDetail.value = value;
};
const showModalAdd = () => {
  userSelected.value = {
    name: "",
    email: "",
    role_id: "",
    is_active: "",
  };
  isShowDetail.value = true;
  title.value = "Thêm mới";
};
const showModalUpdate = async (user) => {
  title.value = "Sửa";
  userSelected.value = user;
  isShowDetail.value = true;
};

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
  openModalExport.value = false;
};

// comfirm modal
const showConfirmDelete = async (id) => {
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
    onOk() {
      const fetchDeleteUser = async (id) => {
        const deleteUser = await delteUserAPI(id);
        updateUserList();
        messageAnt.success();
      };
      fetchDeleteUser(id);
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
