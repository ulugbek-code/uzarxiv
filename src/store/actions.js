import customAxios from "../api";
export default {
  // users
  async getUsers(context) {
    try {
      const res = await customAxios.get("main/user/get/");
      // console.log(res);
      context.commit("getUsers", res);
    } catch (e) {
      console.log(e);
    }
  },
  // exams
  async getUserExams(context) {
    try {
      const res = await customAxios.get(
        `main/exams/get/?user_id=${context.state.userId}`
      );
      context.commit("getUserExams", res);
      // console.log(this.exams);
    } catch (e) {
      console.log(e.response);
    }
  },
  async getExams(context) {
    try {
      const res = await customAxios.get("main/exams/");
      // console.log(res);
      context.commit("getExams", res);
    } catch (e) {
      console.log(e.response);
    }
  },
  async getExamResults(context) {
    try {
      const res = await customAxios.get(
        `operation/result/filter/?user_id=${context.state.userId}`
      );
      context.commit("getExamResults", res);
      // console.log(this.examResults);
    } catch (e) {
      console.log(e.response);
    }
  },
  getDuration(context, payload) {
    context.commit("getDuration", payload);
  },
  changeDuration(context, payload) {
    context.commit("changeDuration", payload);
  },
  resetDuration(context, payload) {
    context.commit("resetDuration", payload);
  },
  // questions
  async getQuestions(context) {
    try {
      const res = await customAxios.get("main/question/get/");
      // console.log(res);
      context.commit("getQuestions", res);
    } catch (e) {
      console.log(e.response);
    }
  },
  async getVariants(context) {
    try {
      const res = await customAxios.get("main/variant/");
      // console.log(res);
      context.commit("getVariants", res);
    } catch (e) {
      console.log(e.response);
    }
  },
  // answers
  async getAnswers(context) {
    try {
      const res = await customAxios.get("main/answer/");
      // console.log(res);
      context.commit("getAnswers", res);
    } catch (e) {
      console.log(e.response);
    }
  },
  // modules
  async getModules(context) {
    try {
      const res = await customAxios.get("main/module/");
      // console.log(res);
      context.commit("getModules", res);
    } catch (e) {
      console.log(e.response.data);
    }
  },
  //get Groups
  async getGroups(context) {
    try {
      const res = await customAxios.get("main/group/");
      // console.log(res);
      context.commit("getGroups", res);
    } catch (e) {
      if (e.response.data === 401) location.reload();
    }
  },
  async getOperationDetails(context, payload) {
    try {
      const res = await customAxios.get(
        "operation/result/filter/?exam_id=" + payload
      );
      // console.log(res);
      context.commit("getOperationDetails", res);
    } catch (e) {
      console.log(e.response);
    }
  },
  setAuth(context) {
    context.commit("setAuth");
  },
  logout(context) {
    context.commit("logout");
  },
};
