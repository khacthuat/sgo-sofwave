<template>
    <!-- begin::Label -->
    <div class="form-label">{{ title }}</div>
    <!-- end::Label -->

    <!-- begin::Select -->
    <!-- begin::Select -->
    <a-select
        v-model:value="valueSelected"
        :options="options"
        class="mb-2 w-100 flex justify-between align-items-center"
    ></a-select>
    <!-- end::Select -->
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
    options: Array,
    valueSelected: String,
    title: String,
});

const valueSelected = ref(props.valueSelected);
</script>

<script>
export default {};
</script>
<style></style>
