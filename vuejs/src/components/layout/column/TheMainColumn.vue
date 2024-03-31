<template>
  <!-- begin::Thumbnail setting -->
  <Card title="Hình ảnh chính">
    <template #content>
      <!-- begin::Image Input -->
      <div class="text-center">
        <div
          class="image-input image-input-empty image-input-outline image-input-placeholder"
        >
          <!-- begin::Image avatar -->
          <div
            class="image-input-wrapper w-72 h-72"
            style="
              background-image: url(https://file4.batdongsan.com.vn/resize/1275x717/2024/03/31/20240331092400-d913_wm.jpg);
            "
          ></div>
          <!-- end::Image avatar -->

          <!-- begin::Label -->
          <div>
            <a-upload
              list-type="picture"
              :max-count="1"
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            >
              <a-button
                class="flex justify-center align-items-center cursor-pointer bg-primary-white-color position-absolute top-[-4%] right-[-4%] rounded-full w-[25px] h-[25px]"
              >
                <UploadOutlined />
              </a-button>
            </a-upload>
          </div>
          <!-- end::Label -->
        </div>
      </div>
    </template>
  </Card>
  <!-- end::Thumbnail setting -->

  <!-- begin::Status -->
  <Card title="Trạng thái">
    <template #content>
      <InputSelect :valueSelected="post.sold_status" :options="status" />
    </template>
  </Card>
  <!-- end::Status -->

  <!-- begin::Statistic -->
  <Card title="Thống kê lượt xem">
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
import { UploadOutlined } from "@ant-design/icons-vue";
import { useRoute } from "vue-router";
import getPostAPI from "../../../api/posts/getDetails";

const route = useRoute();
const post = reactive({
  title: "",
  description: "",
  area: "",
  price: "",
  unit: "",
  sold_status: "",
  status_id: "",
  user_id: "",
});
if (route.params.id) {
  const fetchPostById = async (id) => {
    const getPost = await getPostAPI.getById(id);
    post.title = getPost.title;
    post.description = getPost.description;
    post.area = getPost.area.toString();
    post.price = getPost.price.toString();
    post.unit = getPost.unit.toString();
    post.sold_status = getPost.sold_status.toString();
    post.status_id = getPost.status_id.toString();
    post.user_id = getPost.user_id.toString();
  };
  fetchPostById(route.params.id);
}

const status = ref([
  {
    value: "1",
    label: "Đã bán",
  },
  {
    value: "0",
    label: "Chưa bán",
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
<style></style>
