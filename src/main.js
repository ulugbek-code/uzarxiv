import "bootstrap/dist/css/bootstrap.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router.js";
import store from "./store/index.js";
import FontAwesomeIcon from "./fontawesome.js";
import BaseDropdown from "./components/BaseDropdown.vue";

const app = createApp(App);
app.use(router);
app.use(store);
app.component("fa", FontAwesomeIcon);
app.component("base-dropdown", BaseDropdown);
app.mount("#app");

import "bootstrap/dist/js/bootstrap.js";
