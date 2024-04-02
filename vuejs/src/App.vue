<template>
  <router-view></router-view>
  <a-config-provider
    :theme="{
      token: {
        colorPrimary: data.colorPrimary,
        borderRadius: `${data.borderRadius}px`,
      },
    }"
  >
  </a-config-provider>

  <!-- begin::Back to top -->
  <div class="back-to-top">
    <a-back-top :style="{ right: '6px' }">
      <template #icon>
        <ArrowUpOutlined />
      </template>
    </a-back-top>
  </div>
  <!-- end::Back to top -->
</template>


<script setup>
import { ArrowUpOutlined } from "@ant-design/icons-vue";
import auth from "./stores/auth";
import getUserAPI from "./api/users/getUser";
import { ref } from "vue";
import { theme } from "ant-design-vue";

// color theme
const defaultData = {
  borderRadius: 6,
  colorPrimary: "#654321",
};
const data = ref(defaultData);
const { token } = theme.useToken();

// auth
const store = auth();
const initializeApp = async () => {
  if (localStorage.getItem("token")) {
    const token = localStorage.getItem("token");
    const user = await getUserAPI.getByToken(token);
    store.login(token, user);
  }
};

initializeApp();
</script>

<script>
export default {};
</script>

<style>
input[type="color"] {
  border: 1px solid v-bind("token.colorBorder");
  background-color: v-bind("token.colorBgBase");
}
</style>
