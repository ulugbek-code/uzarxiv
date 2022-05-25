<template>
  <div class="container-fluid app-wrapper">
    <div class="content-wrapper">
      <div class="content-header">
        <div class="container-fluid">
          <div class="row mb-1">
            <div class="col-sm-3 mt-2">
              <h1 class="m-0 fw-normal">Kategoriyalar</h1>
            </div>
            <div class="col-sm-9 mt-4">
              <ol class="breadcrumb float-end">
                <li class="breadcrumb-item">
                  <router-link to="/">Bosh sahifa</router-link>
                </li>
                <li class="breadcrumb-item active">Kategoriyalar</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div class="content">
        <div class="container-fluid">
          <section id="content" class="content">
            <div class="row">
              <div class="col-12">
                <div class="card card-primary card-outline">
                  <div class="card-header mt-2">
                    <h4 class="card-title fw-normal">
                      O'zgartirish uchun kategoriyani tanlang
                    </h4>
                  </div>
                  <!-- {{ filteredCategories }} -->
                  <div class="card-body">
                    <!-- <form> -->
                    <div id="content-main">
                      <div class="module filtered">
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
                              <div class="col-md-8">
                                <button
                                  v-if="!isFormOpened"
                                  @click="addCategory"
                                  class="btn btn-outline-success float-end"
                                >
                                  <fa :icon="['fas', 'plus-circle']" />
                                  <a href="#add-category" class="add-cat">
                                    Kategoriya qo'shish</a
                                  >
                                </button>
                                <button
                                  v-else
                                  @click="denyCreatingNewCategory"
                                  class="btn btn-outline-danger float-end"
                                >
                                  <fa :icon="['fas', 'circle-xmark']" />
                                  Bekor qilish
                                </button>
                              </div>
                            </div>
                            <div class="card my-3 table-responsive">
                              <div class="custom-table">
                                <div class="first-row">
                                  <p>Kategoriyalar</p>
                                  <p>Qisqartma</p>
                                  <p class="left-p">No 1</p>
                                  <p class="left-p">No 2</p>
                                  <p></p>
                                </div>
                                <template
                                  v-for="cat in filteredCategories"
                                  :key="cat.id"
                                >
                                  <each-category-row
                                    :cat="cat"
                                    @deleteCat="removeCategory"
                                  ></each-category-row>
                                </template>
                                <div
                                  v-if="isFormOpened"
                                  @click="resetCategoryEmpty"
                                  id="add-category"
                                  class="third-row my-1"
                                >
                                  <input
                                    v-model="categoryName"
                                    @blur="isCategoryEmpty = false"
                                    class="form-control"
                                    :class="
                                      isCategoryEmpty && !categoryName
                                        ? 'border border-danger'
                                        : ''
                                    "
                                    type="text"
                                    placeholder="Kategoriya nomi*"
                                  />
                                  <input
                                    v-model="categoryAbb"
                                    class="form-control"
                                    :class="
                                      isCategoryEmpty && !categoryAbb
                                        ? 'border border-danger'
                                        : ''
                                    "
                                    type="text"
                                    placeholder="Kategoriya qisqartmasi*"
                                  />
                                  <input
                                    v-model.number="categoryNo1"
                                    class="form-control"
                                    :class="
                                      isCategoryEmpty && !categoryNo1
                                        ? 'border border-danger'
                                        : ''
                                    "
                                    type="number"
                                    placeholder="Nomer 1*"
                                  />
                                  <input
                                    v-model.number="categoryNo2"
                                    class="form-control"
                                    :class="
                                      isCategoryEmpty && !categoryNo2
                                        ? 'border border-danger'
                                        : ''
                                    "
                                    type="number"
                                    placeholder="Nomer 2*"
                                  />
                                  <div class="actions">
                                    <button
                                      @click.stop="createCategory"
                                      class="btn btn-success"
                                    >
                                      <fa
                                        class="text-light"
                                        :icon="['fas', 'circle-check']"
                                      />
                                    </button>
                                    <button
                                      @click.stop="resetCategory"
                                      class="btn btn-danger mx-2"
                                    >
                                      <fa
                                        class="text-light"
                                        :icon="['fas', 'circle-xmark']"
                                      />
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="row mt-2">
                          <div class="col-5">
                            <div
                              class="dataTables_info"
                              role="status"
                              aria-live="polite"
                            >
                              {{ filteredCategories.length }} ta kategoriyalar
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
import customAxios from "../api";
import EachCategoryRow from "../components/categories/EachCategoryRow.vue";
export default {
  components: {
    EachCategoryRow,
  },
  data() {
    return {
      isCategoryEmpty: false,
      isFormOpened: false,
      search: "",
      categoryName: "",
      categoryAbb: "",
      categoryNo1: null,
      categoryNo2: null,
    };
  },
  computed: {
    categories() {
      return this.$store.getters.modules;
    },
    filteredCategories() {
      return this.categories.filter((category) => {
        return category.name.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },
  methods: {
    resetCategoryEmpty() {
      if (this.isCategoryEmpty) this.isCategoryEmpty = false;
    },
    async removeCategory(id) {
      if (confirm("Siz haqiqatan ham o'chirmoqchimisiz?")) {
        await customAxios.delete(`main/module/${id}`);
        await this.$store.dispatch("getModules");
      }
    },
    denyCreatingNewCategory() {
      this.resetCategory();
    },
    resetCategory() {
      this.isCategoryEmpty = false;
      this.isFormOpened = false;
      this.categoryName = "";
      this.categoryAbb = "";
      this.categoryNo1 = "";
      this.categoryNo2 = "";
    },
    addCategory() {
      if (!this.isFormOpened) {
        this.isFormOpened = true;
      }
    },
    async createCategory() {
      if (
        !this.categoryName ||
        !this.categoryAbb ||
        !this.categoryNo1 ||
        !this.categoryNo2
      ) {
        this.isCategoryEmpty = true;
        return;
      }
      await customAxios.post("main/module/", {
        name: this.categoryName,
        AT: this.categoryAbb,
        no_1: this.categoryNo1,
        no_2: this.categoryNo2,
      });
      await this.$store.dispatch("getModules");
      this.resetCategory();
    },
  },
  async created() {
    this.$Progress.start();
    if (!this.categories.length) {
      await this.$store.dispatch("getModules");
    }
    if (!this.$store.state.variants.length) {
      await this.$store.dispatch("getVariants");
    }
  },
  mounted() {
    this.$Progress.finish();
  },
  // watch: {
  //   isCategoryEmpty() {
  //     setTimeout(() => (this.isCategoryEmpty = false), 2000);
  //   },
  // },
};
</script>

<style scoped>
.custom-table {
  transition: all 0.4s ease;
}
.first-row {
  width: 100%;
  display: flex;
  margin-bottom: 4px;
  border-bottom: 2px solid #444;
}
.third-row {
  width: 100%;
  display: flex;
  /* margin-bottom: 4px; */
}
.third-row input {
  margin: 0 4px;
}
.first-row p {
  font-weight: 600;
  /* flex: 1; */
  width: 20%;
  margin: 0;
  padding: 12px;
}
.third-row input,
.third-row div {
  width: 20%;
}
.first-row p:first-child,
.first-row p:nth-child(2),
.third-row input:first-child,
.third-row input:nth-child(2) {
  /* flex: 2; */
  width: 40%;
}
.third-row input {
  width: 20%;
}
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
/* .table td.action-checkbox,
.djn-checkbox-select-all {
  width: 45px;
  padding-left: 1.5rem;
} */
.actions {
  display: flex;
  justify-content: flex-end;
}
.left-p {
  padding-left: 20px !important;
}
.add-cat {
  color: #198754;
}
button:hover .add-cat {
  color: #f8f9fa;
}
input.border::placeholder {
  color: #dc3545;
}
</style>
