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
    router.replace("/");
  },
};
