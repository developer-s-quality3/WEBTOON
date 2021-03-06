import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import vuetify from "./plugins/vuetify";
import axios from "./middleware/axios";
import VueCookies from "vue-cookies";
// import register from "./store/register";

Vue.use(VueCookies);
Vue.config.productionTip = false;
Vue.prototype.$http = axios;

new Vue({
  // register,
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
