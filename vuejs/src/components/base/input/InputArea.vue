<template>
    <div class="mb-3">
        <!-- begin::Label -->
        <div class="required form-label">
            {{ title }}
        </div>
        <!-- end::Label -->

        <!-- begin::Input -->
        <div>
            <a-textarea :placeholder="placeholder" :rows="rows" />
        </div>
        <!-- end::Input -->
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
        },
        placeholder: {
            type: String,
        },
        rows: {
            type: Number,
            default: 4,
        },
    },
};
</script>
<style></style>
