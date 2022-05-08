import customAxios from "../api";
export default {
  // users
  async getUsers(context) {
    try {
      const res = await customAxios.get("main/user/");
      // console.log(res);
      context.commit("getUsers", res);
    } catch (e) {
      console.log(e);
    }
  },
  // exams
  async getExams(context) {
    try {
      const res = await customAxios.get("main/exams/");
      // console.log(res);
      context.commit("getExams", res);
    } catch (e) {
      console.log(e.response);
    }
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
      console.log(res);
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
      console.log(e.response);
    }
  },
  //get Groups
  async getGroups(context) {
    try {
      const res = await customAxios.get("main/group/");
      // console.log(res);
      context.commit("getGroups", res);
    } catch (e) {
      console.log(e.response);
    }
  },
  async getOperationDetails(context, payload) {
    try {
      const res = await customAxios.get(
        "operation/result/filter/?exam_id=" + payload
      );
      console.log(res);
      context.commit("getOperationDetails", res);
    } catch (e) {
      console.log(e.response);
    }
  },
};
