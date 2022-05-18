<template>
  <h2 class="question text-primary">{{ idx }}&#41; {{ question.name }}</h2>
  <ul
    v-for="variant in question.variants"
    :key="variant.id"
    :class="[
      variant.status === 'Correct' ? 'green-ans' : '',
      variant.id == correctAnswer && variant.status === 'Mistake'
        ? 'red-ans'
        : '',
      variant.id == correctAnswer && variant.status === 'Correct'
        ? 'green-ans'
        : '',
    ]"
  >
    <li>
      <!-- {{ variant }} -->
      <input type="radio" :checked="variant.id == correctAnswer" />
      <label>{{ variant.name }}</label>
      <!-- <hr />
      {{ correctAnswer }} -->
    </li>
  </ul>
</template>

<script>
export default {
  props: ["question", "index", "answer"],
  data() {
    return {
      value: "",
    };
  },
  computed: {
    idx() {
      return this.index + 1;
    },
    correctAnswer() {
      let foundQuestion = this.answer.find(
        (a) => a.question == this.question.id
      );
      if (foundQuestion) return foundQuestion.answer;
      return null;
    },
  },
};
</script>

<style scoped>
.correct-ans {
  background: #ffc107;
}
.green-ans {
  background: #198754;
  color: #fff;
}
.red-ans {
  background: #dc3545;
  color: #fff;
}
h2 {
  font-size: 20px;
  margin: 0;
  margin-top: 25px;
  padding-bottom: 30px;
}
ul {
  margin: 5px 0;
  list-style: none;
  color: #7c79c7;
  border: 1px solid #efeeff;
  padding: 20px;
  border-radius: 10px;
  background: #fcfcff;
}
ul li + li {
  margin-top: 16px;
  border-top: 1px solid #efeeff;
  padding-top: 16px;
}

ul li input[type="radio"] {
  display: none;
}

ul li input[type="radio"] + label {
  position: relative;
  padding-left: 25px;
}

ul li input[type="radio"] + label::before {
  content: "";
  position: absolute;
  left: 0;
  background: #e0dcdc;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  top: 1px;
  border: 1px solid #7c79c7;
}

ul li input[type="radio"]:checked + label::before {
  content: "";
  background: #0d6efd;
  border-color: #0d6efd;
}

ul li input[type="radio"]:checked + label::after {
  content: "";
  position: absolute;
  left: 4.5px;
  top: 5px;
  height: 7px;
  width: 7px;
  background: #fff;
  border-radius: 50%;
}

label {
  font-size: 15px;
  /* cursor: pointer; */
}
</style>
