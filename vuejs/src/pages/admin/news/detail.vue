<template>
    <div class="app-content flex-column-fluid">
        <!-- begin::Content Contaienr -->
        <div class="app-container container-fluid">
            <!-- begin::Form -->
            <div class="d-flex flex-column flex-lg-row flex-column-fluid">
                <!-- begin::Aside Column -->
                <div
                    class="d-flex flex-column gap-3 gap-lg-5 w-100 w-lg-300px mb-7 me-lg-10"
                    style="background-color: white"
                >
                    <!-- begin::Thumbnail setting -->
                    <div class="card card-flush py-3">
                        <!-- begin::Card Header -->
                        <div class="card-header">
                            <!-- begin::Card Title -->
                            <div class="card-title">
                                <h2>Hình ảnh chính</h2>
                            </div>
                        </div>
                        <!-- end::Card Header -->
                        <!-- begin::Card Body -->
                        <div class="card-body text-center pt-0">
                            <!-- begin::Image Input -->
                            <div
                                class="image-input image-input-empty image-input-outline image-input-placeholder mb-3"
                            >
                                <!-- begin::Image avatar -->
                                <div
                                    class="image-input-wrapper"
                                    style="
                                        background-image: url(https://contents.mediadecathlon.com/p2606919/k$a531927e5c71c12f4d3edac227199f78/jogflow-5001-men-s-running-shoes-white-blue-red.jpg?format=auto&quality=40&f=800x800);
                                        height: 150px;
                                        width: 150px;
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
                                            style="
                                                width: 25px;
                                                height: 25px;
                                                position: absolute;
                                                top: -7%;
                                                right: -7%;
                                                z-index: 1;
                                                background-color: white;
                                                border-radius: 50%;
                                                cursor: pointer;
                                            "
                                            class="d-flex justify-content-center align-items-center"
                                        >
                                            <UploadOutlined />
                                        </a-button>
                                    </a-upload>
                                </div>
                                <!-- end::Label -->
                            </div>

                            <!-- begin::Description -->
                            <div class="text-muted fs-7">
                                Set the product thumbnail image. Only *.png,
                                *.jpg and *.jpeg image files are accepted
                            </div>
                            <!-- end::Description -->
                        </div>
                        <!-- end::Card Body -->
                    </div>
                    <!-- end::Thumbnail setting -->
                    <!-- begin::Status -->
                    <div class="card card-flush py-4">
                        <div class="card-header">
                            <!-- begin::Card Title -->
                            <div class="card-title">
                                <h2>Trạng thái</h2>
                            </div>
                        </div>
                        <!-- end::Card Header -->
                        <!-- begin::Card Body -->
                        <div class="card-body text-center pt-0">
                            <!-- begin::Select -->
                            <a-select
                                ref="select"
                                v-model:value="value1"
                                style="width: 120px"
                                :options="options1"
                                @focus="focus"
                                @change="handleChange"
                                class="mb-2 w-100 d-flex justify-content-between align-items-center"
                            ></a-select>
                            <!-- end::Select -->

                            <!-- begin::Description -->
                            <!-- <div class="text-muted fs-7">Tình trạng đăng</div> -->
                            <!-- end::Description -->
                        </div>
                    </div>
                    <!-- end::Status -->
                    <!-- begin::Statistic -->
                    <div class="card card-flush py-4">
                        <div class="card-header">
                            <!-- begin::Card Title -->
                            <div class="card-title">
                                <h2>Thống kê lượt xem</h2>
                            </div>
                        </div>
                        <!-- end::Card Header -->
                        <!-- begin::Card Body -->
                        <div class="card-body text-center pt-0">
                            <!-- begin:Statistic views -->
                            <div>
                                <a-col class="col-12">
                                    <a-statistic
                                        class="m-0"
                                        title="Lượt xem tháng hiện tại:"
                                        :value="112"
                                        style="margin-right: 50px"
                                    />
                                </a-col>
                                <a-col class="col-12 mr-0">
                                    <a-statistic
                                        class="m-0"
                                        title="Tổng lượt xem:"
                                        :value="11283"
                                    />
                                </a-col>
                            </div>
                            <!-- end::Statistic views -->

                            <!-- begin::Description -->
                            <!-- <div class="text-muted fs-7">
                                Lượt xem tháng hiện tại
                            </div> -->
                            <!-- end::Description -->
                        </div>
                    </div>
                    <!-- end::Status -->
                </div>
                <!-- end::Aside Column -->

                <!-- begin::Main Column -->
                <div
                    class="d-flex flex-column flex-row-fluid gap-7 gap-lg-10"
                    style="background-color: white"
                >
                    <!-- begin::Tabs -->
                    <a-menu
                        mode="horizontal"
                        :items="items"
                        v-model:selectedKeys="state.selectedKeys"
                        @click="handleTabChange($event.key)"
                    />
                    <!-- end::Tabs -->

                    <!-- begin::Tab Content -->
                    <div class="tab-content">
                        <!-- begin::Tab Pane -->
                        <div
                            class="tab-pane fade"
                            v-show="activeTab === 'general'"
                        >
                            <div class="d-flex flex-column gap-7 gap-lg-10">
                                <!-- begin::Basic Infor Option -->
                                <div class="card card-flush py-4">
                                    <div class="card-header">
                                        <!-- begin::Card Title -->
                                        <div class="card-title">
                                            <h2>Thông tin cơ bản</h2>
                                        </div>
                                    </div>
                                    <!-- end::Card Header -->
                                    <!-- begin::Card Body -->
                                    <div class="card-body pt-0">
                                        <!-- begin::Input Group -->
                                        <div
                                            class="mb-3 fv-row fv-plugins-icon-container"
                                        >
                                            <!-- begin::Label -->
                                            <div class="required form-label">
                                                Loại bất động sản
                                            </div>
                                            <!-- end::Label -->

                                            <!-- begin::Select -->
                                            <div class="form-control mb-2">
                                                <a-select
                                                    ref="select"
                                                    v-model:value="value2"
                                                    style="width: 120px"
                                                    :options="options4"
                                                    @focus="focus"
                                                    @change="handleChange"
                                                    class="mb-2 w-100 d-flex justify-content-between align-items-center"
                                                ></a-select>
                                            </div>
                                            <!-- end::Select -->

                                            <!-- begin::Description -->
                                            <!-- <div class="text-muted fs-7">
                                                Tiêu đề bài viết là bắt buộc và
                                                nên là duy nhất.
                                            </div> -->
                                            <!-- end::Description -->
                                        </div>
                                        <!-- end::Input Group -->

                                        <!-- begin::Input Group -->
                                        <div
                                            class="mb-3 fv-row fv-plugins-icon-container"
                                        >
                                            <!-- begin::Label -->
                                            <div class="form-label">
                                                Địa điểm
                                            </div>
                                            <!-- end::Label -->

                                            <!-- begin::Cascader City -->
                                            <div>
                                                <a-cascader
                                                    v-model:value="value"
                                                    placeholder="Chọn địa điểm"
                                                    :options="options"
                                                    class="w-100"
                                                />
                                            </div>
                                            <!-- end::Cascader City-->
                                        </div>
                                        <!-- end::Input Group -->

                                        <!-- begin::Input Group -->
                                        <div
                                            class="mb-3 fv-row fv-plugins-icon-container"
                                        >
                                            <!-- begin::Label -->
                                            <div class="form-label">Dự án</div>
                                            <!-- end::Label -->

                                            <!-- begin::Select -->
                                            <div class="form-control mb-2">
                                                <a-select
                                                    ref="select"
                                                    v-model:value="value3"
                                                    style="width: 120px"
                                                    :options="options2"
                                                    @focus="focus"
                                                    @change="handleChange"
                                                    class="mb-2 w-100 d-flex justify-content-between align-items-center"
                                                ></a-select>
                                            </div>
                                            <!-- end::Select -->

                                            <!-- begin::Description -->
                                            <!-- <div class="text-muted fs-7">
                                                Tiêu đề bài viết là bắt buộc và
                                                nên là duy nhất.
                                            </div> -->
                                            <!-- end::Description -->
                                        </div>
                                        <!-- end::Input Group -->
                                        <!-- begin::Input Group -->
                                        <div
                                            class="mb-3 fv-row fv-plugins-icon-container"
                                        >
                                            <!-- begin::Label -->
                                            <div class="required form-label">
                                                Địa chỉ hiển thị trên tin đăng
                                            </div>
                                            <!-- end::Label -->

                                            <!-- begin::Input -->
                                            <div class="form-control mb-2">
                                                <a-input
                                                    v-model:value="value"
                                                    placeholder="Bạn có thể bổ sung hẻm, ngách, ngõ..."
                                                    size="medium"
                                                    class="w-100"
                                                />
                                            </div>
                                            <!-- end::Input -->

                                            <!-- begin::Description -->
                                            <!-- <div class="text-muted fs-7">
                                                Tiêu đề bài viết là bắt buộc và
                                                nên là duy nhất.
                                            </div> -->
                                            <!-- end::Description -->
                                        </div>
                                        <!-- end::Input Group -->
                                    </div>
                                    <!-- end::Card Body -->
                                </div>
                                <!-- end::Basic Infor Option -->

                                <!-- begin::Post Infor Option -->
                                <div class="card card-flush py-4">
                                    <div class="card-header">
                                        <!-- begin::Card Title -->
                                        <div class="card-title">
                                            <h2>Thông tin bài viết</h2>
                                        </div>
                                    </div>
                                    <!-- end::Card Header -->
                                    <!-- begin::Card Body -->
                                    <div class="card-body pt-0">
                                        <!-- begin::Input Group -->
                                        <div
                                            class="mb-3 fv-row fv-plugins-icon-container"
                                        >
                                            <!-- begin::Label -->
                                            <div class="required form-label">
                                                Tiêu đề
                                            </div>
                                            <!-- end::Label -->

                                            <!-- begin::Input -->
                                            <div class="form-control mb-2">
                                                <a-input
                                                    v-model:value="value"
                                                    placeholder="Nhập tiêu đề bài viết"
                                                    size="medium"
                                                    class="w-100"
                                                />
                                            </div>
                                            <!-- end::Input -->

                                            <!-- begin::Description -->
                                            <!-- <div class="text-muted fs-7">
                                                Tiêu đề bài viết là bắt buộc và
                                                nên là duy nhất.
                                            </div> -->
                                            <!-- end::Description -->
                                        </div>
                                        <!-- end::Input Group -->

                                        <!-- begin::Input Group -->
                                        <div
                                            class="mb-10 fv-row fv-plugins-icon-container"
                                        >
                                            <!-- begin::Label -->
                                            <div class="required form-label">
                                                Mô tả
                                            </div>
                                            <!-- end::Label -->

                                            <!-- begin::Editor -->
                                            <div>
                                                <a-textarea
                                                    v-model:value="value"
                                                    placeholder="Nhập mô tả bài viết"
                                                    :rows="4"
                                                />
                                            </div>
                                            <!-- end::Editor -->

                                            <!-- begin::Description -->
                                            <!-- <div class="text-muted fs-7">
                                                Thêm mô tả cho bài viết để tăng
                                                khả năng hiển thị chi tiết.
                                            </div> -->
                                        </div>
                                        <!-- end::Input Group -->
                                    </div>
                                    <!-- end::Card Body -->
                                </div>
                                <!-- end::Post Infor Option -->
                                <!-- begin::Land Infor Option -->
                                <div class="card card-flush py-4">
                                    <div class="card-header">
                                        <!-- begin::Card Title -->
                                        <div class="card-title">
                                            <h2>Thông tin bất động sản</h2>
                                        </div>
                                    </div>
                                    <!-- end::Card Header -->
                                    <!-- begin::Card Body -->
                                    <div class="card-body pt-0">
                                        <!-- begin::Input Group -->
                                        <div
                                            class="mb-3 fv-row fv-plugins-icon-container"
                                        >
                                            <!-- begin::Label -->
                                            <div class="required form-label">
                                                Diện tích
                                            </div>
                                            <!-- end::Label -->

                                            <!-- begin::Input -->
                                            <div class="form-control mb-2">
                                                <a-input
                                                    v-model:value="value"
                                                    placeholder="Nhập diện tích, VD 80"
                                                    size="medium"
                                                    class="w-100"
                                                />
                                            </div>
                                            <!-- end::Input -->

                                            <!-- begin::Description -->
                                            <!-- <div class="text-muted fs-7">
                                                Tiêu đề bài viết là bắt buộc và
                                                nên là duy nhất.
                                            </div> -->
                                            <!-- end::Description -->
                                        </div>
                                        <!-- end::Input Group -->

                                        <!-- begin::Input Group -->
                                        <div
                                            class="d-flex justify-content-between flex-wrap"
                                        >
                                            <div
                                                class="col-12 col-xl-8 mb-3 mb-xl-0"
                                            >
                                                <!-- begin::Label -->
                                                <div class="form-label">
                                                    Mức giá
                                                </div>
                                                <!-- end::Label -->

                                                <!-- begin::Input -->
                                                <div class="form-control">
                                                    <a-input
                                                        v-model:value="value"
                                                        placeholder="Nhập giá, VD 12000000"
                                                        size="medium"
                                                    />
                                                </div>
                                                <!-- end::Input -->
                                            </div>
                                            <div class="col-12 col-xl-3">
                                                <!-- begin::Label -->
                                                <div class="form-label">
                                                    Đơn vị
                                                </div>
                                                <!-- end::Label -->

                                                <!-- begin::Select -->
                                                <div class="form-control">
                                                    <a-select
                                                        ref="select"
                                                        v-model:value="value4"
                                                        style="width: 120px"
                                                        :options="options3"
                                                        @focus="focus"
                                                        @change="handleChange"
                                                        class="mb-2 w-100 d-flex justify-content-between align-items-center"
                                                    ></a-select>
                                                </div>
                                                <!-- end::Select -->
                                            </div>
                                        </div>
                                        <!-- end::Input Group -->

                                        <!-- begin::Input Group -->
                                        <div
                                            class="mb-3 fv-row fv-plugins-icon-container"
                                        >
                                            <!-- begin::Description -->
                                            <!-- <div class="text-muted fs-7">
                                                Tiêu đề bài viết là bắt buộc và
                                                nên là duy nhất.
                                            </div> -->
                                            <!-- end::Description -->
                                        </div>
                                        <!-- end::Input Group -->
                                    </div>
                                    <!-- end::Card Body -->
                                </div>
                                <!-- end::Land Infor Option -->
                                <!-- begin::Media Option -->
                                <div class="card card-flush py-4">
                                    <div class="card-header">
                                        <!-- begin::Card Title -->
                                        <div class="card-title">
                                            <h2>Hình ảnh & Video</h2>
                                        </div>
                                    </div>
                                    <!-- end::Card Header -->
                                    <!-- begin::Card Body -->
                                    <div class="card-body pt-0">
                                        <!-- begin::Input Group -->
                                        <div class="fv-row mb-2">
                                            <!-- begin::Dropzone -->
                                            <div>
                                                <a-upload-dragger
                                                    v-model:fileList="fileList"
                                                    name="file"
                                                    :multiple="true"
                                                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                                    @change="handleChange"
                                                    @drop="handleDrop"
                                                >
                                                    <p
                                                        class="ant-upload-drag-icon"
                                                    >
                                                        <inbox-outlined></inbox-outlined>
                                                    </p>
                                                    <p class="ant-upload-text">
                                                        Click hoặc kéo thả file
                                                        vào đây để tải lên
                                                    </p>
                                                    <p class="ant-upload-hint">
                                                        Hỗ trợ tải lên nhiều
                                                        file cùng lúc
                                                    </p>
                                                </a-upload-dragger>
                                            </div>
                                            <!-- end::Dropzone -->

                                            <!-- begin::Description -->
                                            <!-- <div class="text-muted fs-7">
                                                Thêm mô tả cho bài viết để tăng
                                                khả năng hiển thị chi tiết.
                                            </div> -->
                                        </div>
                                        <!-- end::Input Group -->
                                    </div>
                                    <!-- end::Card Body -->
                                </div>
                                <!-- end::Media Option -->
                                <!-- begin::Contact Infor Option -->
                                <div class="card card-flush py-4">
                                    <div class="card-header">
                                        <!-- begin::Card Title -->
                                        <div class="card-title">
                                            <h2>Thông tin liên hệ</h2>
                                        </div>
                                    </div>
                                    <!-- end::Card Header -->
                                    <!-- begin::Card Body -->
                                    <div class="card-body pt-0">
                                        <!-- begin::Input Group -->
                                        <div
                                            class="d-flex justify-content-between flex-wrap"
                                        >
                                            <div
                                                class="col-12 col-xl-8 mb-3 mb-xl-0"
                                            >
                                                <!-- begin::Label -->
                                                <div class="form-label">
                                                    Tên liên hệ
                                                </div>
                                                <!-- end::Label -->

                                                <!-- begin::Input -->
                                                <div class="form-control">
                                                    <a-input
                                                        v-model:value="value"
                                                        placeholder="Nhập tên"
                                                        size="medium"
                                                    />
                                                </div>
                                                <!-- end::Input -->
                                            </div>
                                            <div class="col-12 col-xl-3">
                                                <!-- begin::Label -->
                                                <div class="form-label">
                                                    Số điện thoại
                                                </div>
                                                <!-- end::Label -->

                                                <!-- begin::Select -->
                                                <div class="form-control">
                                                    <a-select
                                                        ref="select"
                                                        v-model:value="value5"
                                                        style="width: 120px"
                                                        :options="options5"
                                                        @focus="focus"
                                                        @change="handleChange"
                                                        class="mb-2 w-100 d-flex justify-content-between align-items-center"
                                                    ></a-select>
                                                </div>
                                                <!-- end::Select -->
                                            </div>
                                        </div>
                                        <!-- end::Input Group -->

                                        <!-- begin::Input Group -->
                                        <div
                                            class="mb-3 fv-row fv-plugins-icon-container"
                                        >
                                            <!-- begin::Label -->
                                            <div class="form-label">
                                                Địa điểm
                                            </div>
                                            <!-- end::Label -->

                                            <!-- begin::Cascader City -->
                                            <div>
                                                <a-cascader
                                                    v-model:value="value"
                                                    placeholder="Chọn địa điểm"
                                                    :options="options"
                                                    class="w-100"
                                                />
                                            </div>
                                            <!-- end::Cascader City-->
                                        </div>
                                        <!-- end::Input Group -->

                                        <!-- begin::Input Group -->
                                        <div
                                            class="mb-10 fv-row fv-plugins-icon-container"
                                        >
                                            <!-- begin::Label -->
                                            <div class="required form-label">
                                                Mô tả
                                            </div>
                                            <!-- end::Label -->

                                            <!-- begin::Editor -->
                                            <div>
                                                <a-textarea
                                                    v-model:value="value"
                                                    placeholder="Nhập mô tả bài viết"
                                                    :rows="4"
                                                />
                                            </div>
                                            <!-- end::Editor -->

                                            <!-- begin::Description -->
                                            <!-- <div class="text-muted fs-7">
                                                Thêm mô tả cho bài viết để tăng
                                                khả năng hiển thị chi tiết.
                                            </div> -->
                                        </div>
                                        <!-- end::Input Group -->
                                    </div>
                                    <!-- end::Card Body -->
                                </div>
                                <!-- end::Contact Infor Option -->
                            </div>
                        </div>
                        <!-- end::Tab Pane -->

                        <!-- begin::Tab Pane -->
                        <div
                            class="tab-pane fade"
                            v-show="activeTab === 'comments'"
                        >
                            <div class="d-flex flex-column gap-7 gap-lg-10">
                                <!-- begin::Reviews -->
                                <div class="card card-flush py-4">
                                    <div class="card-header">
                                        <!-- begin::Card Title -->
                                        <div class="card-title">
                                            <h2>Bình luận</h2>
                                        </div>
                                    </div>
                                    <!-- end::Card Header -->
                                    <!-- begin::Card Body -->
                                    <div class="card-body pt-0">
                                        <!-- begin::Table -->
                                        <div class="">
                                            <a-table
                                                :columns="columns"
                                                :data-source="data"
                                            >
                                                <template
                                                    #bodyCell="{ column }"
                                                >
                                                    <template
                                                        v-if="
                                                            column.key ===
                                                            'operation'
                                                        "
                                                    >
                                                        <a>action</a>
                                                    </template>
                                                </template>
                                            </a-table>
                                        </div>
                                    </div>
                                    <!-- end::Card Body -->
                                </div>
                                <!-- end::General Option -->
                            </div>
                        </div>
                        <!-- end::Tab Pane -->
                    </div>
                    <!-- end::Tab Content -->

                    <div class="d-flex justify-content-end mb-4">
                        <!-- begin::Button -->
                        <div class="px-4">
                            <a-button type="default">Hủy</a-button>
                        </div>
                        <!-- end::Button -->

                        <!-- begin::Button -->
                        <div>
                            <a-button type="primary">Lưu</a-button>
                        </div>
                        <!-- end::Button -->
                    </div>
                </div>
                <!-- end::Main Column -->
            </div>
            <!-- end::Form -->
        </div>
        <!-- end::Content Container -->
    </div>
</template>

<script setup>
import { DownOutlined, UploadOutlined } from "@ant-design/icons-vue";
import { h, ref, reactive, onMounted } from "vue";
import {
    MailOutlined,
    AppstoreOutlined,
    SettingOutlined,
} from "@ant-design/icons-vue";

// select menu
// const value1 = ref("VD: Nhà riêng");
// const value2 = ref("VD: Nhà riêng");
// const value3 = ref("VD: Nhà riêng");
// const value4 = ref("VD: Nhà riêng");
// const value5 = ref("VD: Nhà riêng");

const options1 = ref([
    {
        value: "sold",
        label: "Đã bán",
    },
    {
        value: "unsold",
        label: "Chưa bán",
    },
]);
const options5 = ref([
    {
        value: "phone1",
        label: "0986853388",
    },
    {
        value: "phone2",
        label: "0373388843",
    },
]);

const options2 = ref([
    {
        value: "city1",
        label: "8X Rainbow",
    },
    {
        value: "city2",
        label: "Alo City",
    },
    {
        value: "city3",
        label: "An Lạc Phát",
    },
    {
        value: "city4",
        label: "An Lạc Plaza",
    },
]);

const options3 = ref([
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
const options4 = ref([
    {
        value: "100001",
        label: "Bán căn hộ chung cư",
    },
    {
        value: "100002",
        label: "Bán nhà riêng",
    },
    {
        value: "100003",
        label: "Bán nhà mặt phố",
    },
]);

// tab pane
const activeTab = ref("general"); // Tab mặc định được chọn

const handleTabChange = (key) => {
    activeTab.value = key;
    console.log(1);
};

const state = reactive({
    selectedKeys: ["general"],
});

// table
const columns = [
    {
        title: "Khách hàng",
        dataIndex: "name",
        key: "1001",
        width: 100,
    },

    {
        title: "Comment",
        dataIndex: "comment",
        key: "1002",
        width: 150,
    },
    {
        title: "Thời gian",
        dataIndex: "date",
        key: "1003",
        width: 100,
    },
];
const data = [];
for (let i = 0; i < 100; i++) {
    data.push({
        name: `Edrward ${i}`,
        comment: `London Park no. ${i}`,
        date: `1 phút trước`,
        key: i,
    });
}
const value = ref("");
const options = [
    {
        value: "Hà Nội",
        label: "Hà Nội",
        children: [
            {
                value: "Nam Từ Liêm",
                label: "Nam Từ Liêm",
                children: [
                    {
                        value: "Mễ Trì Thượng",
                        label: "Mễ Trì Thượng",
                    },
                ],
            },
        ],
    },
    {
        value: "Bắc Ninh",
        label: "Bắc Ninh",
        children: [
            {
                value: "Tiên Du",
                label: "Tiên Du",
                children: [
                    {
                        value: "Thị trấn Lim",
                        label: "Thị trấn Lim",
                    },
                ],
            },
        ],
    },
];
const current = ref(["mail"]);
const items = ref([
    {
        key: "general",
        label: "Tổng quan",
        title: "general",
    },
    {
        key: "comments",
        label: "Bình luận",
        title: "comments",
    },
]);

const handleButtonClick = (e) => {
    console.log("click left button", e);
};
</script>

<script>
export default {};
</script>
<style>
.flex-row-fluid {
    flex: 1 auto;
    min-width: 0;
}
.flex-column-fluid {
    flex: 1 auto;
}
@media (min-width: 992px) {
    .w-lg-300px {
        width: 300px !important;
    }
}
</style>
