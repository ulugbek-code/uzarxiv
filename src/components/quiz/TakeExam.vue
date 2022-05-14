<template>
  <div class="quiz">
    <!-- {{ questions[1] }} -->
    <form id="quiz-form">
      <div class="row">
        <h1 class="col text-center" id="timer-box"></h1>
      </div>
      <div class="quize">
        <div class="question-bar">
          <template v-for="(question, idx) in questions" :key="question.id">
            <h2 class="question text-primary">
              {{ ++idx }}&#41; {{ question.name }}
            </h2>
            <ul v-for="variant in question.variants" :key="variant.id">
              <take-exam-variants :variant="variant"></take-exam-variants>
            </ul>
          </template>

          <!-- <ul>
            <li>
              <input type="radio" id="a144" />
              <label for="a144"
                >Информацию об исполнении законов Республики Узбекистан, указов,
                постановлений и распоряжений Президента Постановлений и
                распоряжений правительства</label
              >
            </li>
          </ul> -->

          <div class="footer-button">
            <!-- Button trigger modal -->

            <router-link to="/" class="btn btn-outline-danger">
              Bekor qilish
            </router-link>
            <button type="button" class="btn btn-success mx-3">Yuborish</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import customAxios from "../../api";
import TakeExamVariants from "./TakeExamVariants.vue";

export default {
  props: ["id", "duration"],
  components: {
    TakeExamVariants,
  },
  data() {
    return {
      tutorials: "",
      questions: [],
    };
  },
  methods: {
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
    await this.getQuestionsByVariantId();
  },
};
</script>

<style scoped>
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

h2 {
  font-size: 20px;
  margin: 0;
  margin-top: 25px;
  padding-bottom: 30px;
  /* color: #0b03fc; */
}

/* h3 {
  color: #0b03fc;
  font-size: 25px;
  padding-bottom: 20px;
  margin: 0;
} */

.quize {
  max-width: 1100px;
  width: 100%;
  margin: 50px auto;
  padding: 50px;
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

svg {
  fill: #fff;
  height: 9px;
  margin-right: 6px;
}
</style>
