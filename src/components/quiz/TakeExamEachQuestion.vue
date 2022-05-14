<template>
  <h2 class="question text-primary">{{ idx }}&#41; {{ question.name }}</h2>
  <ul v-for="variant in question.variants" :key="variant.id">
    <li>
      <input
        @change="$emit('getAnswer', { question: question.id, answer: value })"
        :value="variant.id"
        v-model="value"
        type="radio"
        :id="variant.id"
      />
      <label :for="variant.id">{{ variant.name }}</label>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["question", "index"],
  emits: ["getAnswer"],
  data() {
    return {
      value: "",
    };
  },
  computed: {
    idx() {
      return this.index + 1;
    },
  },
};
</script>

<style scoped>
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
  background: #ffffff;
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
  cursor: pointer;
}
</style>
