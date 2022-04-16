import "bootstrap/dist/css/bootstrap.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router.js";
import FontAwesomeIcon from "./fontawesome.js";

const app = createApp(App);
app.use(router);
app.component("fa", FontAwesomeIcon);
app.mount("#app");

import "bootstrap/dist/js/bootstrap.js";
