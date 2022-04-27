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
  users(state) {
    return state.users;
  },
  user: (state) => (id) => {
    return state.users.find((user) => user.id === id);
  },
  exams(state) {
    return state.exams;
  },
  questions(state) {
    return state.questions;
  },
  answers(state) {
    return state.answers;
  },
  modules(state) {
    return state.modules;
  },
};
