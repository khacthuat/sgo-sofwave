<template>
  <a-modal
    :title="title"
    cancelText="Huỷ"
    okText="Lưu"
    :onOk="
      () => {
        handleOkModal();
      }
    "
    :confirm-loading="loading"
  >
    <a-form layout="horizontal" style="max-width: 600px">
      <a-form-item label="Tên">
        <a-input v-model:value="user.name" />
      </a-form-item>
      <a-form-item label="Email">
        <a-input v-model:value="user.email" />
      </a-form-item>
      <a-form-item label="Chọn quyền:">
        <a-select v-model:value="user.role">
          <a-select-option value="admin">Admin</a-select-option>
          <a-select-option value="employee">Đầu chủ</a-select-option>
          <a-select-option value="sale"> Sale </a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="Trạng thái:">
        <a-select v-model:value="user.status">
          <a-select-option value="active">Hoạt động</a-select-option>
          <a-select-option value="inactive">Không hoạt động</a-select-option>
        </a-select>
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script setup>
import { defineProps, defineEmits, ref, watch } from "vue";
import updateUserAPI from "../../../api/users/updateUser";
import getUserAPI from "../../../api/users/getUser";
import messageAnt from "../../../scripts/message";

const props = defineProps({
  title: String,
  userSelected: Object,
});

const emits = defineEmits(["isShowDetail"]);

// loading
const loading = ref(false);
var user = ref({});

watch(
  () => props.userSelected,
  (newValue, oldValue) => {
    user.value = { ...newValue };
  }
);

const handleOkModal = async () => {
  loading.value = true;
  const fetchUpdateUser = async (id, information) => {
    const updateUser = await updateUserAPI(id, information);
  };
  setTimeout(() => {
    emits("isShowDetail", false);
    loading.value = false;
    messageAnt.success();
  }, 500);
};
</script>

<script>
export default {};
</script>
<style></style>
