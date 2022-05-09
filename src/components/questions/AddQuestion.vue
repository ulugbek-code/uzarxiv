<template>
  <div class="content-wrapper">
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-1">
          <div class="col-auto col-sm-3 mt-2">
            <h1 class="m-0">Savollar</h1>
          </div>
          <div class="col-auto col-sm-9 mt-4">
            <ol class="breadcrumb float-end">
              <li class="breadcrumb-item">
                <router-link to="/">Bosh sahifa</router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link to="/questions">Savollar</router-link>
              </li>
              <li class="breadcrumb-item active">Savol qo'shish</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="container-fluid">
        <section id="content" class="content">
          <div class="row">
            <div id="content-main" class="col-12">
              <form @submit.prevent="">
                <div class="row">
                  <div class="col-12 col-lg-9">
                    <div class="card card-primary card-outline">
                      <div class="card-header">
                        <div class="card-title">Savol qo'shish</div>
                      </div>
                      <div class="card-body">
                        <div class="form-group field-start_date">
                          <div class="row">
                            <div class="col-12">
                              <ul
                                class="nav nav-tabs"
                                id="myTab"
                                role="tablist"
                              >
                                <li class="nav-item" role="presentation">
                                  <button
                                    class="nav-link active"
                                    id="home-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#home"
                                    type="button"
                                    role="tab"
                                  >
                                    Umumiy
                                  </button>
                                </li>
                                <li class="nav-item" role="presentation">
                                  <button
                                    class="nav-link"
                                    id="profile-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#profile"
                                    type="button"
                                    role="tab"
                                  >
                                    Variantlar
                                  </button>
                                </li>
                              </ul>
                              <div class="tab-content" id="myTabContent">
                                <div
                                  class="tab-pane fade show active"
                                  id="home"
                                  role="tabpanel"
                                >
                                  <div class="field-subject mt-4 mx-4">
                                    <div class="row">
                                      <label
                                        class="col-sm-3 text-left"
                                        for="id_subject"
                                      >
                                        Kategoriyalar

                                        <span class="text-red">* </span>
                                      </label>
                                      <div class="col-sm-9 field-subject">
                                        <div class="related-widget-wrapper">
                                          <div class="d-inline-block w-50">
                                            <base-dropdown
                                              :options="getCategories"
                                              :withObj="true"
                                              default="Kategoriya tanlang..."
                                              @input="getQuestionCategory"
                                            ></base-dropdown>
                                          </div>

                                          <!-- <a
                                            class="related-widget-wrapper-link change-related"
                                            ><fa
                                              class="icon pencil mx-3"
                                              :icon="['fas', 'pencil']" /></a
                                          ><a
                                            class="related-widget-wrapper-link add-related"
                                            ><fa
                                              class="icon plus"
                                              :icon="['fas', 'plus']"
                                          /></a> -->
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="field-subject mt-4 mx-4">
                                    <div class="row">
                                      <label
                                        class="col-sm-3 text-left"
                                        for="id_subject"
                                      >
                                        Variant nomi

                                        <span class="text-red">* </span>
                                      </label>
                                      <div class="col-sm-9 field-subject">
                                        <div class="related-widget-wrapper">
                                          <div class="d-inline-block w-50">
                                            <base-dropdown
                                              :options="getVariants"
                                              :withObj="true"
                                              :notAllow="true"
                                              default="Variant tanlang..."
                                              @input="getVariantChanges"
                                            ></base-dropdown>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="field-subject mt-4 mx-4">
                                    <div class="row">
                                      <label
                                        class="col-sm-3 text-left"
                                        for="id_subject"
                                      >
                                        Savol nomi

                                        <span class="text-red">* </span>
                                      </label>
                                      <div class="col-sm-9 field-subject">
                                        <div class="related-widget-wrapper">
                                          <div class="d-inline-block w-100">
                                            <textarea
                                              v-model="questions.name"
                                              class="form-control"
                                              placeholder="Savol nomini kiriting..."
                                            ></textarea>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  class="tab-pane fade"
                                  id="profile"
                                  role="tabpanel"
                                >
                                  <table
                                    class="table table-hover text-nowrap mt-3 text-center"
                                  >
                                    <thead>
                                      <tr>
                                        <th class="column-answer required">
                                          Variant
                                        </th>

                                        <th class="column-status required">
                                          Holati
                                        </th>

                                        <th class="column-ball required">
                                          Ball
                                        </th>

                                        <th></th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr
                                        v-for="(
                                          variant, idx
                                        ) in questions.variants"
                                        class="form-row has_original"
                                        :key="variant"
                                      >
                                        <add-question-variant
                                          :variant="variant"
                                          :idx="idx"
                                          @deleteTr="removeTr"
                                          @updateVariants="updateVar"
                                        ></add-question-variant>
                                      </tr>

                                      <!-- <div
                                        class="no-variants"
                                        v-if="questions.variants.length === 0"
                                      >
                                        <p class="text-center">
                                          There are not any variants yet!
                                        </p>
                                      </div> -->
                                      <div class="add-tr">
                                        <button
                                          @click="addTr"
                                          type="button"
                                          class="btn btn-primary text-primary"
                                        >
                                          Variant qo'shish
                                        </button>
                                      </div>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-12 col-lg-3">
                    <div id="jazzy-actions" class="">
                      <div class="card card-primary card-outline">
                        <div class="card-header">
                          <h3 class="card-title">
                            <fa class="fas fa-edit" :icon="['fas', 'edit']" />
                            Actions
                          </h3>
                        </div>
                        <div class="card-body">
                          <div class="d-grid my-2">
                            <button
                              @click.prevent="saveQuestion"
                              class="btn btn-outline-success"
                              type="submit"
                            >
                              Saqlash
                            </button>
                          </div>

                          <div class="d-grid my-2">
                            <button class="btn btn-outline-danger">
                              O'chirish
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import costumAxios from "../../api";
import AddQuestionVariant from "./AddQuestionVariant.vue";

export default {
  props: ["id"],
  components: {
    AddQuestionVariant,
  },
  data() {
    return {
      moduleId: null,
      questions: {
        name: "",
        variant: null,
        variants: [
          {
            name: "",
            status: "Mistake",
            ball: "0",
          },
        ],
      },
    };
  },
  computed: {
    getCategories() {
      return this.$store.getters.modules.map((module) => {
        return {
          id: module.id,
          name: module.name,
        };
      });
    },
    getVariants() {
      return this.$store.getters.variants.filter(
        (variant) => variant.module == this.moduleId
      );
    },
  },
  methods: {
    getVariantChanges(val) {
      this.questions.variant = val.id;
    },
    updateVar(val) {
      this.questions.variants = this.questions.variants.map(
        (variant, index) => {
          if (index == val.id) {
            return val;
          } else {
            return variant;
          }
        }
      );
      this.questions.variants.map((variant) => delete variant.id);
      // console.log(this.questions);
      // console.log(this.getQuestion);
    },
    async saveQuestion() {
      // console.log(this.questions);
      const arr = [];
      arr.push(this.questions);
      await costumAxios.post("main/question/post/", arr);
      await this.$store.dispatch("getQuestions");
      this.$router.replace("/questions");
    },
    getQuestionCategory(val) {
      this.moduleId = val.id;
    },
    removeTr(id) {
      this.questions.variants.splice(id, 1);
    },
    addTr() {
      this.questions.variants.push({
        name: "",
        status: "Mistake",
        ball: "0",
      });
    },
  },
  created() {
    this.$store.commit("activateQuestion");
    this.$store.dispatch("getModules");
    this.$store.dispatch("getVariants");
  },
  unmounted() {
    this.$store.commit("activateQuestion");
  },
};
</script>

<style scoped>
.card-primary.card-outline {
  border-top: 3px solid #007bff;
}
.card-header {
  background-color: transparent;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  padding: 0.75rem 1.25rem;
  position: relative;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}
.form-control {
  display: block;
  width: 100%;
  height: calc(2.25rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  box-shadow: inset 0 0 0 transparent;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.card {
  box-shadow: 0 0 1px rgb(0 0 0 / 13%), 0 1px 3px rgb(0 0 0 / 20%);
  margin-bottom: 1rem;
}
.card-primary.card-outline {
  border-top: 3px solid #007bff;
}
.card {
  box-shadow: 0 0 1px rgb(0 0 0 / 13%), 0 1px 3px rgb(0 0 0 / 20%);
  margin-bottom: 1rem;
}
.card-header {
  background-color: transparent;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  padding: 0.75rem 1.25rem;
  position: relative;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}
.card-title {
  float: left;
  font-size: 1.1rem;
  font-weight: 400;
  margin: 0;
}
.card-body {
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1.25rem;
}
.btn-block {
  display: block;
  width: 100%;
}
.select2-container--default .select2-selection--single {
  background-color: #fff;
  border: 1px solid #aaa;
  border-radius: 4px;
}

.select2-container .select2-selection--single {
  box-sizing: border-box;
  cursor: pointer;
  display: block;
  height: 28px;
  user-select: none;
}
.select2-container .select2-selection--single {
  min-height: 40px;
  padding-top: 5px;
}
.select2-container--default .select2-selection--multiple {
  background-color: white;
  border: 1px solid #aaa;
  border-radius: 4px;
  cursor: text;
  padding-bottom: 5px;
  padding-right: 5px;
  position: relative;
}

.select2-container .select2-selection--multiple {
  box-sizing: border-box;
  cursor: pointer;
  display: block;
  min-height: 32px;
  user-select: none;
  -webkit-user-select: none;
}
.vTimeField,
.vDateField {
  min-width: 200px;
}

.vDateField,
.vTimeField,
.vIntegerField {
  margin-bottom: 5px;
  display: inline-block;
  height: calc(2.25rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  box-shadow: inset 0 0 0 transparent;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.help-block,
.timezonewarning {
  font-size: 0.8em;
  color: #859099;
  font-style: italic;
}
.text-red {
  color: #dc3545 !important;
}
.related-widget-wrapper .form-select {
  display: initial;
  width: initial;
  cursor: pointer;
}
.icon {
  font-size: 14px;
  cursor: pointer;
}
.icon.pencil {
  color: #ffc107;
}
textarea {
  min-height: 100px;
}
.no-variants {
  margin: 4rem;
}
.add-tr {
  margin: 4rem;
}
.add-tr button {
  position: absolute;
  top: 95%;
  left: 94%;
  transform: translate(-90%, -95%);
}
.add-tr button:hover,
.add-tr button:focus {
  color: #fff !important;
}

.no-variants p {
  background: gold;
  padding: 8px;
  border-radius: 5px;
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -90%);
}
</style>
