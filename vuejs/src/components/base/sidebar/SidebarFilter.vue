<template>
  <div class="flex flex-col d-none d-xl-flex col-lg-2">
    <!-- begin::Sidebar Box -->
    <div class="flex-col p-3 mb-3 border-1 sidebar-box">
      <!-- begin::Author -->
      <slot name="author"></slot>
      <!-- end::Author -->
    </div>
    <!-- end::Sidebar Box -->

    <!-- begin::Sidebar Box -->
    <div class="p-3 mb-3 border-1 sidebar-box">
      <!-- begin::Sidebar Box Title -->
      <div class="mb-3">
        <h2>Lọc theo khoảng giá</h2>
      </div>
      <!-- end::Sidebar Box Title -->

      <!-- begin::Sidebar Box Content -->
      <div class="filter-list">
        <a-button class="filter-list-item">Dưới 500 triệu</a-button>
        <a-button class="filter-list-item">500 - 800 triệu</a-button>
        <a-button class="filter-list-item">800 triệu - 1 tỷ</a-button>
        <a-button class="filter-list-item">1 - 2 tỷ</a-button>
        <a-button class="filter-list-item">2 - 3 tỷ</a-button>
        <a-button class="filter-list-item">3 - 5 tỷ</a-button>
        <a-button class="filter-list-item">Thương lượng</a-button>
      </div>
      <!-- end::Sidebar Box Content -->
    </div>
    <!-- end::Sidebar Box -->

    <!-- begin::Sidebar Box -->
    <div class="p-3 border-1 sidebar-box">
      <!-- begin::Sidebar Box Title -->
      <div class="mb-3">
        <h2>Lọc theo khoảng giá</h2>
      </div>
      <!-- end::Sidebar Box Title -->

      <!-- begin::Sidebar Box Content -->
      <div class="filter-list">
        <a-button class="filter-list-item">Dưới 30 m&sup2</a-button>
        <a-button class="filter-list-item">30 - 50 m&sup2</a-button>
        <a-button class="filter-list-item">50 - 80 m&sup2</a-button>
        <a-button class="filter-list-item">80 - 100 m&sup2</a-button>
        <a-button class="filter-list-item">100 - 150 m&sup2</a-button>
        <a-button class="filter-list-item">150 - 200 m&sup2</a-button>
        <a-button class="filter-list-item">Trên 500 m&sup2</a-button>
      </div>
      <!-- end::Sidebar Box Content -->
    </div>
    <!-- end::Sidebar Box -->
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
