<template>
    <a-modal
        :title="title"
        cancelText="Huỷ"
        okText="Lưu"
        :onOk="
            () => {
                handleOkModal();
                messageAnt.success();
            }
        "
    >
        <a-form layout="horizontal" style="max-width: 600px">
            <a-form-item label="Tên">
                <a-input v-model="userSelected.name" />
            </a-form-item>
            <a-form-item label="Email">
                <a-input />
            </a-form-item>
            <a-form-item label="Chọn quyền:">
                <a-select>
                    <a-select-option value="admin">Admin</a-select-option>
                    <a-select-option value="employee">Đầu chủ</a-select-option>
                    <a-select-option value="sale"> Sale </a-select-option>
                </a-select>
            </a-form-item>
            <a-form-item label="Trạng thái:">
                <a-select>
                    <a-select-option value="active">Hoạt động</a-select-option>
                    <a-select-option value="inactive"
                        >Không hoạt động</a-select-option
                    >
                </a-select>
            </a-form-item>
        </a-form>
    </a-modal>
</template>

<script setup>
import { defineProps, defineEmits, ref } from "vue";

const props = defineProps({
    isShow: Boolean,
    title: String,
    userSelected: Object,
});

const emits = defineEmits(["isShowDetail"]);

const handleOkModal = () => {
    emits.isShowDetail(false);
};
</script>

<script>
export default {};
</script>
<style></style>
