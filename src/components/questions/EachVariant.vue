<template>
  <!-- {{ variant }} -->
  <td class="field-answer">
    <!-- {{ questions }} -->
    <!-- {{ variant }} -->
    <textarea
      v-model.lazy="variantName"
      :class="[
        'form-control border',
        isEmpty && !variantName ? 'border-danger' : '',
        isBlank && !variantName ? 'border-danger' : '',
      ]"
      placeholder="Savolning variantlari bo'lishi shart!"
    ></textarea>
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
      v-model.lazy="variantBall"
      type="number"
      :class="[
        'form-control border',
        isEmpty && !variantBall ? 'border-danger' : '',
        isBlank && status == 'Correct' && variantBall == 0
          ? 'border-danger'
          : '',
      ]"
    />
    <div class="help-block text-danger"></div>
  </td>

  <td class="delete">
    <button
      type="button"
      @click="deleting({ id: variant.id, idx: idx })"
      class="btn btn-danger"
    >
      O'chirish
    </button>
  </td>
  <div v-if="isCorrectEmpty" class="correct">
    Agar holat to'g'ri bo'lsa, ball 0 dan katta bo'lishi lozim!
  </div>
</template>

<script>
export default {
  props: ["variant", "idx", "isBlank", "isCorrectEmpty"],
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
    deleting(val) {
      this.$emit("deleteTr", val);
    },
  },
  // created() {
  //   this.variantName = this.variant.name;
  //   this.variantBall = this.variant.ball;
  //   this.status = this.variant.status;
  // },
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
        id: this.variant.id,
        name: newVal,
        ball: this.variantBall,
        status: this.status,
      });
    },
    variantBall(newVal) {
      if (this.variantName.length === 0) {
        this.isEmpty = true;
        return;
      }
      if (newVal == 0 && this.status == "Correct") {
        return;
      }
      this.isEmpty = false;
      this.$emit("updateVariants", {
        id: this.variant.id,
        name: this.variantName,
        ball: newVal,
        status: this.status,
      });
    },
    status(newVal) {
      this.isEmpty = false;
      this.$emit("updateVariants", {
        id: this.variant.id,
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
.red-border {
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset,
    0 0 8px rgba(239, 104, 104, 1);
  /* outline: none; */
}
.border-danger::placeholder {
  color: #dc3545;
}
.correct {
  position: absolute;
  top: 55%;
  left: 25%;
  background: #ffc107;
  border-radius: 0.25rem;
  padding: 1rem 2rem;
  animation: fade 2.5s forwards;
  pointer-events: none;
}
@keyframes fade {
  0% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
