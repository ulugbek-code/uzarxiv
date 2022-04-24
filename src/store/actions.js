import axios from "axios";
export default {
  async getUsers(context) {
    try {
      const res = await axios.get("https://quiz.multisim.uz/api/main/user/", {
        headers: {
          Authorization: `Token ${JSON.parse(localStorage.getItem("token"))}`,
        },
      });
      console.log(res);
      context.commit("getUsers", res);
    } catch (e) {
      console.log(e.response);
    }
  },
  async getExams(context) {
    try {
      const res = await axios.get("https://quiz.multisim.uz/api/main/exams/", {
        headers: {
          Authorization: `Token ${JSON.parse(localStorage.getItem("token"))}`,
        },
      });
      console.log(res);
      context.commit("getExams", res);
    } catch (e) {
      console.log(e.response);
    }
  },
  async getQuestions(context) {
    try {
      const res = await axios.get(
        "https://quiz.multisim.uz/api/main/question/get/",
        {
          headers: {
            Authorization: `Token ${JSON.parse(localStorage.getItem("token"))}`,
          },
        }
      );
      console.log(res);
      context.commit("getQuestions", res);
    } catch (e) {
      console.log(e.response);
    }
  },
  async getAnswers(context) {
    try {
      const res = await axios.get("https://quiz.multisim.uz/api/main/answer/", {
        headers: {
          Authorization: `Token ${JSON.parse(localStorage.getItem("token"))}`,
        },
      });
      console.log(res);
      context.commit("getAnswers", res);
    } catch (e) {
      console.log(e.response);
    }
  },
};
