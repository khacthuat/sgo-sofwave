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
                            background-image: url(https://contents.mediadecathlon.com/p2606919/k$a531927e5c71c12f4d3edac227199f78/jogflow-5001-men-s-running-shoes-white-blue-red.jpg?format=auto&quality=40&f=800x800);
                        "
                    ></div>
                    <!-- end::Image avatar -->

                    <!-- begin::Label -->
                    <div>
                        <a-upload
                            v-model:file-list="fileList"
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
            <InputSelect :options="status" :valueSelected="statusValue" />
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
                <a-statistic title="Tổng lượt xem:" :value="11283" />
            </a-col>
            <!-- end::Statistic views -->
        </template>
    </Card>
    <!-- end::Statistic -->
</template>

<script setup>
import { ref } from "vue";
import { UploadOutlined } from "@ant-design/icons-vue";

const statusValue = ref("sold");

const status = ref([
    {
        value: "sold",
        label: "Đã bán",
    },
    {
        value: "unsold",
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
