<template>
  <!-- {{ variant }} -->
  <td class="field-answer">
    <!-- {{ questions }} -->
    <!-- {{ variant }} -->
    <textarea v-model="variantName" class="form-control"></textarea>
    <div class="help-block text-red"></div>
  </td>

  <td class="field-status">
    <select v-model="status" class="form-select">
      <option value="Correct">Correct</option>

      <option value="Mistake">Mistake</option>
    </select>
    <div class="help-block text-red"></div>
  </td>

  <td class="field-ball">
    <input
      v-model="variantBall"
      type="text"
      class="form-control"
      maxlength="150"
    />
    <div class="help-block text-red"></div>
  </td>

  <td class="delete">
    <button
      type="button"
      @click="$emit('deleteTr', variant.id)"
      class="btn btn-danger"
    >
      O'chirish
    </button>
  </td>
</template>

<script>
export default {
  props: ["variant"],
  emits: ["deleteTr"],
  data() {
    return {
      variantName: "",
      variantBall: "",
      status: "",
    };
  },
  //   computed: {
  //     questions() {
  //       return this.$store.getters.questions.map((question) => question.variants);
  //     },
  //   },
  created() {
    // this.$store.dispatch("getQuestions");
    this.variantName = this.variant.name;
    this.variantBall = this.variant.ball;
    this.status = this.variant.status;
  },
  watch: {
    variant(newObj) {
      this.variantName = newObj.name;
      this.variantBall = newObj.ball;
      this.status = newObj.status;
    },
  },
};
</script>

<style scoped></style>
