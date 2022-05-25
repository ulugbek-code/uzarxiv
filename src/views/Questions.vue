<template>
  <div class="container-fluid app-wrapper">
    <div class="content-wrapper">
      <div class="content-header">
        <div class="container-fluid">
          <div class="row mb-1">
            <div class="col-sm-3 mt-2">
              <h1 class="m-0 fw-normal">Savollar</h1>
            </div>
            <div class="col-sm-9 mt-4">
              <ol class="breadcrumb float-end">
                <li class="breadcrumb-item">
                  <router-link to="/">Bosh sahifa</router-link>
                </li>
                <li class="breadcrumb-item active">Imtihonlar</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <!-- {{ filterByVariant }} -->
      <div class="content">
        <div class="container-fluid">
          <section id="content" class="content">
            <div class="row">
              <div class="col-12">
                <div class="card card-primary card-outline">
                  <div class="card-header mt-2">
                    <h4 class="col-md-5 card-title fw-normal">
                      O'zgartirish uchun savolni tanlang
                    </h4>
                    <div
                      v-if="categories.length"
                      class="col-md-3 col-sm-6 col-6"
                    >
                      <base-dropdown
                        :options="categories"
                        :withObj="true"
                        :default="categories[0].name"
                        @input="getCategoryChanges"
                      ></base-dropdown>
                    </div>
                    <div class="col-md-3 col-sm-6 col-6">
                      <base-dropdown
                        v-if="variants.length"
                        :options="variants"
                        :withObj="true"
                        :default="variants[0].name"
                        @input="getVariantChanges"
                      ></base-dropdown>
                    </div>
                  </div>
                  <div class="card-body">
                    <!-- <form> -->
                    <div id="content-main">
                      <div class="module filtered" id="changelist">
                        <div class="row">
                          <div class="col-lg-12">
                            <div class="row">
                              <div class="col-md-4">
                                <div class="actions">
                                  <div class="input-group mb-3">
                                    <input
                                      v-model.trim="search"
                                      type="text"
                                      class="form-control"
                                      placeholder="Qidiruv..."
                                    />
                                    <span class="input-group-text">
                                      <fa
                                        class="text-secondary"
                                        :icon="['fas', 'search']"
                                    /></span>
                                  </div>
                                </div>
                              </div>
                              <div class="col-md-8 mb-2">
                                <router-link
                                  to="/questions/add"
                                  class="btn btn-outline-success float-end"
                                >
                                  <fa :icon="['fas', 'plus-circle']" />
                                  Savol qo'shish
                                </router-link>
                              </div>
                            </div>
                            <div class="card">
                              <div class="card-body table-responsive p-0">
                                <table
                                  id="result_list"
                                  class="table table-hover text-center"
                                >
                                  <thead>
                                    <tr>
                                      <th class="sorting" tabindex="0">
                                        <div class="text">
                                          <a>Savollar</a>
                                        </div>
                                      </th>
                                      <th class="sorting">Kategoriya nomi</th>
                                      <th class="sorting">Variant nomi</th>
                                      <th></th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr
                                      @click="toEachQuestion(q.id)"
                                      v-for="q in filteredQuestions"
                                      :key="q.id"
                                    >
                                      <td width="50%" class="text-start">
                                        {{ q.name }}
                                      </td>
                                      <td>{{ q.module_name }}</td>
                                      <td>{{ q.variant_name }}</td>
                                      <td @click.stop="removeQuestion(q.id)">
                                        <button class="btn btn-danger">
                                          O'chirish
                                        </button>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="row mt-2">
                          <div class="col-5">
                            <div class="dataTables_info">
                              {{ filteredQuestions.length }} ta savollar
                            </div>
                          </div>

                          <div class="col-7">
                            <ul
                              class="pagination pagination-sm m-0 float-right"
                            ></ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- </form> -->
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import costumAxios from "../api";
export default {
  data() {
    return {
      search: "",
      categoryId: null,
      filterByVariant: null,
    };
  },
  computed: {
    questions() {
      return this.$store.getters.questions;
    },
    categories() {
      return this.$store.getters.modules;
    },
    originVariants() {
      return this.$store.getters.variants;
    },
    variants() {
      return this.$store.getters.variants.filter(
        (variant) => variant.module === this.categoryId
      );
    },
    chosenQuestionsByVariant() {
      return this.questions.filter(
        (question) => question.variant_id === this.filterByVariant
      );
    },
    filteredQuestions() {
      return this.chosenQuestionsByVariant.filter((question) => {
        return question.name.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },
  methods: {
    toEachQuestion(categoryId) {
      this.$router.push({ name: "question", params: { id: categoryId } });
    },
    getCategoryChanges(val) {
      if (typeof val === "string") {
        this.categoryId = this.categories[1].id;
      } else {
        this.categoryId = val.id;
      }
    },
    getVariantChanges(val) {
      if (typeof val === "string") {
        this.filterByVariant = this.variants[0].id;
      } else {
        this.filterByVariant = val.id;
      }
    },
    async removeQuestion(id) {
      if (confirm("Haqiqatan ham o'chirishni xohlaysizmi")) {
        await costumAxios.get(`main/question/delete_question/?id=${id}`);
        await this.$store.dispatch("getQuestions");
      }
    },
  },
  async created() {
    this.$Progress.start();
    if (!this.categories.length) {
      await this.$store.dispatch("getModules");
    }
    if (!this.originVariants.length) {
      await this.$store.dispatch("getVariants");
    }
    if (!this.questions.length) {
      await this.$store.dispatch("getQuestions");
    }
  },
  mounted() {
    this.$Progress.finish();
  },
};
</script>

<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  background-color: transparent;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  /* padding: 0.75rem 1.25rem; */
  position: relative;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}
form {
  display: flex;
  align-items: center;
}
.card-primary.card-outline {
  border-top: 3px solid #007bff;
}
.card-body {
  -webkit-flex: 1 1 auto;
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1.25rem;
}
tr {
  cursor: pointer;
}
/* .table td.action-checkbox,
.djn-checkbox-select-all {
  width: 45px;
  padding-left: 1.5rem;
} */
</style>
