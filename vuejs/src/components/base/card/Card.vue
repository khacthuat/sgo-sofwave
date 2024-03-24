<template>
    <div class="card">
        <!-- begin::Card Header -->
        <div :class="{ 'p-4': title?.length }">
            <!-- begin::Card Title -->
            <h2>{{ title }}</h2>
            <!-- end::Card Title -->
        </div>
        <!-- end::Card Header -->
        <!-- begin::Card Body -->
        <div class="px-4">
            <slot name="content"> </slot>
        </div>
        <!-- end::Card Body -->
    </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
    title: String,
});

const valueSelected = ref(props.valueSelected);
</script>

<script>
export default {};
</script>
<style></style>
