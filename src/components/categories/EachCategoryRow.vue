<template>
  <div @click="isVariantsOpen = !isVariantsOpen" class="first-row">
    <p v-if="isLabel">
      <fa
        :class="{ spin: isVariantsOpen }"
        class="toggle mx-2"
        :icon="['fas', 'angle-down']"
      />
      {{ cat.name }}
    </p>
    <div v-else>
      <input v-model="labelName" class="form-control" type="text" />
      <button class="btn btn-primary mx-2 mb-1">Jo'natish</button>
    </div>
    <p>{{ cat.AT }}</p>
    <p>{{ cat.no_1 }}</p>
    <p>{{ cat.no_2 }}</p>
    <div class="float-end">
      <button @click="changeCategory" class="btn btn-warning mx-2">
        <fa class="text-light" :icon="['fas', 'pencil']" />
      </button>
      <button @click="$emit('deleteCat', cat.id)" class="btn btn-danger">
        <fa class="text-light" :icon="['fas', 'trash-alt']" />
      </button>
    </div>
  </div>
  <template v-if="isVariantsOpen">
    <div class="w-50">
      <div class="second-row">
        <p class="bolder">Variant nomi</p>
        <p class="bolder">Izoh</p>
        <p></p>
      </div>
      <div v-for="v in getVariants" class="second-row" :key="v.id">
        <p>{{ v.name }}</p>
        <p>{{ v.description ? v.description : "No description" }}</p>
        <div class="float-end">
          <button @click="changeCategory" class="btn btn-warning mx-2">
            <fa class="text-light" :icon="['fas', 'pencil']" />
          </button>
          <button @click="$emit('deleteCat', cat.id)" class="btn btn-danger">
            <fa class="text-light" :icon="['fas', 'trash-alt']" />
          </button>
        </div>
      </div>
      <button class="btn btn-primary float-end">Variant qo'shish</button>
    </div>
  </template>
</template>

<script>
export default {
  props: ["cat"],
  emits: ["deleteCat"],
  data() {
    return {
      isVariantsOpen: false,
      isLabel: true,
      labelName: this.cat.name,
    };
  },
  computed: {
    getVariants() {
      return this.$store.getters.variants.filter(
        (variant) => variant.module === parseInt(this.cat.id)
      );
    },
  },
  methods: {
    changeCategory() {
      this.isLabel = !this.isLabel;
    },
  },
  created() {
    this.$store.dispatch("getVariants");
  },
};
</script>

<style scoped>
.first-row {
  width: 100%;
  display: flex;
  margin-bottom: 4px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  cursor: pointer;
}
.second-row {
  width: 100%;
  display: flex;
  margin-bottom: 4px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.first-row:last-child {
  margin-bottom: 0;
}
.first-row .form-control {
  display: initial;
  width: initial;
}
p {
  margin-top: 8px;
  margin-bottom: 10px;
}
.first-row p,
.second-row p,
.second-row div,
.first-row div {
  flex: 1;
}
.first-row p {
  text-align: center;
}
.second-row p {
  padding-left: 1rem;
}
.toggle {
  color: rgba(68, 68, 68, 0.8);
  transition: all 0.3s ease;
}
.toggle.spin {
  transform: rotate(180deg);
}
.bolder {
  font-weight: 500;
}
/* p,
div {
  display: inline-block;
} */
</style>
