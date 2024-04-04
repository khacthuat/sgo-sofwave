<template>
  <!-- begin::Thumbnail setting -->
  <Card title="Hình ảnh chính">
    <template #content>
      <!-- begin::Image Input -->
      <a-upload
        v-model:file-list="fileList"
        name="avatar"
        list-type="picture-card"
        class="avatar-uploader"
        :show-upload-list="false"
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        :before-upload="beforeUpload"
        @change="handleChange"
      >
        <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
        <div v-else>
          <LoadingOutlined v-if="loading"></LoadingOutlined>
          <plus-outlined v-else></plus-outlined>
          <div class="ant-upload-text">Tải ảnh lên</div>
        </div>
      </a-upload>
    </template>
  </Card>
  <!-- end::Thumbnail setting -->

  <!-- begin::Status -->
  <Card title="Trạng thái">
    <template #content>
      <div class="mb-3">
        <InputSelect
          :valueSelected="post.sold_status.toString()"
          :options="soldStatus"
          :title="'Trạng thái bán'"
        />
      </div>

      <div>
        <InputSelect
          :valueSelected="post.status?.id?.toString()"
          :options="status"
          :title="'Trạng thái bài viết'"
        />
      </div>
    </template>
  </Card>
  <!-- end::Status -->

  <!-- begin::Statistic -->
  <Card title="Thống kê lượt xem" v-if="selectedPost == true">
    <template #content>
      <!-- begin:Statistic views -->
      <a-col class="col-12">
        <a-statistic title="Lượt xem tháng hiện tại:" :value="112" />
      </a-col>
      <a-col class="col-12">
        <a-statistic title="Tổng lượt xem:" :value="1000" />
      </a-col>
      <!-- end::Statistic views -->
    </template>
  </Card>
  <!-- end::Statistic -->
</template>

<script setup>
import { reactive, ref } from "vue";
import { PlusOutlined, LoadingOutlined } from "@ant-design/icons-vue";
import { useRoute } from "vue-router";
import getPostAPI from "../../../api/posts/getDetails";
import { message } from "ant-design-vue";

// xử lý upload ảnh
function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}
const fileList = ref([]);
const loading = ref(false);
const imageUrl = ref("");
const handleChange = (info) => {
  if (info.file.status === "uploading") {
    loading.value = true;
    return;
  }
  if (info.file.status === "done") {
    // Get this url from response in real world.
    getBase64(info.file.originFileObj, (base64Url) => {
      imageUrl.value = base64Url;
      loading.value = false;
    });
  }
  if (info.file.status === "error") {
    loading.value = false;
    message.error("Tải ảnh lên thất bại!");
  }
};
const beforeUpload = (file) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("Bạn chỉ có thể tải lên file JPG/PNG!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Ảnh phải nhỏ hơn 2MB!");
  }
  return isJpgOrPng && isLt2M;
};

// lấy dữ liệu bài viết theo id
const route = useRoute();
const selectedPost = ref(false);
const post = reactive({
  title: "",
  description: "",
  area: "",
  price: "",
  unit: "",
  sold_status: "",
  status: "",
  user: "",
});
if (route.params.id) {
  selectedPost.value = true;
  const fetchPostById = async (id) => {
    const getPost = await getPostAPI.getById(id);
    Object.keys(post).forEach((key) => {
      post[key] = getPost[key];
    });
  };
  fetchPostById(route.params.id);
}

const soldStatus = ref([
  {
    value: "1",
    label: "Đã bán",
  },
  {
    value: "0",
    label: "Chưa bán",
  },
]);

const status = ref([
  {
    value: "3",
    label: "Chờ duyệt",
  },
  {
    value: "4",
    label: "Công khai",
  },
  {
    value: "5",
    label: "Không công khai",
  },
]);
</script>

<script>
import InputSelect from "../../../components/base/input/InputSelect.vue";
import Card from "../../../components/base/card/Card.vue";
export default {
  components: {
    InputSelect,
    Card,
  },
};
</script>
<style>
.avatar-uploader .ant-upload-select-picture-card {
  width: 100% !important;
  height: 256px !important;
}

.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}
</style>
