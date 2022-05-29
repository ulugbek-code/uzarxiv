import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

import rootMutations from "./mutations.js";
import rootActions from "./actions.js";
import rootGetters from "./getters.js";

const store = createStore({
  plugins: [
    createPersistedState({
      paths: ["changedDuration"],
    }),
  ],
  state() {
    return {
      changedDuration: null,
      savedTime: 0,
      duration: 0,
      isExamActive: false,
      isUserActive: false,
      isGroupActive: false,
      isResultActive: false,
      isCategoryActive: false,
      isQuestionActive: false, //for navigation active class
      token: JSON.parse(localStorage.getItem("token")) || null,
      userId: JSON.parse(localStorage.getItem("userId")) || null,
      isAdmin: JSON.parse(localStorage.getItem("isAdmin")) || false,
      isAuth: false,
      isNavOpened: false, //for hamburger menu
      statistics: {},
      users: [],
      exams: [],
      userExams: [],
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
