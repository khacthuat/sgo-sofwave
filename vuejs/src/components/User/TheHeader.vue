<template>
  <!-- begin::Header -->
  <div class="app-header flex justify-center align-items-center">
    <!-- begin::Header Container -->
    <div
      class="app-container flex align-items-stretch justify-between fixed-top z-10 bg-primary-white-color"
    >
      <!-- begin::Header Wrapper -->
      <div class="flex sm:justify-between w-100">
        <div class="flex d-sm-flex">
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
            <!-- begin::Authenticated -->
            <div class="flex align-items-center space-x-4" v-if="store.token">
              <!-- begin::Notification -->
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
                <a-badge>
                  <a-button class="flex justify-center align-items-center">
                    <NotificationOutlined />
                  </a-button>
                  <span
                    class="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-sky-400 opacity-75 right-[7px] top-[-3px]"
                  ></span>
                  <span
                    class="relative inline-flex rounded-full h-3 w-3 bg-sky-500 right-[5px] top-[-5px]"
                  ></span>
                </a-badge>
              </a-popover>
              <!-- end::Notification -->

              <!-- begin::User Feature -->
              <div class="n:px-2 md:px-4 border-x-[1px]">
                <a-dropdown :placement="'bottom'" trigger="click">
                  <template #overlay>
                    <a-menu class="">
                      <a-menu-item key="1">
                        <BarChartOutlined />
                        Quản lý tin đăng
                        <router-link to="/user/news-manage"></router-link>
                      </a-menu-item>
                      <a-menu-item key="3">
                        <InfoOutlined />
                        Thay đổi thông tin các nhân
                      </a-menu-item>
                      <a-menu-item
                        key="4"
                        @click="onLogout"
                        class="mt-2 border-t-[1px]"
                      >
                        <LogoutOutlined />
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
                      <span class="text-selected-color">
                        {{ store.user.name[0] }}
                      </span>
                    </a-avatar>
                    <div class="d-none d-sm-block">{{ store.user.name }}</div>
                    <div class="mx-2">
                      <DownOutlined />
                    </div>
                  </div>
                </a-dropdown>
              </div>
              <!-- end::User Feature -->

              <!-- begin::Create Post -->
              <router-link to="/user/news-form">
                <a-button class=""> Đăng tin </a-button>
              </router-link>
              <!-- end::Create Post -->
            </div>
            <!-- end::Authenticated -->

            <!-- begin::Unauthenticated -->
            <div class="flex" v-else>
              <div class="flex border-x-[1px]">
                <!-- begin::Login Form -->
                <div class="px-2 sm:px-4 border-r-[1px]">
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
                            message: 'Hãy nhập email!',
                          },
                        ]"
                      >
                        <a-input
                          v-model:value="formState.username"
                          placeholder="Email"
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
                        <a class="login-form-forgot" href="">Quên mật khẩu</a>
                      </a-form-item>

                      <a-form-item>
                        <a-button
                          :disabled="disabledLogin"
                          type="primary"
                          html-type="submit"
                          class="login-form-button mb-3"
                          @click="onLogin"
                        >
                          Đăng nhập
                        </a-button>
                        Hoặc
                        <div
                          class="text-[#0891b2] hover:text-[#22d3ee] cursor-pointer inline ml-2"
                          @click="setModalRegisterVisible"
                        >
                          Đăng ký ngay!
                        </div>
                      </a-form-item>
                    </a-form>
                  </a-modal>
                </div>
                <!-- end::Login Form -->

                <!-- begin::Register Form -->
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
                        name="registerName"
                        :rules="[
                          {
                            required: true,
                            message: 'Hãy nhập tên!',
                          },
                        ]"
                      >
                        <a-input
                          placeholder="Tên"
                          v-model:value="formState.registerName"
                        >
                          <template #prefix>
                            <UserOutlined class="site-form-item-icon" />
                          </template>
                        </a-input>
                      </a-form-item>

                      <a-form-item
                        name="registerUsername"
                        :rules="[
                          {
                            required: true,
                            message: 'Hãy nhập email!',
                          },
                        ]"
                      >
                        <a-input
                          placeholder="Email"
                          v-model:value="formState.registerUsername"
                        >
                          <template #prefix>
                            <UserOutlined class="site-form-item-icon" />
                          </template>
                        </a-input>
                      </a-form-item>

                      <a-form-item
                        name="registerPassword"
                        :rules="[
                          {
                            required: true,
                            message: 'Hãy nhập mật khẩu!',
                          },
                        ]"
                      >
                        <a-input-password
                          v-model:value="formState.registerPassword"
                          placeholder="Mật khẩu"
                        >
                          <template #prefix>
                            <LockOutlined class="site-form-item-icon" />
                          </template>
                        </a-input-password>
                      </a-form-item>

                      <a-form-item
                        name="registerPasswordConfirm"
                        :rules="[
                          {
                            required: true,
                            compare: formState.registerPassword,
                            message: 'Không trùng khớp mật khẩu!',
                          },
                        ]"
                      >
                        <a-input-password
                          v-model:value="formState.registerPasswordConfirm"
                          placeholder="Nhập lại mật khẩu"
                        >
                          <template #prefix>
                            <LockOutlined class="site-form-item-icon" />
                          </template>
                        </a-input-password>
                      </a-form-item>

                      <a-form-item>
                        <a-button
                          :disabled="disabledRegister"
                          type="primary"
                          html-type="submit"
                          class="register-form-button mb-3"
                          @click="onRegister"
                        >
                          Đăng ký
                        </a-button>
                      </a-form-item>
                    </a-form>
                  </a-modal>
                </div>
                <!-- end::Register Form -->
              </div>
              <router-link to="/user/news-form">
                <a-button v-if="store.token"> Đăng tin </a-button>
              </router-link>
            </div>
            <!-- end::Unauthenticated -->
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
  LogoutOutlined,
  BarChartOutlined,
  InfoOutlined,
} from "@ant-design/icons-vue";
import { ref, reactive, computed } from "vue";
import auth from "../../stores/auth";
import login from "../../api/auth/login";
import logout from "../../api/auth/logout";
import createUserAPI from "../../api/users/createUser";

const store = auth();

// login
const formState = reactive({
  username: "",
  password: "",
  registerName: "",
  registerUsername: "",
  registerPassword: "",
  registerPasswordConfirm: "",
});

const onFinish = (values) => {
  modalLoginVisible.value = false;
};
const onFinishFailed = (errorInfo) => {};

const onLogin = async () => {
  const loginUser = await login(formState.username, formState.password);
  if (!loginUser) return;
  store.login(loginUser.token, loginUser);
};
const onLogout = async () => {
  const logoutUser = await logout();
  if (logoutUser) {
    store.logout();
  }
};
const onRegister = async () => {
  const user = {
    name: formState.registerName,
    email: formState.registerUsername,
    password: formState.registerPassword,
  };
  await createUserAPI(user);
};

const disabledLogin = computed(() => {
  return !(formState.username && formState.password);
});
const disabledRegister = computed(() => {
  return !(
    formState.registerUsername &&
    formState.registerPassword &&
    formState.registerPasswordConfirm &&
    formState.registerName
  );
});

// modal
const modalLoginVisible = ref(false);
const setModalLoginVisible = () => {
  modalLoginVisible.value = true;
};
const modalRegisterVisible = ref(false);
const setModalRegisterVisible = () => {
  modalLoginVisible.value = false;
  modalRegisterVisible.value = true;
};
</script>

<script>
export default {};
</script>
<style>
.login-form {
  max-width: 350px;
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
