import { createRouter, createWebHistory } from "vue-router";

import SignIn from "./views/SignIn.vue";
import Dashboard from "./views/Dashboard.vue";
import Users from "./views/Users.vue";
import Questions from "./views/Questions.vue";
import Exams from "./views/Exams.vue";
import Categories from "./views/Categories.vue";
import Results from "./views/Results.vue";
import NewUsers from "./views/NewUsers.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: SignIn },
    { path: "/dashboard", component: Dashboard },
    { path: "/users", component: Users },
    { path: "/questions", component: Questions },
    { path: "/exams", component: Exams },
    { path: "/categories", component: Categories },
    { path: "/results", component: Results },
    { path: "/newuser", component: NewUsers },
  ],
});

export default router;
