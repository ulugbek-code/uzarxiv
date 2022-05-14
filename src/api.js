import axios from "axios";
import router from "./router.js";
import store from "./store";

const customAxios = axios.create({
  baseURL: "https://quiz.uzarxiv-test.uz/",
  timeout: 18000,
  headers: {
    Authorization: `Token ${JSON.parse(localStorage.getItem("token"))}`,
  },
});

customAxios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    // Do something with response error
    if (error.response.status === 404) {
      router.push("/notFound");
    } else if (error.response.status === 401) {
      // console.log(error.response.status);
      store.commit("logout");
      // localStorage.removeItem("token");
      router.replace("/login");
    }
    return Promise.reject(error);
  }
);

export default customAxios;
