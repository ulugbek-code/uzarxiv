<template>
  <div class="container">
    <div class="row d-flex justify-content-center">
      <div class="card col-lg-6 my-3">
        <div class="card-body">
          <h5 class="card-title mb-3 text-primary">Test natijangiz</h5>
          <div class="d-flex ml-4 card-text">
            <div class="col-lg-6">
              <h5>O'quvchi:</h5>
              <h5>Kurs:</h5>
              <h5>To'g'ri javoblar:</h5>
              <h5>Jami ball:</h5>
              <h5>Foiz:</h5>
              <h5 class="fw-bold">Natija:</h5>
            </div>

            <div v-if="Object.keys(allOperation).length" class="col-lg-6 mx-1">
              <p>
                {{ allOperation.user.first_name }}
                {{ allOperation.user.last_name }}
              </p>
              <p>
                {{ allOperation.exam.group.module.name }} -
                {{ allOperation.variant.name }}
              </p>
              <p>{{ allOperation.correct_answer }}</p>
              <p>
                {{ allOperation.total_ball }}/{{ allOperation.total_balls }}
              </p>
              <p>{{ allOperation.percent }}/100 %</p>
              <p
                :class="
                  allOperation.status === 'Passed'
                    ? 'text-success'
                    : 'text-danger'
                "
              >
                {{ allOperation.status }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- quiz -->
    <!-- <div class="quiz"> -->
    <div class="quize">
      <div class="question-bar">
        <template v-for="(q, idx) in answers" :key="q.id">
          <operation-each-question
            :question="q"
            :answer="allOperation.operationitem"
            :index="idx"
          ></operation-each-question>
        </template>
      </div>
    </div>
    <!-- </div> -->
  </div>
  <!-- {{ allOperation.operationitem }} -->
</template>

<script>
import customAxios from "../../api";
import OperationEachQuestion from "./OperationEachQuestion.vue";

export default {
  props: ["id"],
  components: {
    OperationEachQuestion,
  },
  data() {
    return {
      allOperation: {},
      answers: [],
    };
  },
  methods: {
    async getOperation() {
      try {
        const res = await customAxios.get("operation/result/" + this.id + "/");
        this.allOperation = res.data;
      } catch (e) {
        console.log(e.response);
      }
    },
    async getAnswers() {
      try {
        const res = await customAxios.get(
          "operation/result/show_answers/?id=" + this.id
        );
        this.answers = res.data;
      } catch (e) {
        console.log(e.response);
      }
    },
  },
  async created() {
    await this.getOperation();
    await this.getAnswers();
  },
};
</script>

<style scoped>
/* .quiz {
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
} */
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

p {
  margin-bottom: 0.5rem;
}
</style>
