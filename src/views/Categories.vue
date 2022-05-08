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
                  <a href="/admin/">Bosh sahifa</a>
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
                                <a
                                  href="/admin/quizapp/exam/add/"
                                  class="btn btn-outline-success float-end"
                                >
                                  <fa :icon="['fas', 'plus-circle']" />
                                  Kategoriya qo'shish
                                </a>
                              </div>
                            </div>
                            <div class="card my-3 table-responsive">
                              <div class="custom-table">
                                <div class="first-row">
                                  <p>Kategoriyalar</p>
                                  <p>Qisqartma</p>
                                  <p>No 1</p>
                                  <p>No 2</p>
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
      search: "",
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
    async removeCategory(id) {
      if (confirm("Siz haqiqatan ham o'chirmoqchimisiz?")) {
        await customAxios.delete(`main/module/${id}`);
        await this.$store.dispatch("getModules");
      }
    },
  },
  created() {
    this.$store.dispatch("getModules");
  },
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
.first-row p {
  font-weight: 600;
  flex: 1;
  margin: 0;
  padding: 12px;
  text-align: center;
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
.table td.action-checkbox,
.djn-checkbox-select-all {
  width: 45px;
  padding-left: 1.5rem;
}
</style>
