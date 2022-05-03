import { createRouter, createWebHistory } from "vue-router";

import SignIn from "./views/SignIn.vue";
import Dashboard from "./views/Dashboard.vue";
import Users from "./views/Users.vue";
import EachUser from "./components/users/EachUser.vue";
import Questions from "./views/Questions.vue";
import Exams from "./views/Exams.vue";
import EachExam from "./views/EachExam.vue";
import Categories from "./views/Categories.vue";
import Results from "./views/Results.vue";
import NewUsers from "./views/NewUsers.vue";
import NotFound from "./views/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Dashboard, meta: { requiresAuth: true } },
    { path: "/users", component: Users, meta: { requiresAuth: true } },
    {
      path: "/users/:id",
      name: "user",
      component: EachUser,
      props: true,
      meta: { requiresAuth: true },
    },
    { path: "/questions", component: Questions, meta: { requiresAuth: true } },
    { path: "/exams", component: Exams, meta: { requiresAuth: true } },
    {
      path: "/exams/:id",
      name: "exam",
      component: EachExam,
      props: true,
      meta: { requiresAuth: true },
    },
    {
      path: "/categories",
      component: Categories,
      meta: { requiresAuth: true },
    },
    { path: "/results", component: Results, meta: { requiresAuth: true } },
    { path: "/newuser", component: NewUsers, meta: { requiresAuth: true } },
    { path: "/login", component: SignIn, meta: { requiresUnauth: true } },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

router.beforeEach(function (to, _, next) {
  if (to.meta.requiresAuth && !localStorage.getItem("token")) {
    next("/login");
  } else if (to.meta.requiresUnauth && localStorage.getItem("token")) {
    next("/");
  } else {
    next();
  }
});

export default router;
