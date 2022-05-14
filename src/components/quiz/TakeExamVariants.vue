<template>
  <li>
    <input :value="variant.id" v-model="value" type="radio" :id="variant.id" />
    <label :for="variant.id">{{ variant.name }}</label>
    {{ value }}
  </li>
</template>

<script>
export default {
  props: ["variant"],
  data() {
    return {
      value: true,
    };
  },
};
</script>

<style scoped>
ul li + li {
  margin-top: 16px;
  border-top: 1px solid #efeeff;
  padding-top: 16px;
}

/* ul li input[type="radio"] {
  display: none;
} */

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
