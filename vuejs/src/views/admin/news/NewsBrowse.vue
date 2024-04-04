<template>
  <ThePageHeader />
  <div class="card">
    <!-- begin::Card Header -->
    <div class="card-header flex justify-between flex-wrap pb-4">
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
          <a-button class="" @click="showModalExport">
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
              {{ `Đã chọn ${state.selectedRowKeys.length} tin` }}
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
          :scroll="{ x: 1500 }"
        >
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'detail'">
              <div>
                <router-link
                  :to="{
                    name: 'admin-news-detail',
                    params: { id: record.id },
                  }"
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
                {{ record.sold_status == 1 ? "đã bán" : "chưa bán" }}
              </a-tag>
            </template>
            <template v-else-if="column.dataIndex === 'status'">
              <div>
                <a-tag color="processing">
                  chờ duyệt
                  <template #icon>
                    <sync-outlined :spin="true" />
                  </template>
                </a-tag>
              </div>
            </template>
            <template v-else-if="column.dataIndex === 'title'">
              <div class="line-clamp-2">{{ record.title }}</div>
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
  FilterOutlined,
  ExportOutlined,
  UserOutlined,
  SyncOutlined,
} from "@ant-design/icons-vue";
import { computed, reactive } from "vue";
import messageAnt from "../../../scripts/message";
import { useSider } from "../../../stores/useSider";
import formatDate from "../../../scripts/formatDate";
import listPostsAPI from "../../../api/posts/index";

const store = useSider();

// store.onSiderOpenKeys(["sub1"]);
// store.onSiderSelectedKeys(["4"]);

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
    width: 350,
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
    title: "Trạng thái",
    dataIndex: "status",
  },
  {
    title: "Chi tiết bài viết",
    dataIndex: "detail",
    key: "detail",
  },
];
const data = ref([]);

/**
 * Hàm lấy danh sách bài viết chờ duyệt
 * @param
 * CreatedBy: youngbachhh (29/03/2024)
 */

const fetchPostsPendingList = async () => {
  data.value = [];

  const listPosts = await listPostsAPI.getPostPending();
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

fetchPostsPendingList();

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
  state.selectedRowKeys = selectedRowKeys;
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
