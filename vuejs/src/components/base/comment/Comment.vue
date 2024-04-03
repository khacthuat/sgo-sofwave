<template>
  <div class="comments mt-3">
    <a-descriptions title="Bình luận"> </a-descriptions>
    <div>
      <div>
        <InputArea :type="'comment'" @submitComment="onSubmitComment" />
      </div>
      <div class="clearfix">
        <a-upload
          v-model:file-list="fileList"
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          list-type="picture-card"
          @preview="handlePreview"
        >
          <div v-if="fileList.length < 8">
            <plus-outlined />
            <div style="margin-top: 8px">Upload</div>
          </div>
        </a-upload>
        <a-modal
          :open="previewVisible"
          :title="previewTitle"
          :footer="null"
          @cancel="handleCancel"
        >
          <img alt="example" style="width: 100%" :src="previewImage" />
        </a-modal>
      </div>
    </div>
    <a-divider />

    <a-list
      item-layout="vertical"
      size="large"
      :pagination="pagination"
      :data-source="listData"
    >
      <template #renderItem="{ item }">
        <a-list-item key="item.title">
          <a-list-item-meta :description="item.description">
            <template #title>
              <a :href="item.href">{{ item.title }}</a>
            </template>
            <template #avatar>
              <a-avatar
                :src="item.avatar"
                size="medium"
                class="me-2"
                :style="{
                  backgroundColor: '#f50',
                  verticalAlign: 'middle',
                }"
              >
                {{ item.title[0] }}
              </a-avatar>
            </template>
          </a-list-item-meta>
          {{ item.content }}
        </a-list-item>
      </template>
    </a-list>
  </div>
</template>

<script setup>
import InputArea from "../input/InputArea.vue";
import auth from "../../../stores/auth";
import { ref, watch } from "vue";
import { PlusOutlined } from "@ant-design/icons-vue";
import { useRoute } from "vue-router";

import createCommentAPI from "../../../api/comment/create";
import getUserAPI from "../../../api/users/getUser";
import formatDate from "../../../scripts/formatDate";
const route = useRoute();
const store = auth();

// Props
const props = defineProps({
  comments: {
    type: Array,
    default: () => [],
  },
});

const emits = defineEmits(["submitComment"]);

// const listData = props.comments;

// Data
const userComment = ref({
  content: "",
  post_id: route.params.id,
  user_id: "",
});

// Methods
const onSubmitComment = (content) => {
  userComment.value.content = content;
  userComment.value.user_id = store.user.id;
  const fetchCreateComment = async () => {
    try {
      await createCommentAPI(userComment.value);
      emits("submitComment");
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  fetchCreateComment();
};

const listData = ref([]);

watch(
  () => props.comments,
  async (value) => {
    // Thực hiện các hành động cần thiết khi có sự thay đổi của props.comments
    // Ví dụ: tính toán lại độ dài của props.comments
    const listComment = [];

    for (let i = 0; i < value.length; i++) {
      const userName = await getUserAPI.getNameById(value[i].user_id);
      const formattedDate = formatDate(value[i].created_at);
      let ans = {
        href: "https://www.antdv.com/",
        title: userName,
        avatar: "",
        description: formattedDate,
        content: value[i].content,
      };
      if (listData.value.length > 0) {
        listData.value.unshift(ans);
        break;
      }
      listComment.push(ans);
    }
    if (listComment.length > 0) listData.value = listComment;
  }
);

// Pagination
const pagination = {
  onChange: (page) => {},
  pageSize: 5,
};

// Upload Image
function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}
const previewVisible = ref(false);
const previewImage = ref("");
const previewTitle = ref("");
const fileList = ref([
  {
    uid: "-1",
    name: "image.png",
    status: "done",
    url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
  },
  {
    uid: "-xxx",
    percent: 50,
    name: "image.png",
    status: "uploading",
    url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
  },
  {
    uid: "-5",
    name: "image.png",
    status: "error",
  },
]);
const handleCancel = () => {
  previewVisible.value = false;
  previewTitle.value = "";
};
const handlePreview = async (file) => {
  if (!file.url && !file.preview) {
    file.preview = await getBase64(file.originFileObj);
  }
  previewImage.value = file.url || file.preview;
  previewVisible.value = true;
  previewTitle.value =
    file.name || file.url.substring(file.url.lastIndexOf("/") + 1);
};
</script>

<script>
export default {};
</script>

<style>
.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}
</style>
