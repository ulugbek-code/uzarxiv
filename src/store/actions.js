import axios from "axios";
export default {
  // users
  async getUsers(context) {
    try {
      const res = await axios.get("https://quiz.multisim.uz/main/user/", {
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
  // exams
  async getExams(context) {
    try {
      const res = await axios.get("https://quiz.multisim.uz/main/exams/", {
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
  // questions
  async getQuestions(context) {
    try {
      const res = await axios.get(
        "https://quiz.multisim.uz/main/question/get/",
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
  // answers
  async getAnswers(context) {
    try {
      const res = await axios.get("https://quiz.multisim.uz/main/answer/", {
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
  // modules
  async getModules(context) {
    try {
      const res = await axios.get("https://quiz.multisim.uz/main/module/", {
        headers: {
          Authorization: `Token ${JSON.parse(localStorage.getItem("token"))}`,
        },
      });
      console.log(res);
      context.commit("getModules", res);
    } catch (e) {
      console.log(e.response);
    }
  },
  //get Groups
  async getGroups(context) {
    try {
      const res = await axios.get("https://quiz.multisim.uz/main/group/", {
        headers: {
          Authorization: `Token ${JSON.parse(localStorage.getItem("token"))}`,
        },
      });
      console.log(res);
      context.commit("getGroups", res);
    } catch (e) {
      console.log(e.response);
    }
  },
};
