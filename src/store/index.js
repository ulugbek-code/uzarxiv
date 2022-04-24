import { createStore } from "vuex";

import rootMutations from "./mutations.js";
import rootActions from "./actions.js";
import rootGetters from "./getters.js";

const store = createStore({
  state() {
    return {
      token: JSON.parse(localStorage.getItem("token")) || null,
      isAuth: false,
      isNavOpened: true, //for hamburger menu
      users: [],
      exams: [],
      questions: [],
      answers: [],
    };
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters,
});

export default store;
