export default {
  isNavOpened(state) {
    return state.isNavOpened;
  },
  isAuth(state) {
    return state.isAuth;
  },
  token(state) {
    return state.token;
  },
  isAmin(state) {
    return state.isAmin;
  },
  users(state) {
    return state.users;
  },
  // user: (state) => (id) => {
  //   return state.users.find((user) => user.id === id);
  // },
  exam: (state) => (id) => {
    return state.exams.find((exam) => exam.id === id);
  },
  category: (state) => (id) => {
    return state.modules.find((module) => module.id === id);
  },
  question: (state) => (id) => {
    return state.questions.find((question) => question.id === id);
  },
  exams(state) {
    return state.exams;
  },
  examResults(state) {
    return state.examResults;
  },
  duration(state) {
    return state.duration;
  },
  questions(state) {
    return state.questions;
  },
  variants(state) {
    return state.variants;
  },
  answers(state) {
    return state.answers;
  },
  modules(state) {
    return state.modules;
  },
  // groups
  groups(state) {
    return state.groups;
  },
  operationDetails(state) {
    return state.operationDetails;
  },
};
