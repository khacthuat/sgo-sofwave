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
        <a-select ref="select" v-model:value="user.role_id">
          <a-select-option :value="1">Admin</a-select-option>
          <a-select-option :value="2">Đầu chủ</a-select-option>
          <a-select-option :value="3"> Sale </a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="Trạng thái:">
        <a-select ref="select" v-model:value="user.is_active">
          <a-select-option :value="1">Hoạt động</a-select-option>
          <a-select-option :value="0">Không hoạt động</a-select-option>
        </a-select>
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script setup>
import { reactive, ref, watch } from "vue";
import updateUserAPI from "../../../api/users/updateUser";
import createUserAPI from "../../../api/users/createUser";
import messageAnt from "../../../scripts/message";

const props = defineProps({
  title: String,
  userSelected: Object,
});

const emits = defineEmits(["isShowDetail", "updateUserList"]);

const loading = ref(false);
const user = reactive({
  name: "",
  email: "",
  role_id: "",
  is_active: "",
});
const errors = ref({});

// Theo dõi sự thay đổi của userSelected
watch(
  () => props.userSelected,
  (newValue, oldValue) => {
    if (newValue) {
      user.id = newValue.id;
      user.name = newValue.name;
      user.email = newValue.email;
      user.role_id = newValue.role_id;
      user.is_active = newValue.is_active;
    }
  }
);

const handleOkModal = async () => {
  loading.value = true;
  if (user.name === "" || user.email === "") {
    messageAnt.error("Vui lòng nhập đầy đủ thông tin");
    loading.value = false;
    return;
  }

  if (props.title === "Thêm mới") {
    const information = {
      name: user.name,
      email: user.email,
      role_id: user.role_id,
      is_active: user.is_active,
    };
    /**
     * Hàm thêm mới người dùng
     * @param {Object} information
     * CreatedBy: youngbachhh (28/03/2024)
     */
    const fetchCreateUser = async (information) => {
      try {
        const createUser = await createUserAPI(information);
        emits("updateUserList");
      } catch (error) {
        errors.value = error.responsive.data.errors;
      } finally {
        emits("isShowDetail", false);
        loading.value = false;
      }
    };
    fetchCreateUser(information);
  } else if (props.title === "Sửa") {
    const id = user.id;
    const information = {
      name: user.name,
      email: user.email,
      role_id: user.role_id,
      is_active: user.is_active,
    };
    /**
     * Hàm cập nhật dữ liệu người dùng
     * @param {String} id, {Object} information
     * CreatedBy: youngbachhh (28/03/2024)
     */
    const fetchUpdateUser = async (id, information) => {
      try {
        const updateUser = await updateUserAPI(id, information);
        emits("updateUserList");
        messageAnt.success();
      } catch (error) {
        errors.value = error.responsive.data.errors;
      } finally {
        emits("isShowDetail", false);
        loading.value = false;
      }
    };

    fetchUpdateUser(id, information);
  }
};
</script>

<script>
export default {};
</script>
<style></style>
