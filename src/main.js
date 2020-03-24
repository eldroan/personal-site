import Vue from "vue";
import App from "./App.vue";
import Buefy from "buefy";
import '@mdi/font/css/materialdesignicons.css'
import "buefy/dist/buefy.css";
Vue.use(Buefy);
Vue.config.productionTip = false;
new Vue({
  render: h => h(App)
}).$mount("#app");