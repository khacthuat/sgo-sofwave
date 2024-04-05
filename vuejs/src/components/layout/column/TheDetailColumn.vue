<template>
  <!-- begin::Tabs -->
  <a-tabs>
    <a-tab-pane key="1" tab="Tổng quan">
      <div class="tab-content">
        <div class="flex flex-col gap-7 gap-lg-10">
          <!-- begin::Basic Infor Option -->
          <Card title="Thông tin cơ bản">
            <template #content>
              <!-- begin::Input Group -->
              <div class="mb-3 space-y-3">
                <div class="form-label">Địa điểm</div>
                <a-select
                  class="w-100"
                  placeholder="Tỉnh/Thành"
                  v-model:value="province"
                  show-search
                  allowClear
                  :options="provincesList"
                  :filter-option="filterOption"
                >
                </a-select>
                <a-select
                  class="w-100"
                  placeholder="Quận/Huyện"
                  v-model:value="district"
                  show-search
                  allowClear
                  :options="districtsList"
                  :filter-option="filterOption"
                >
                </a-select>
                <a-select
                  class="w-100"
                  placeholder="Phường/Xã"
                  v-model:value="ward"
                  show-search
                  allowClear
                  :options="wardsList"
                  :filter-option="filterOption"
                >
                </a-select>
              </div>

              <!-- end::Input Group -->

              <!-- begin::Input Group -->
              <a-form>
                <InputBasic
                  title="Địa chỉ hiển thị trên tin đăng"
                  placeholder="Bạn có thể bổ sung hẻm, ngách, ngõ, ..."
                  :value="post.address_detail"
                  @input="handleInput('address_detail', $event)"
                />
              </a-form>

              <!-- end::Input Group -->
            </template>
          </Card>
          <!-- end::Basic Infor Option -->

          <!-- begin::Post Infor Option -->
          <Card title="Thông tin bài viết">
            <template #content>
              <!-- begin::Input Group -->
              <InputBasic
                title="Tiêu đề"
                placeholder="Nhập tiêu đề bài viết"
                :value="post.title"
                @input="handleInput('title', $event)"
              />
              <!-- end::Input Group -->

              <!-- begin::Input Group -->
              <InputArea
                title="Mô tả"
                placeholder="Nhập mô tả bài viết"
                :value="post.description"
                :rows="6"
                @input="handleInput('description', $event)"
              />
              <!-- end::Input Group -->
            </template>
          </Card>
          <!-- end::Post Infor Option -->

          <!-- begin::Land Infor Option -->
          <Card title="Thông tin bất động sản">
            <template #content>
              <!-- begin::Input Group -->
              <InputBasic
                title="Diện tích"
                placeholder="Nhập diện tích, VD: 80"
                :value="post.area.toString()"
                @input="handleInput('area', $event)"
              />
              <!-- end::Input Group -->

              <!-- begin::Input Group -->
              <div class="flex justify-between flex-wrap">
                <div class="col-12 col-xl-8">
                  <!-- begin::Input -->
                  <InputBasic
                    title="Mức giá"
                    placeholder="Nhập giá, VD: 12000000"
                    :value="post.price.toString()"
                    @input="handleInput('price', $event)"
                  />
                  <!-- end::Input -->
                </div>
                <div class="col-12 col-xl-3">
                  <InputSelect
                    title="Đơn vị"
                    :options="units"
                    :valueSelected="post.unit.toString()"
                  />

                  <!-- end::Select -->
                </div>
              </div>
              <!-- end::Input Group -->
            </template>
          </Card>
          <!-- end::Land Infor Option -->

          <!-- begin::Media Option -->
          <Card title="Hình ảnh & Video">
            <template #content>
              <!-- begin::Input Group -->
              <div class="mb-2">
                <!-- begin::Dropzone -->
                <a-upload-dragger
                  name="file"
                  :multiple="true"
                  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                >
                  <p class="ant-upload-drag-icon">
                    <InboxOutlined></InboxOutlined>
                  </p>
                  <p class="ant-upload-text">
                    Click hoặc kéo thả file vào đây để tải lên
                  </p>
                  <p class="ant-upload-hint">
                    Hỗ trợ tải lên nhiều file cùng lúc
                  </p>
                </a-upload-dragger>
                <!-- end::Dropzone -->
              </div>
              <!-- end::Input Group -->
            </template>
          </Card>
          <!-- end::Media Option -->
        </div>
      </div>
    </a-tab-pane>
    <a-tab-pane
      key="2"
      tab="Bình luận"
      force-render
      :disabled="disabledCommentTab"
    >
      <div class="flex flex-col gap-7 gap-lg-10">
        <Card>
          <template #content>
            <Comment />
          </template>
        </Card>
      </div>
    </a-tab-pane>
  </a-tabs>
  <!-- end::Tabs -->
  <div class="flex justify-end mb-4">
    <a-button type="default">Hủy</a-button>

    <a-button type="primary" class="mx-4" @click="onSubmit">Lưu</a-button>
  </div>
</template>

<script setup>
import { reactive, ref, watch } from "vue";
import { InboxOutlined } from "@ant-design/icons-vue";
import { useRoute } from "vue-router";
import getPostAPI from "../../../api/posts/getDetails";
import createPostAPI from "../../../api/posts/create";
import addressAPI from "../../../api/address.js";
import auth from "../../../stores/auth";

const store = auth();

const route = useRoute();
const disabledCommentTab = ref(false);

const post = reactive({
  title: "",
  description: "",
  address: "",
  address_detail: "",
  area: "",
  price: "",
  unit: "",
  sold_status: "",
  status: "",
  user: "",
});

const province = ref(null);
const district = ref(null);
const ward = ref(null);

if (!route.params.id) {
  Object.keys(post).forEach((key) => {
    post[key] = "";
  });
  disabledCommentTab.value = true;
}

if (route.params.id) {
  // Hàm lấy thông tin bài viết theo id
  const fetchPostById = async (id) => {
    const getPost = await getPostAPI.getById(id);
    Object.keys(post).forEach((key) => {
      post[key] = getPost[key];
    });
  };
  fetchPostById(route.params.id);
} else {
}

const provincesList = ref([]);
const districtsList = ref([]);
const wardsList = ref([]);

const fetchProvincesData = async () => {
  try {
    const res = await addressAPI.getProvinces();

    provincesList.value = res.map((province) => ({
      value: province.province_id,
      label: province.province_name,
    }));
  } catch (error) {
    console.error(error);
  }
};

const fetchDistrictsData = async (id) => {
  try {
    const res = await addressAPI.getDistrictsByProvinceId(id);

    districtsList.value = res.map((district) => ({
      value: district.district_id,
      label: district.district_name,
    }));
  } catch (error) {
    console.error(error);
  }
};

const fetchWardsData = async () => {
  try {
    const res = await addressAPI.getWardsByDistrictId(district.value);

    wardsList.value = res.map((ward) => ({
      value: ward.ward_id,
      label: ward.ward_name,
    }));
  } catch (error) {
    console.error(error);
  }
};

watch(province, (newValue, oldValue) => {
  fetchDistrictsData(province.value);
  district.value = null;
});
watch(district, (newValue, oldValue) => {
  fetchWardsData(district.value);
  ward.value = null;
});

fetchProvincesData();
fetchDistrictsData(province.value);
fetchWardsData(district.value);

const filterOption = (input, option) => {
  return option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0;
};

const units = ref([
  {
    value: "1",
    label: "VND",
  },
  {
    value: "2",
    label: "Giá/m2",
  },
  {
    value: "3",
    label: "Thỏa thuận",
  },
]);

// Xử lý input từ các input
const handleInput = (key, value) => {
  post[key] = value;
};

// Xử lý submit form
const onSubmit = async () => {
  try {
    const provinceName = provincesList.value.find(
      (item) => item.value === province.value
    ).label;

    const districtName = districtsList.value.find(
      (item) => item.value === district.value
    ).label;

    const wardName = wardsList.value.find(
      (item) => item.value === ward.value
    ).label;

    const postDetail = {
      title: post.title,
      description: post.description,
      address: `${wardName}, ${districtName}, ${provinceName}`,
      address_detail: post.address_detail,
      area: Number(post.area),
      price: Number(post.price),
      unit: Number(post.unit),
      sold_status: 0,
      status: 3,
      user_id: store.user.id,
    };

    console.log(postDetail);
    // const res = await createPostAPI(post);
    // console.log(res);
  } catch (error) {
    console.error(error);
  }
};
</script>

<script>
import InputArea from "../../../components/base/input/InputArea.vue";
import Comment from "../../../components/base/comment/Comment.vue";
import InputBasic from "../../../components/base/input/InputBasic.vue";
import InputSelect from "../../../components/base/input/InputSelect.vue";
import Card from "../../../components/base/card/Card.vue";

export default {
  components: {
    InputArea,
    Comment,
    InputBasic,
    InputSelect,
    Card,
  },
};
</script>
<style lang=""></style>
