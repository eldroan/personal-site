import Vue from "vue";
import App from "./App.vue";
import Buefy from "buefy";
import "@mdi/font/css/materialdesignicons.css";
import "buefy/dist/buefy.css";
import VueParticles from "vue-particles";
Vue.use(VueParticles);
Vue.use(Buefy);
Vue.config.productionTip = false;
new Vue({
  render: h => h(App)
}).$mount("#app");
