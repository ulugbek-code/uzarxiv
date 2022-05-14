import router from "../router.js";

export default {
  activateExam(state) {
    state.isExamActive = !state.isExamActive;
  },
  activateUser(state) {
    state.isUserActive = !state.isUserActive;
  },
  activateQuestion(state) {
    state.isQuestionActive = !state.isQuestionActive;
  },
  activateCategory(state) {
    state.isCategoryActive = !state.isCategoryActive;
  },
  toggleNavbar(state) {
    state.isNavOpened = !state.isNavOpened;
  },
  setAuth(state) {
    state.isAuth = true;
    state.token = JSON.parse(localStorage.getItem("token"));
    state.isAdmin = JSON.parse(localStorage.getItem("isAdmin"));
    state.userId = JSON.parse(localStorage.getItem("userId"));
    // console.log(state.token);
  },
  logout(state) {
    state.isAuth = false;
    state.token = null;
    state.isAdmin = false;
    state.userId = null;
    router.replace("/login");
  },
  getUsers(state, payload) {
    state.users = payload.data;
  },
  getExams(state, payload) {
    state.exams = payload.data;
  },
  getExamResults(state, payload) {
    state.examResults = payload.data;
  },
  // questions
  getQuestions(state, payload) {
    state.questions = payload.data;
  },
  getVariants(state, payload) {
    state.variants = payload.data;
  },
  getAnswers(state, payload) {
    state.answers = payload.data;
  },
  getModules(state, payload) {
    state.modules = payload.data;
  },
  // groups
  getGroups(state, payload) {
    state.groups = payload.data;
  },
  getOperationDetails(state, payload) {
    state.operationDetails = payload.data;
  },
};
