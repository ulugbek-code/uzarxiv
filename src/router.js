import { createRouter, createWebHistory } from "vue-router";

import SignIn from "./views/SignIn.vue";
import Dashboard from "./views/Dashboard.vue";
const Users = () => import("./views/Users.vue");
const Groups = () => import("./views/Groups.vue");
const TakeExam = () => import("./components/quiz/TakeExam.vue");
const GroupDetail = () => import("./components/groups/GroupDetail.vue");
const OperationDetails = () =>
  import("./components/operation/OperationDetails");
const EachUser = () => import("./components/users/EachUser.vue");
const Questions = () => import("./views/Questions.vue");
const AddQuestion = () => import("./components/questions/AddQuestion.vue");
const EachQuestion = () => import("./components/questions/EachQuestion.vue");
const Exams = () => import("./views/Exams.vue");
const EachExam = () => import("./components/exams/EachExam.vue");
const Categories = () => import("./views/Categories.vue");
const Results = () => import("./views/Results.vue");
const NewUsers = () => import("./views/NewUsers.vue");
// import Users from "./views/Users.vue";
// import Groups from "./views/Groups.vue";
// import GroupDetail from "./components/groups/GroupDetail.vue";
// import OperationDetails from "./components/operation/OperationDetails";
// import EachUser from "./components/users/EachUser.vue";
// import Questions from "./views/Questions.vue";
// import EachQuestion from "./components/questions/EachQuestion.vue";
// import Exams from "./views/Exams.vue";
// import EachExam from "./components/exams/EachExam.vue";
// import Categories from "./views/Categories.vue";
// import EachCategory from "./components/categories/EachCategory.vue";
// import Results from "./views/Results.vue";
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
    {
      path: "/quiz/:id",
      name: "quiz",
      component: TakeExam,
      props: true,
      meta: { requiresAuth: true },
    },
    { path: "/groups", component: Groups, meta: { requiresAuth: true } },
    {
      path: "/groups/:id",
      name: "group",
      component: GroupDetail,
      props: true,
      meta: { requiresAuth: true },
    },
    {
      path: "/operation-detail/:id",
      name: "operation",
      component: OperationDetails,
      props: true,
      meta: { requiresAuth: true },
    },
    { path: "/questions", component: Questions, meta: { requiresAuth: true } },
    {
      path: "/questions/add",
      name: "add-question",
      component: AddQuestion,
      meta: { requiresAuth: true },
    },
    {
      path: "/questions/:id",
      name: "question",
      component: EachQuestion,
      props: true,
      meta: { requiresAuth: true },
    },
    { path: "/exams", component: Exams, meta: { requiresAuth: true } },
    {
      path: "/exams/add-exam/:id",
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
    // {
    //   path: "/categories/:id",
    //   name: "category",
    //   component: EachCategory,
    //   props: true,
    //   meta: { requiresAuth: true },
    // },
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
