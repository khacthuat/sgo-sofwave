<template>
    <!-- begin::Filter Item Content -->
    <div
        class="filter-item-content"
        @click.prevent
        @click="setModalAddressVisible(true)"
    >
        <div class="flex text-black">
            <div>Khu vực</div>
            <div class="ml-2 flex align-items-center">
                <DownOutlined />
            </div>
        </div>

        <div class="list-search-selected w-100 text-black flex mt-1">
            Toàn quốc
        </div>
    </div>
    <a-modal
        class="top-[20%]"
        v-model:open="modalAddressVisible"
        @ok="setModalAddressVisible(false)"
        :okText="'Tìm kiếm'"
        :cancelText="'Hủy'"
        :bodyStyle="{ paddingRight: '0' }"
    >
        <a-select
            v-model:value="province"
            show-search
            placeholder="Tỉnh/Thành"
            class="w-100 mt-5"
            :options="provincesList"
        >
        </a-select>
        <a-select
            v-model:value="district"
            class="w-100 mt-3"
            placeholder="Quận/Huyện"
            :options="districtsList"
        >
        </a-select>
        <a-select
            v-model:value="ward"
            class="w-100 mt-3"
            placeholder="Phường/Xã"
            :options="wardsList"
        >
        </a-select>
    </a-modal>
</template>

<script setup>
import { ref, watch } from "vue";
import { DownOutlined } from "@ant-design/icons-vue";
import addressAPI from "../../../api/address.js";

const modalAddressVisible = ref(false);
const setModalAddressVisible = (open) => {
    modalAddressVisible.value = open;
};

const province = ref(null);
const district = ref(null);
const ward = ref(null);

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

const fetchDistrictsData = async () => {
    try {
        const res = await addressAPI.getDistrictsByProvinceId(province.value);

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
    fetchDistrictsData();
    district.value = null;
});
watch(district, (newValue, oldValue) => {
    fetchWardsData();
});

fetchProvincesData();
fetchDistrictsData();
fetchWardsData();
</script>

<script>
export default {};
</script>
<style></style>
