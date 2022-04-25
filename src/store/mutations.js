import router from "../router.js";

export default {
  toggleNavbar(state) {
    state.isNavOpened = !state.isNavOpened;
  },
  setAuth(state) {
    state.isAuth = true;
    state.token = JSON.parse(localStorage.getItem("token"));
  },
  logout(state) {
    state.isAuth = false;
    state.token = null;
    router.replace("/login");
  },
  getUsers(state, payload) {
    state.users = payload.data;
  },
  getExams(state, payload) {
    state.exams = payload.data;
  },
  getQuestions(state, payload) {
    state.questions = payload.data;
  },
  getAnswers(state, payload) {
    state.answers = payload.data;
  },
  getModules(state, payload) {
    state.modules = payload.data;
  },
};
