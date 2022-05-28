<template>
  <div v-if="questions.length" class="quiz">
    <template v-if="questions.length">
      <base-timer
        :limit="savedTime || changedDuration"
        @lessTime="warnUser"
        @submitData="submitAnswers"
        @trackDuration="saveDuration"
      ></base-timer>
    </template>
    <form @submit.prevent id="quiz-form">
      <div class="quize">
        <div class="question-bar">
          <!-- {{ savedTime }}
          <hr />
          {{ changedDuration }} -->
          <template v-for="(q, idx) in questions" :key="q.id">
            <take-exam-each-question
              :question="q"
              :index="idx"
              @getAnswer="getAns"
            ></take-exam-each-question>
          </template>
          <div class="footer-button">
            <button @click="cancelExam" class="btn btn-outline-danger">
              Bekor qilish
            </button>
            <button
              @click="submitAnswers"
              type="button"
              class="btn btn-success mx-sm-3 mx-1"
            >
              Yuborish
            </button>
          </div>
        </div>
      </div>
    </form>
    <div v-if="lessTime" class="less" :style="location">
      Imtihonni yakunlash uchun 5 daqiqadan kamroq vaqtingiz qoldi!
    </div>
  </div>
</template>

<script>
import customAxios from "../../api";
import TakeExamEachQuestion from "./TakeExamEachQuestion.vue";
import BaseTimer from "./BaseTimer.vue";

export default {
  props: ["id", "duration", "examId", "groupId"],
  components: {
    TakeExamEachQuestion,
    BaseTimer,
  },
  data() {
    return {
      location: {
        top: 0,
      },
      lessTime: false,
      tutorials: "",
      questions: [],
      answers: [],
      isSubmitted: false,
    };
  },
  computed: {
    savedTime() {
      return this.$store.state.savedTime;
    },
    changedDuration() {
      return this.$store.getters.duration;
      // return 6;
    },
  },
  methods: {
    cancelExam() {
      if (confirm("Siz rostan ham imtihonni bekor qilmoqchimisz?")) {
        this.submitAnswers();
      }
    },
    saveDuration(val) {
      this.$store.dispatch("changeDuration", val);
    },
    warnUser() {
      this.lessTime = true;
    },
    getAns(val) {
      const i = this.answers.findIndex(
        (object) => object.question === val.question
      );
      if (i > -1) this.answers[i] = val;
      else this.answers.push(val);
    },
    async submitAnswers() {
      try {
        // this.$Progress.start();
        this.isSubmitted = true;
        await customAxios.post("operation/result/post/", [
          {
            group: parseInt(this.groupId),
            user: this.$store.state.userId,
            exam: parseInt(this.examId),
            variant: parseInt(this.id),
            operationitem: this.answers,
            // description: "desc",
          },
        ]);
        // await this.$store.dispatch("getExamResults");

        // this.$Progress.finish();
        this.$router.replace("/");
      } catch (e) {
        console.log(e.response.message);
        // this.$Progress.fail();
      }
    },
    async getQuestionsByVariantId() {
      try {
        const res = await customAxios.get(
          `main/question/get_list/?variant_id=${this.id}`
        );
        this.questions = res.data;
      } catch (e) {
        console.log(e.response);
      }
    },
  },
  async created() {
    // this.$store.dispatch("getDuration", parseInt(this.duration) * 60);
    this.$store.dispatch("getDuration", this.duration);
    await this.getQuestionsByVariantId();
  },
  watch: {
    lessTime() {
      this.location.top =
        Math.floor(window.pageYOffset || document.documentElement.scrollTop) +
        250 +
        "px";
      setTimeout(() => (this.lessTime = false), 4000);
    },
  },
  beforeRouteLeave(to, from, next) {
    if (to.path === "/" && !this.isSubmitted) {
      next(false);
    } else {
      next();
    }
  },
  async beforeUnmount() {
    this.$store.dispatch("resetDuration");
    // console.log(this.isSubmitted);
    if (this.isSubmitted) return;
    await this.submitAnswers();
  },
};
</script>

<style scoped>
.less {
  position: absolute;
  width: 90%;
  left: 50%;
  transform: translateX(-50%);
  padding: 1rem;
  background: orange;
  border-radius: 5px;
  font-size: 20px;
  text-align: center;
  z-index: 10;
}
.quiz {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 20px;
  font-size: 14px;
  font-family: Helvetica;
  background: #efeeff;
  z-index: 100;
}
.score-color--white {
  background: #fff;
}
.quize {
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  padding: 40px;
  background: #ffffff;
  border-radius: 10px;
}

ul {
  margin: 0;
  list-style: none;
  color: #7c79c7;
  border: 1px solid #efeeff;
  padding: 20px;
  border-radius: 10px;
  background: #fcfcff;
}

.footer-button {
  margin-top: 20px;
}
@media screen and (max-width: 768px) {
  .quize {
    padding: 20px;
  }
}
/* svg {
  fill: #fff;
  height: 9px;
  margin-right: 6px;
} */
</style>
