<template>
  <!-- begin::Header -->
  <div class="app-header flex justify-center align-items-center">
    <!-- begin::Header Container -->
    <div
      class="app-container flex align-items-stretch justify-between fixed-top z-10 bg-primary-white-color"
    >
      <!-- begin::Header Wrapper -->
      <div class="flex justify-between w-100">
        <div class="flex flex-grow-1">
          <!-- begin::Logo -->
          <div
            class="app-header-logo flex align-items-center justify-center gap-2 me-lg-5"
          >
            <router-link to="/"
              ><!-- begin::Logo Image -->
              <img
                src="../../assets/logo/logo.png"
                alt="Logo"
                class="app-header-logo-image"
                style="height: 50px"
              />
              <!-- end::Logo Image --></router-link
            >
          </div>
          <!-- end::Logo -->
        </div>
        <!-- end:: Menu Wrapper -->

        <!-- begin::Control Menu -->
        <div class="app-header-control-menu">
          <!-- begin::Control Menu Item -->
          <div class="app-control-menu-item">
            <div class="flex align-items-center space-x-4" v-if="store.token">
              <a-popover placement="bottomRight" trigger="click" class="flex">
                <template #content>
                  <div class="max-h-[440px] max-w-[580px]">
                    <div class="flex align-items-center mt-5 cursor-pointer">
                      <div class="type me-3">
                        <UserOutlined
                          :style="{
                            fontSize: '24px',
                          }"
                        />
                      </div>
                      <div class="flex flex-col content">
                        <div class="detail">
                          Đăng ký tham dự miễn phí Báo cáo thị trường BĐS Quý
                          1/2024
                        </div>
                        <div class="day">20/10/2024</div>
                      </div>
                    </div>

                    <div class="flex align-items-center mt-3 cursor-pointer">
                      <div class="type me-3">
                        <ClockCircleOutlined
                          :style="{
                            fontSize: '24px',
                          }"
                        />
                      </div>
                      <div class="flex flex-col content">
                        <div class="detail">
                          Số điện thoại 0373388843 đã được thêm vào danh sách
                          liên lạc của bạn. Xem chi tiết tại đây.
                        </div>
                        <div class="day">20/10/2024</div>
                      </div>
                    </div>
                  </div>
                </template>
                <template #title>
                  <h2>Thông báo</h2>
                </template>
                <a-badge count="5">
                  <a-button class="flex justify-center align-items-center">
                    <NotificationOutlined />
                  </a-button>
                </a-badge>
              </a-popover>

              <div class="n:px-2 md:px-4 border-x-[1px]">
                <a-dropdown :placement="'bottomRight'" trigger="click">
                  <template #overlay>
                    <a-menu class="mt-2">
                      <a-menu-item key="1"> Quản lý tin đăng </a-menu-item>
                      <a-menu-item key="2"> Quản lý tài trợ </a-menu-item>
                      <a-menu-item key="3">
                        Thay đổi thông tin các nhân
                      </a-menu-item>
                      <a-menu-item key="4" @click="onLogout">
                        Đăng xuất
                      </a-menu-item>
                    </a-menu>
                  </template>
                  <div
                    class="flex justify-center align-items-center cursor-pointer"
                  >
                    <a-avatar
                      size="large"
                      class="me-2"
                      :style="{
                        backgroundColor: '#ffeceb',
                        verticalAlign: 'middle',
                      }"
                    >
                      <span class="text-selected-color"> Bách </span>
                    </a-avatar>
                    <div class="d-none d-xl-block">Nguyễn Văn Bách</div>
                    <div class="mx-2">
                      <DownOutlined />
                    </div>
                  </div>
                </a-dropdown>
              </div>
              <router-link to="/user/news-form">
                <a-button class=""> Đăng tin </a-button>
              </router-link>
            </div>
            <div class="flex" v-else>
              <div class="flex mx-4 border-x-[1px]">
                <div class="px-4 border-r-[1px]">
                  <a-button class="border-0" @click="setModalLoginVisible">
                    Đăng nhập
                  </a-button>

                  <a-modal
                    class="top-[20%]"
                    v-model:open="modalLoginVisible"
                    title="Đăng nhập để tiếp tục"
                  >
                    <template #footer> </template>
                    <a-form
                      :model="formState"
                      name="normal_login"
                      class="login-form ml-auto mr-auto mt-4"
                      @finish="onFinish"
                      @finishFailed="onFinishFailed"
                    >
                      <a-form-item
                        name="username"
                        :rules="[
                          {
                            required: true,
                            message: 'Hãy nhập tên đăng nhập!',
                          },
                        ]"
                      >
                        <a-input
                          v-model:value="formState.username"
                          placeholder="Số điện thoại hoặc email"
                        >
                          <template #prefix>
                            <UserOutlined class="site-form-item-icon" />
                          </template>
                        </a-input>
                      </a-form-item>

                      <a-form-item
                        name="password"
                        :rules="[
                          {
                            required: true,
                            message: 'Hãy nhập mật khẩu!',
                          },
                        ]"
                      >
                        <a-input-password
                          v-model:value="formState.password"
                          placeholder="Mật khẩu"
                        >
                          <template #prefix>
                            <LockOutlined class="site-form-item-icon" />
                          </template>
                        </a-input-password>
                      </a-form-item>

                      <a-form-item>
                        <a-form-item name="remember" no-style>
                          <a-checkbox v-model:checked="formState.remember"
                            >Ghi nhớ tài khoản</a-checkbox
                          >
                        </a-form-item>
                        <a class="login-form-forgot" href="">Quên mật khẩu</a>
                      </a-form-item>

                      <a-form-item>
                        <a-button
                          :disabled="disabled"
                          type="primary"
                          html-type="submit"
                          class="login-form-button mb-3"
                          @click="onLogin"
                        >
                          Đăng nhập
                        </a-button>
                        Hoặc
                        <a
                          href=""
                          class="ml-2 text-[#0891b2] hover:text-[#22d3ee]"
                        >
                          Đăng ký ngay!</a
                        >
                      </a-form-item>
                    </a-form>
                  </a-modal>
                </div>
                <div class="px-4">
                  <a-button class="border-0" @click="setModalRegisterVisible">
                    Đăng ký
                  </a-button>
                  <a-modal
                    class="top-[20%]"
                    v-model:open="modalRegisterVisible"
                    title="Đăng ký tài khoản mới"
                  >
                    <template #footer> </template>
                    <a-form
                      :model="formState"
                      name="normal_register"
                      class="register-form ml-auto mr-auto mt-4"
                      @finish="onFinish"
                      @finishFailed="onFinishFailed"
                    >
                      <a-form-item
                        name="username"
                        :rules="[
                          {
                            required: true,
                            message: 'Hãy nhập số diện thoại!',
                          },
                        ]"
                      >
                        <a-input placeholder="Số điện thoại hoặc email">
                          <template #prefix>
                            <PhoneOutlined class="site-form-item-icon" />
                          </template>
                        </a-input>
                      </a-form-item>

                      <a-form-item>
                        <a-button
                          :disabled="disabled"
                          type="primary"
                          html-type="submit"
                          class="register-form-button mb-3"
                        >
                          Tiếp tục
                        </a-button>
                      </a-form-item>
                    </a-form>
                  </a-modal>
                </div>
              </div>
              <router-link to="/user/news-form">
                <a-button class=""> Đăng tin </a-button>
              </router-link>
            </div>
          </div>
          <!-- end::Control Menu Item -->
        </div>
        <!-- end::Control Menu -->
      </div>
      <!-- end::Header Wrapper -->
    </div>
    <!-- end::Header Container -->
  </div>
  <!-- end::Header -->
</template>

<script setup>
import {
  NotificationOutlined,
  DownOutlined,
  UserOutlined,
  ClockCircleOutlined,
  LockOutlined,
  PhoneOutlined,
} from "@ant-design/icons-vue";
import { ref, reactive, computed } from "vue";
import auth from "../../stores/auth";
import login from "../../api/auth/login";
import logout from "../../api/auth/logout";

const store = auth();

// login
const formState = reactive({
  username: "",
  password: "",
  remember: true,
});

const onFinish = (values) => {
  modalLoginVisible.value = false;
};
const onLogin = async () => {
  const user = await login(formState.username, formState.password);
  if (!user) return;
  store.login(user.token, user);
};
const onLogout = async () => {
  const userLogout = await logout(localStorage.getItem("token"));
  store.logout();
};
const onFinishFailed = (errorInfo) => {};
const disabled = computed(() => {
  return !(formState.username && formState.password);
});

// modal
const modalLoginVisible = ref(false);
const setModalLoginVisible = () => {
  modalLoginVisible.value = true;
};
const modalRegisterVisible = ref(false);
const setModalRegisterVisible = () => {
  modalRegisterVisible.value = true;
};
</script>

<script>
export default {};
</script>
<style>
.login-form {
  max-width: 300px;
}
.login-form-forgot {
  float: right;
}
.login-form-button {
  width: 100%;
}

.register-form {
  max-width: 300px;
}

.register-form-button {
  width: 100%;
}
</style>
