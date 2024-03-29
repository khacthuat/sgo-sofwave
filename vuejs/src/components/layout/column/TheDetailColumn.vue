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
              <InputBasic title="Địa điểm" placeholder="Chọn địa điểm" />
              <!-- end::Input Group -->

              <!-- begin::Input Group -->
              <InputBasic
                title="Địa chỉ hiển thị trên tin đăng"
                placeholder="Bạn có thể bổ sung hẻm, ngách, ngõ`...`"
              />
              <!-- end::Input Group -->
            </template>
          </Card>
          <!-- end::Basic Infor Option -->

          <!-- begin::Post Infor Option -->
          <Card title="Thông tin bài viết">
            <template #content>
              <!-- begin::Input Group -->
              <InputBasic title="Tiêu đề" placeholder="Nhập tiêu đề bài viết" />
              <!-- end::Input Group -->

              <!-- begin::Input Group -->
              <InputArea title="Mô tả" placeholder="Nhập mô tả bài viết" />
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
              />
              <!-- end::Input Group -->

              <!-- begin::Input Group -->
              <div class="flex justify-between flex-wrap">
                <div class="col-12 col-xl-8 mb-3 mb-xl-0">
                  <!-- begin::Input -->
                  <InputBasic
                    title="Mức giá"
                    placeholder="Nhập giá, VD 12000000"
                  />
                  <!-- end::Input -->
                </div>
                <div class="col-12 col-xl-3">
                  <InputSelect
                    title="Đơn vị"
                    :options="units"
                    :valueSelected="unitValue"
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
import { ref } from "vue";
import { InboxOutlined } from "@ant-design/icons-vue";

const unitValue = ref("vnd");
const phoneValue = ref("phone1");

const units = ref([
  {
    value: "vnd",
    label: "VND",
  },
  {
    value: "price",
    label: "Giá/m2",
  },
  {
    value: "deal",
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
