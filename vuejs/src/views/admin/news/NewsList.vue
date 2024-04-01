<template>
  <ThePageHeader />
  <div class="card">
    <!-- begin::Card Header -->

    <div class="card-header flex justify-between flex-wrap py-4">
      <!-- begin::Card Title -->
      <div class="card-title">
        <a-input-search placeholder="Tìm kiếm" style="width: 200px" />
      </div>
      <!-- end::Card Title -->

      <!-- begin::Card Toolbar -->
      <div class="card-toolbar">
        <div class="flex justify-end">
          <!-- begin::Filter -->
          <a-dropdown trigger="click">
            <template #overlay>
              <a-menu>
                <a-menu-item key="1">
                  <UserOutlined />
                  Trạng thái
                </a-menu-item>
                <a-menu-item key="2">
                  <UserOutlined />
                  Ngày đăng
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
        id="main-table"
      >
        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'detail'">
            <div>
              <router-link
                :to="{ name: 'admin-news-detail', params: { id: record.id } }"
              >
                <a-button type="" style="color: red">Chi tiết</a-button>
              </router-link>
            </div>
          </template>
          <template v-else-if="column.dataIndex === 'username'">
            <a>{{ record.username }} </a>
          </template>
          <template v-else-if="column.dataIndex === 'sold_status'">
            <a-tag
              :color="
                record.sold_status === 1
                  ? '#87d068'
                  : record.sold_status === 0
                  ? '#f50'
                  : ''
              "
            >
              {{ record.sold_status == 1 ? "đã bán" : "chưa bán" }}</a-tag
            >
          </template>
          <template v-else-if="column.dataIndex === 'status'">
            <div>
              <a-tag
                :color="
                  record.status === 'published'
                    ? 'success'
                    : record.status === 'unpublished'
                    ? 'error'
                    : ''
                "
              >
                {{
                  record.status == "published"
                    ? "công khai"
                    : record.status == "unpublished"
                    ? "không công khai"
                    : ""
                }}
              </a-tag>
            </div>
          </template>
          <template v-else-if="column.dataIndex === 'title'">
            <div class="line-clamp-2">{{ record.title }}</div>
          </template>
        </template>
      </a-table>
      <!-- end::Table -->
    </div>
  </div>
</template>

<script setup>
import {
  FilterOutlined,
  ExportOutlined,
  UserOutlined,
  CheckCircleOutlined,
  SyncOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons-vue";
import { ref } from "vue";
import messageAnt from "../../../scripts/message";
import formatDate from "../../../scripts/formatDate";
import listPostsAPI from "../../../api/posts/index";
import { useSider } from "../../../stores/useSider";

// const store = useSider();
// store.onSiderOpenKeys(["sub1"]);
// store.onSiderSelectedKeys(["3"]);

// modal export
const openModalExport = ref(false);
const showModalExport = () => {
  openModalExport.value = true;
};
const handleOkModalExport = (e) => {
  openModalExport.value = false;
};

// table
const columns = [
  {
    title: "Người đăng",
    dataIndex: "username",
  },
  {
    title: "Tiêu đề",
    dataIndex: "title",
  },
  {
    title: "Địa chỉ",
    dataIndex: "address",
    width: 250,
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
    title: "Lượt xem",
    dataIndex: "view",
  },
  {
    title: "Trạng thái",
    dataIndex: "sold_status",
  },
  {
    title: "Trạng thái bài viết",
    dataIndex: "status",
  },
  {
    title: "Chi tiết",
    key: "detail",
    fixed: "right",
    width: 120,
  },
];
const data = ref([]);

/**
 * Hàm lấy danh sách bài viết đã duyệt
 * @param
 * CreatedBy: youngbachhh (29/03/2024)
 */

const fetchPostsList = async () => {
  data.value = [];

  const listPosts = await listPostsAPI.getPostNotPending();
  const posts = [];

  for (const post of listPosts) {
    posts.push({
      id: post.id,
      username: post.user.name,
      title: post.title,
      address: post.address,
      created_at: formatDate(post.created_at),
      updated_at: formatDate(post.updated_at),
      view: 1000,
      sold_status: post.sold_status,
      status: post.status.name,
    });
  }

  data.value = posts;
};

fetchPostsList();
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



