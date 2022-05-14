import { createStore } from "vuex";

import rootMutations from "./mutations.js";
import rootActions from "./actions.js";
import rootGetters from "./getters.js";

const store = createStore({
  state() {
    return {
      isExamActive: false,
      isUserActive: false,
      isCategoryActive: false,
      isQuestionActive: false, //for navigation active class
      token: JSON.parse(localStorage.getItem("token")) || null,
      userId: JSON.parse(localStorage.getItem("userId")) || null,
      isAdmin: JSON.parse(localStorage.getItem("isAdmin")) || false,
      isAuth: false,
      isNavOpened: true, //for hamburger menu
      users: [],
      exams: [],
      examResults: [],
      questions: [],
      variants: [],
      answers: [],
      modules: [],
      groups: [],
      operationDetails: [],
    };
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters,
});

export default store;
