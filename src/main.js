import "bootstrap/dist/css/bootstrap.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router.js";
import store from "./store/index.js";
import VueApexCharts from "vue3-apexcharts";
import VueProgressBar from "@aacassandra/vue3-progressbar";
import FontAwesomeIcon from "./fontawesome.js";
import BaseDropdown from "./components/BaseDropdown.vue";

const options = {
  color: "#4361ee",
  failedColor: "#FF2511",
  thickness: "3px",
  transition: {
    speed: "0.2s",
    opacity: "0.5s",
    termination: 300,
  },
  autoRevert: true,
  location: "top",
  inverse: false,
};

const app = createApp(App);
app.use(router);
app.use(store);
app.use(VueProgressBar, options);
app.use(VueApexCharts);
app.component("fa", FontAwesomeIcon);
app.component("base-dropdown", BaseDropdown);
app.mount("#app");

import "bootstrap/dist/js/bootstrap.js";
