<template>
  <td class="field-answer">
    <textarea
      v-model.lazy="variantName"
      class="form-control"
      placeholder="Variantning savoli bo'lishi shart!"
    ></textarea>
  </td>

  <td class="field-status">
    <select v-model.lazy="status" class="form-select">
      <option value="Correct">Correct</option>

      <option value="Mistake">Mistake</option>
    </select>
    <div class="help-block text-red"></div>
  </td>

  <td class="field-ball">
    <input v-model.lazy="variantBall" type="number" class="form-control" />
    <div class="help-block text-danger"></div>
  </td>

  <td class="delete">
    <button type="button" @click="deleting(idx)" class="btn btn-danger">
      O'chirish
    </button>
  </td>
</template>

<script>
export default {
  props: ["variant", "idx"],
  emits: ["deleteTr", "updateVariants"],
  data() {
    return {
      isEmpty: false,
      variantName: this.variant.name,
      variantBall: this.variant.ball,
      status: this.variant.status,
    };
  },
  methods: {
    deleting(id) {
      this.$emit("deleteTr", id);
    },
  },
  watch: {
    variant(newObj) {
      this.variantName = newObj.name;
      this.variantBall = newObj.ball;
      this.status = newObj.status;
    },
    variantName(newVal) {
      if (newVal.length === 0) {
        this.isEmpty = true;
        return;
      }
      this.isEmpty = false;
      this.$emit("updateVariants", {
        id: this.idx,
        name: newVal,
        ball: this.variantBall,
        status: this.status,
      });
    },
    variantBall(newVal) {
      if (this.variantBall.length === 0) {
        this.isEmpty = true;
        return;
      }
      this.isEmpty = false;
      this.$emit("updateVariants", {
        id: this.idx,
        name: this.variantName,
        ball: newVal,
        status: this.status,
      });
    },
    status(newVal) {
      if (this.status.length === 0) {
        this.isEmpty = true;
        return;
      }
      this.isEmpty = false;
      this.$emit("updateVariants", {
        id: this.idx,
        name: this.variantName,
        status: newVal,
        ball: this.variantBall,
      });
    },
  },
};
</script>

<style scoped>
.field-answer textarea {
  min-height: 100px;
}
.custom-toast {
  left: 12%;
  position: absolute;
}
</style>
