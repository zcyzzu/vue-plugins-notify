import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;
import notify from "./lib/notification";
Vue.use(notify);
new Vue({
  render: (h) => h(App),
}).$mount("#app");
