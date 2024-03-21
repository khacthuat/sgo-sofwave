import { createApp } from "vue";
import App from "./App.vue";

import "./style.css";
import router from "./router/index.js";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/dist/css/bootstrap-utilities.min.css";

import Antd from "ant-design-vue";
import "ant-design-vue/dist/reset.css";

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  next();
});


const app = createApp(App);
app.use(Antd);
app.use(router);
app.mount("#app");
