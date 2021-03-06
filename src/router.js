import { createRouter, createWebHistory } from "vue-router";

import SignIn from "./views/SignIn.vue";
import Dashboard from "./views/Dashboard.vue";
const Users = () => import("./views/Users.vue");
const Groups = () => import("./views/Groups.vue");
const AddGroup = () => import("./components/groups/AddGroup.vue");
const TakeExam = () => import("./components/quiz/TakeExam.vue");
const GroupDetail = () => import("./components/groups/GroupDetail.vue");
const OperationDetails = () =>
  import("./components/operation/OperationDetails");
const EachUser = () => import("./components/users/EachUser.vue");
const UserStatus = () => import("./components/users/UserStatus.vue");
const Questions = () => import("./views/Questions.vue");
const AddQuestion = () => import("./components/questions/AddQuestion.vue");
const EachQuestion = () => import("./components/questions/EachQuestion.vue");
const OperationResult = () =>
  import("./components/operation/OperationResult.vue");
// const Exams = () => import("./views/Exams.vue");
const EachExam = () => import("./components/exams/EachExam.vue");
const EditExam = () => import("./components/exams/EditExam.vue");
const Categories = () => import("./views/Categories.vue");
const Results = () => import("./views/Results.vue");
const SoonExpiredUsers = () => import("./views/SoonExpiredUsers.vue");
const NewUsers = () => import("./views/NewUsers.vue");
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
      path: "/user-status/status=:status&group=:group&start-date=:start&finish-date=:finish",
      name: "user-status",
      component: UserStatus,
      props: true,
      meta: { requiresAuth: true },
    },
    {
      path: "/quiz/variant-id=:id&group-id=:groupId&exam-id=:examId&duration=:duration",
      name: "quiz",
      component: TakeExam,
      props: true,
      meta: { requiresAuth: true },
    },
    { path: "/groups", component: Groups, meta: { requiresAuth: true } },
    {
      path: "/groups/add-group",
      name: "add-group",
      component: AddGroup,
      meta: { requiresAuth: true },
    },
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
    {
      path: "/operation-result/:id",
      name: "operation-result",
      component: OperationResult,
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
    // { path: "/exams", component: Exams, meta: { requiresAuth: true } },
    {
      path: "/exams/add-exam/:id",
      name: "exam",
      component: EachExam,
      props: true,
      meta: { requiresAuth: true },
    },
    {
      path: "/exams/edit-exam/group-id=:id&exam-id=:examId",
      name: "edit-exam",
      component: EditExam,
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
    {
      path: "/soon-expired-users",
      component: SoonExpiredUsers,
      meta: { requiresAuth: true },
    },
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
