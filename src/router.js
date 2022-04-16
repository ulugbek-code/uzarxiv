import { createRouter, createWebHistory } from "vue-router";

import SignIn from "./views/SignIn.vue";
import Dashboard from "./views/Dashboard.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: SignIn },
    { path: "/dashboard", component: Dashboard },
  ],
});

export default router;
