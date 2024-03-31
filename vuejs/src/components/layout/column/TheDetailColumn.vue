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
              <div class="mb-3">
                <div class="form-label">``Địa điểm``</div>
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
                  class="w-100 mt-3"
                  placeholder="Quận/Huyện"
                  v-model:value="district"
                  show-search
                  allowClear
                  :options="districtsList"
                  :filter-option="filterOption"
                >
                </a-select>
                <a-select
                  class="w-100 mt-3"
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
              <InputBasic
                title="Địa chỉ hiển thị trên tin đăng"
                placeholder="Bạn có thể bổ sung hẻm, ngách, ngõ`...`"
                :value="post.address_detail"
              />
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
              />
              <!-- end::Input Group -->

              <!-- begin::Input Group -->
              <InputArea
                title="Mô tả"
                placeholder="Nhập mô tả bài viết"
                :value="post.description"
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
                placeholder="Nhập diện tích, VD 80"
                :value="post.area"
              />
              <!-- end::Input Group -->

              <!-- begin::Input Group -->
              <div class="flex justify-between flex-wrap">
                <div class="col-12 col-xl-8 mb-3 mb-xl-0">
                  <!-- begin::Input -->
                  <InputBasic
                    title="Mức giá"
                    placeholder="Nhập giá, VD 12000000"
                    v-model:value="post.price"
                  />
                  <!-- end::Input -->
                </div>
                <div class="col-12 col-xl-3">
                  <InputSelect
                    title="Đơn vị"
                    :options="units"
                    :valueSelected="post.unit"
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

          <!-- begin::Contact Infor Option -->
          <Card title="Thông tin liên hệ">
            <template #content>
              <!-- begin::Input Group -->
              <div class="flex mb-3 justify-between flex-wrap">
                <div class="col-12 col-xl-8 mb-3 mb-xl-0">
                  <!-- begin::Input -->
                  <InputBasic title="Tên liên hệ" placeholder="Nhập tên" />
                  <!-- end::Input -->
                </div>
                <div class="col-12 col-xl-3">
                  <InputSelect
                    title="Số điện thoại"
                    :options="phones"
                    :valueSelected="phoneValue"
                  />
                </div>
              </div>
              <!-- end::Input Group -->

              <!-- begin::Input Group -->
              <InputBasic title="Email" placeholder="Nhập email" />
              <!-- end::Input Group -->
            </template>
          </Card>
          <!-- end::Contact Infor Option -->
        </div>
      </div>
    </a-tab-pane>
    <a-tab-pane key="2" tab="Bình luận" force-render>
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

    <a-button type="primary" class="mx-4">Lưu</a-button>
  </div>
</template>

<script setup>
import { reactive, ref, watch } from "vue";
import { InboxOutlined } from "@ant-design/icons-vue";
import { useRoute } from "vue-router";
import getPostAPI from "../../../api/posts/getDetails";
import addressAPI from "../../../api/address.js";

const route = useRoute();

const post = reactive({
  title: "",
  description: "",
  address: "",
  address_detail: "",
  area: "",
  price: "",
  unit: "",
  sold_status: "",
  status_id: "",
  user_id: "",
});

const province = ref({
  value: "01",
});

const district = ref({
  value: "271",
});
const ward = ref(null);
``;
if (route.params.id) {
  // Hàm lấy thông tin bài viết theo id
  const fetchPostById = async (id) => {
    const getPost = await getPostAPI.getById(id);
    post.title = getPost.title;
    post.description = getPost.description;
    post.address = getPost.address;
    post.address_detail = getPost.address_detail;
    post.area = getPost.area.toString();
    post.price = getPost.price.toString();
    post.unit = getPost.unit.toString();
    post.sold_status = getPost.sold_status.toString();
    post.status_id = getPost.status_id.toString();
    post.user_id = getPost.user_id.toString();
  };
  fetchPostById(route.params.id);
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

const phoneValue = ref("phone1");

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

const phones = ref([
  {
    value: "phone1",
    label: "0986853388",
  },
  {
    value: "phone2",
    label: "0373388843",
  },
]);
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
