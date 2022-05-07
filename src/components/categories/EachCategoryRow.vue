<template>
  <td class="field-subject">
    <p v-if="isLabel">{{ cat.name }}</p>
    <div v-else>
      <input v-model="labelName" class="form-control" type="text" />
      <button class="btn btn-primary mx-2 mb-1">Jo'natish</button>
    </div>
    <div class="float-end">
      <button @click="changeCategory" class="btn btn-warning mx-2">
        <fa class="text-light" :icon="['fas', 'pencil']" />
      </button>
      <button class="btn btn-danger">
        <fa class="text-light" :icon="['fas', 'trash-alt']" />
      </button>
    </div>
  </td>
</template>

<script>
export default {
  props: ["cat"],
  data() {
    return {
      isLabel: true,
      labelName: this.cat.name,
    };
  },
  methods: {
    changeCategory() {
      this.isLabel = !this.isLabel;
    },
  },
};
</script>

<style scoped>
.form-control {
  display: initial;
  width: initial;
}
p,
div {
  display: inline-block;
}
</style>
