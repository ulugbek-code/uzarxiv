import axios from "axios";
// import router from "./router.js";
// import store from "./store";

const customAxios = axios.create({
  baseURL: "https://quiz.uzarxiv-test.uz/",
  timeout: 15000,
  // headers: {
  //   Authorization: `Token ${
  //     store.state.token
  //       ? store.state.token
  //       : JSON.parse(localStorage.getItem("token"))
  //   }`,
  //   // Authorization: `Token ${JSON.parse(localStorage.getItem("token"))}`,
  // },
});

customAxios.interceptors.request.use((config) => {
  const token = JSON.parse(localStorage.getItem("token"));
  if (token) {
    config.headers.Authorization = `Token ${token}`;
  }
  return config;
});

// customAxios.interceptors.response.use(
//   function (response) {
//     return response;
//   },
//   function (error) {
//     // Do something with response error
//     if (error.response.status === 404) {
//       router.push("/notFound");
//     }
//     //  else if (error.response.status === 401) {
//     //   alert("Iltimos, sahifani yangilab, yana avvaldan login qiling");
//     // console.log(error.response.status);
//     // localStorage.removeItem("token");
//     // localStorage.removeItem("isAdmin");
//     // localStorage.removeItem("userId");
//     // localStorage.removeItem('userInfo')
//     // store.dispatch("logout");
//     // }
//     return Promise.reject(error);
//   }
// );

export default customAxios;
