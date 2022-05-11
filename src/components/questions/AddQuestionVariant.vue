<template>
  <td class="field-answer">
    <textarea
      v-model.lazy="variantName"
      :class="[
        'form-control',
        isEmpty && !variantName ? 'red-border' : '',
        isBlank && !variantName ? 'red-border' : '',
      ]"
      placeholder="Savolning variantlari bo'lishi shart!"
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
    <input
      v-model.lazy="variantBall"
      type="number"
      :class="[
        'form-control',
        isEmpty && !variantBall ? 'red-border' : '',
        isBlank && status == 'Correct' && variantBall == 0 ? 'red-border' : '',
      ]"
      min="0"
      max="100"
      placeholder="Ball..."
    />
    <div class="help-block text-danger"></div>
  </td>

  <td class="delete">
    <button type="button" @click="deleting(idx)" class="btn btn-danger">
      O'chirish
    </button>
  </td>
  <div v-if="isCorrectEmpty" class="correct">
    Agar holat to'g'ri bo'lsa, ball 0 dan katta bo'lishi lozim!
  </div>
</template>

<script>
// validatsiya qivotganda toxtatdm

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
  computed: {
    changedVal() {
      return this.status === "Correct" && this.variantBall == 0;
    },
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
      if (newVal == 0 && this.status == "Correct") {
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
      // if (this.status.length === 0) {
      //   this.isEmpty = true;
      //   return;
      // }
      // if (newVal == "Correct" && this.variantBall == 0) {
      //   return;
      // }
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
.red-border {
  border-color: rgba(239, 104, 104, 0.1);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset,
    0 0 8px rgba(239, 104, 104, 1);
  /* outline: none; */
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
