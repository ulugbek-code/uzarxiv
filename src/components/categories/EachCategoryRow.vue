<template>
  <div
    @click.stop="isVariantsOpen = !isVariantsOpen"
    class="first-row"
    :class="isVariantsOpen ? 'contrast-bg' : ''"
  >
    <p v-if="isLabel">
      <fa
        :class="{ spin: isVariantsOpen }"
        class="toggle mx-2"
        :icon="['fas', 'angle-down']"
      />
      {{ cat.name }}
    </p>
    <div @click.stop="" v-if="!isLabel">
      <input
        v-model="labelName"
        class="form-control"
        type="text"
        placeholder="To'ldirish shart!"
      />
    </div>
    <div @click.stop="" v-if="!isLabel">
      <input
        v-model="abbName"
        class="form-control"
        type="text"
        placeholder="To'ldirish shart!"
      />
    </div>
    <p v-if="isLabel">{{ cat.AT }}</p>
    <p>{{ cat.no_1 }}</p>
    <p>{{ cat.no_2 }}</p>
    <div v-if="isLabel" @click.stop="" class="actions mb-1">
      <button @click="changeCategory" class="btn btn-warning">
        <fa class="text-light" :icon="['fas', 'pencil']" />
      </button>
      <button @click="$emit('deleteCat', cat.id)" class="btn btn-danger mx-2">
        <fa class="text-light" :icon="['fas', 'trash-alt']" />
      </button>
    </div>
    <div v-else @click.stop="" class="actions mb-1">
      <button @click="updateCategory" class="btn btn-success">
        <fa class="text-light" :icon="['fas', 'circle-check']" />
      </button>
      <button @click="isLabel = true" class="btn btn-danger mx-2">
        <fa class="text-light" :icon="['fas', 'circle-xmark']" />
      </button>
    </div>
  </div>
  <template v-if="isVariantsOpen">
    <div :class="isVariantsOpen ? 'contrast-bg' : ''">
      <div class="second-row">
        <p class="bolder">Variant nomi</p>
        <p class="bolder p-left">Izoh</p>
        <p></p>
      </div>
      <template v-for="v in getVariants" :key="v.id">
        <each-variant-of-category
          :v="v"
          :moduleId="cat.id"
        ></each-variant-of-category>
      </template>
      <div v-if="isAddVariantOpened" class="second-row">
        <input
          v-model="newVariantName"
          class="form-control mx-2 mb-1"
          :class="isVariantNameEmpty ? 'border border-danger' : ''"
          type="text"
          placeholder="To'ldirish shart!"
        />
        <input
          v-model="newVariantDesc"
          class="form-control mx-2 mb-1"
          type="text"
          placeholder="Majburiy emas..."
        />
        <div class="actions mb-1">
          <button @click="createVariant" class="btn btn-success">
            <fa class="text-light" :icon="['fas', 'circle-check']" />
          </button>
          <button @click="resetNewVariant" class="btn btn-danger mx-2">
            <fa class="text-light" :icon="['fas', 'circle-xmark']" />
          </button>
        </div>
      </div>
      <button
        v-if="!isAddVariantOpened"
        @click="isAddVariantOpened = true"
        class="btn btn-primary float-end my-1 mx-2"
      >
        Variant qo'shish
        <fa class="fas fa-edit" :icon="['fas', 'turn-up']" />
      </button>
      <button
        v-else
        @click="denyCreating"
        class="btn btn-danger float-end my-2 mx-2"
      >
        Bekor qilish
      </button>
    </div>
  </template>
</template>

<script>
import customAxios from "../../api";
import EachVariantOfCategory from "./EachVariantOfCategory.vue";
export default {
  props: ["cat"],
  emits: ["deleteCat"],
  components: {
    EachVariantOfCategory,
  },
  data() {
    return {
      isVariantNameEmpty: false,
      isVariantsOpen: false,
      isAddVariantOpened: false,
      isLabel: true,
      labelName: this.cat.name,
      abbName: this.cat.AT,
      newVariantName: "",
      newVariantDesc: "",
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
    resetNewVariant() {
      this.newVariantName = "";
      this.newVariantDesc = "";
      this.isAddVariantOpened = false;
    },
    denyCreating() {
      this.isAddVariantOpened = false;
      this.resetNewVariant();
    },
    async createVariant() {
      if (!this.newVariantName) {
        this.isVariantNameEmpty = true;
        return;
      }
      await customAxios.post("main/variant/", {
        name: this.newVariantName,
        module: this.cat.id,
        description: this.newVariantDesc,
      });
      await this.$store.dispatch("getVariants");
      this.resetNewVariant();
      this.isAddVariantOpened = false;
    },
    changeCategory() {
      this.isLabel = !this.isLabel;
    },
    async updateCategory() {
      if (!this.labelName || !this.abbName) return;
      await customAxios.patch(`main/module/${this.cat.id}/`, {
        name: this.labelName,
        AT: this.abbName,
        no_1: this.cat.no_1,
        no_2: this.cat.no_2,
      });
      await this.$store.dispatch("getModules");
      this.isLabel = true;
    },
  },
  watch: {
    isVariantNameEmpty() {
      setTimeout(() => (this.isVariantNameEmpty = false), 2000);
    },
  },
  // created() {
  //   this.$store.dispatch("getVariants");
  // },
};
</script>

<style scoped>
.contrast-bg {
  background: rgba(184, 186, 189, 0.2);
  border: 1px solid #b8babd;
  border-bottom: none;
}
.first-row {
  width: 100%;
  display: flex;
  padding: 8px;
  /* margin-bottom: 4px; */
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  cursor: pointer;
}
.second-row {
  width: 100%;
  display: flex;
  font-size: 14px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.second-row:first-child {
  border-bottom: 1px solid #444;
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
/* .second-row p, */
/* .second-row div, */
.first-row div {
  width: 20%;
  /* flex: 1; */
}
.second-row input,
.second-row div {
  width: 30%;
}
.second-row p {
  width: 33%;
}
.first-row p:first-child,
.first-row p:nth-child(2),
.first-row div:first-child,
.first-row div:nth-child(2) {
  width: 40%;
  /* flex: 2; */
}
.first-row p:not(:first-child),
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
.actions {
  display: flex;
  justify-content: flex-end;
}
.p-left {
  padding-left: 24px !important;
}
input.border::placeholder {
  color: #dc3545;
}
</style>
