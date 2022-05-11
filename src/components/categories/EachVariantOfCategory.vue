<template>
  <div class="second-row">
    <p v-if="isVariant">{{ v.name }}</p>
    <p v-if="isVariant">
      {{ v.description ? v.description : "No description" }}
    </p>
    <div @click.stop="" v-if="!isVariant" class="mx-1">
      <input
        v-model="variantName"
        class="form-control"
        type="text"
        placeholder="To'ldirish shart!"
      />
    </div>
    <div @click.stop="" v-if="!isVariant">
      <input
        v-model="variantDesc"
        class="form-control"
        type="text"
        placeholder="Majburiy emas..."
      />
    </div>
    <div v-if="isVariant" @click.stop="" class="actions mb-1">
      <button @click="changeVariant" class="btn btn-warning">
        <fa class="text-light" :icon="['fas', 'pencil']" />
      </button>
      <button @click="removeVariant(v.id)" class="btn btn-danger mx-2">
        <fa class="text-light" :icon="['fas', 'trash-alt']" />
      </button>
    </div>
    <div v-else @click.stop="" class="actions mb-1">
      <button @click="updateVariant(v.id)" class="btn btn-success">
        <fa class="text-light" :icon="['fas', 'circle-check']" />
      </button>
      <button @click="isVariant = true" class="btn btn-danger mx-2">
        <fa class="text-light" :icon="['fas', 'circle-xmark']" />
      </button>
    </div>
  </div>
</template>

<script>
import customAxios from "../../api";

export default {
  props: ["v"],
  data() {
    return {
      isVariant: true,
      variantName: this.v.name,
      variantDesc: this.v.description,
    };
  },
  methods: {
    changeVariant() {
      this.isVariant = !this.isVariant;
    },
    async updateVariant(id) {
      if (!this.variantName) return;
      await customAxios.patch(`main/variant/${id}/`, {
        name: this.variantName,
        module: id,
        description: this.variantDesc ? this.variantDesc : "",
      });
      await this.$store.dispatch("getVariants");
      this.isVariant = true;
    },
    async removeVariant(id) {
      if (confirm("Haqiqatan ham o'chirmoqchimisiz")) {
        await customAxios.delete(`main/variant/${id}/`);
        await this.$store.dispatch("getVariants");
      }
    },
  },
};
</script>

<style scoped>
.second-row {
  width: 100%;
  display: flex;
  margin-bottom: 4px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.bolder {
  font-weight: 500;
}
.actions {
  display: flex;
  justify-content: flex-end;
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
.first-row p:first-child,
.first-row div:first-child,
.first-row div:nth-child(2) {
  flex: 2;
}
.first-row p:not(:first-child),
.second-row p {
  padding-left: 1rem;
}
</style>
