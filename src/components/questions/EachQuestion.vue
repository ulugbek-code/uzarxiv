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
              <li v-if="getQuestion" class="breadcrumb-item active">
                {{ getQuestion.name }}
              </li>
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
                        <div class="card-title">Savolni o'zgartirish</div>
                        <!-- {{ getQuestion }}
                        <hr />
                        {{ question }} -->
                      </div>
                      <div class="card-body">
                        <div class="form-group field-start_date">
                          <div class="row">
                            <div class="col-12">
                              <div
                                v-if="isNoCorrectValue == undefined"
                                class="correct"
                              >
                                Variantlar orasida to'g'ri javob bo'lishi kerak?
                              </div>
                              <div v-if="isCorrectMore" class="correct">
                                Savolning bitta to'g'ri javobi bo'lishi kerak
                              </div>
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
                                        <div
                                          v-if="getQuestion"
                                          class="related-widget-wrapper"
                                        >
                                          <div class="d-inline-block w-50">
                                            <base-dropdown
                                              :options="getCategories"
                                              :withObj="true"
                                              :default="getQuestion.module_name"
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
                                          <div
                                            v-if="getQuestion"
                                            class="d-inline-block w-50"
                                          >
                                            <base-dropdown
                                              :options="getVariants"
                                              :withObj="true"
                                              :default="
                                                getQuestion.variant_name
                                              "
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
                                        <div
                                          v-if="getQuestion"
                                          class="related-widget-wrapper"
                                        >
                                          <div class="d-inline-block w-100">
                                            <textarea
                                              v-model="questionName"
                                              :class="[
                                                'form-control border',
                                                isEmpty && !questionName
                                                  ? 'border-danger'
                                                  : '',
                                              ]"
                                              placeholder="Savol nomi..."
                                            ></textarea>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    v-if="isCorrectEmpty || isVariantsEmpty"
                                    class="correct"
                                  >
                                    {{
                                      isVariantsEmpty
                                        ? "Savolning variantlari bo'lishi kerak!"
                                        : "Agar variant holati to'g'ri bo'lsa, ball 0 dan katta bo'lishi lozim!"
                                    }}
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

                                    <tbody v-if="getQuestion">
                                      <tr
                                        v-for="(
                                          variant, idx
                                        ) in getQuestion.variants"
                                        class="form-row has_original"
                                        :key="variant.id"
                                      >
                                        <each-variant
                                          :variant="variant"
                                          :idx="idx"
                                          :isBlank="isEmpty"
                                          :isCorrectEmpty="isCorrectEmpty"
                                          @deleteTr="removeTr"
                                          @updateVariants="updateVar"
                                        ></each-variant>
                                      </tr>

                                      <div
                                        class="no-variants"
                                        v-if="getQuestion.variants.length === 0"
                                      >
                                        <p class="text-center">
                                          Hozircha variantlar yo'q!
                                        </p>
                                      </div>
                                      <!-- {{
                                        copyQuestions
                                      }} -->
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
                    <div class="fixed-actions">
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
                            <router-link to="/questions">
                              <button class="btn btn-outline-danger w-100">
                                Bekor qilish
                              </button>
                            </router-link>
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
import customAxios from "../../api";
import EachVariant from "./EachVariant.vue";

export default {
  props: ["id"],
  components: {
    EachVariant,
  },
  data() {
    return {
      isEmpty: false,
      isVariantsEmpty: false,
      isCorrectEmpty: false,
      isCorrectMore: false,
      isNoCorrectValue: 1,
      questionName: "",
      // question: {},
    };
  },
  computed: {
    getQuestion() {
      return this.$store.getters.question(parseInt(this.id));
    },
    getCategories() {
      return this.$store.getters.modules.map((module) => {
        return {
          id: module.id,
          name: module.name,
        };
      });
    },
    getVariants() {
      // return this.$store.getters.variants;
      return this.$store.getters.variants.filter(
        (variant) => variant.module == this.getQuestion.module_id
      );
    },
  },
  methods: {
    // async getQuestionById() {
    //   try {
    //     const res = await customAxios.get(`main/question/get/?id=${this.id}`);
    //     this.question = res.data[0];
    //   } catch (e) {
    //     console.log(e);
    //   }
    // },
    getVariantChanges(val) {
      if (typeof val === "string") return;
      else {
        this.getQuestion.variant_id = val.id;
      }
    },
    updateVar(val) {
      // console.log(val);
      this.getQuestion.variants = this.getQuestion.variants.map((va) => {
        if (va.id == val.id) {
          return val;
        } else {
          return va;
        }
      });
    },
    async saveQuestion() {
      if (!this.questionName) {
        this.isEmpty = true;
        return;
      }
      if (!this.getQuestion.variants.length) {
        this.isVariantsEmpty = true;
        return;
      }
      this.isEmpty = this.getQuestion.variants.find(
        (variant) => variant.name === ""
      );
      if (this.isEmpty) return;

      this.isNoCorrectValue = this.getQuestion.variants.find(
        (variant) => variant.status == "Correct"
      );
      if (this.isNoCorrectValue == undefined) return;

      this.isCorrectEmpty = this.getQuestion.variants.find(
        (variant) =>
          variant.status === "Correct" && (!variant.ball || variant.ball == 0)
      );
      if (this.isCorrectEmpty) {
        this.isEmpty = true;
        return;
      }
      let correctLength = this.getQuestion.variants.filter(
        (variant) => variant.status === "Correct"
      ).length;
      if (correctLength > 1) {
        this.isCorrectMore = true;
        return;
      }
      // console.log(this.getQuestion);
      await customAxios.post("main/question/update_question/", {
        id: this.getQuestion.id,
        name: this.questionName,
        variant: this.getQuestion.variant_id,
        variants: this.getQuestion.variants,
      });
      this.$router.push("/questions");
    },
    getQuestionCategory(val) {
      // if (typeof val === "string") return;
      this.getQuestion.module_id = val.id;
    },
    async removeTr(val) {
      if (typeof val.id === "string") {
        this.getQuestion.variants.splice(val.idx, 1);
        return;
      }
      if (confirm("Haqiqatan ham o'chirishni xohlaysizmi")) {
        await customAxios.get(`main/question/delete/?id=${val.id}`);
        await this.$store.dispatch("getQuestions");
      }
    },
    async addTr() {
      this.getQuestion.variants.push({
        id: "" + Date.now(),
        name: "",
        status: "Mistake",
        ball: "0",
      });
    },
  },
  async created() {
    this.$store.commit("activateQuestion");
    this.$Progress.start();
    // await this.getQuestionById();

    await this.$store.dispatch("getQuestions");
    if (!this.$store.state.modules.length)
      await this.$store.dispatch("getModules");
    if (!this.$store.state.variants.length)
      await this.$store.dispatch("getVariants");
  },
  mounted() {
    this.$Progress.finish();
  },
  unmounted() {
    this.$store.commit("activateQuestion");
  },
  watch: {
    isEmpty() {
      setTimeout(() => (this.isEmpty = false), 2500);
    },
    isVariantsEmpty() {
      setTimeout(() => (this.isVariantsEmpty = false), 2500);
    },
    isCorrectEmpty() {
      setTimeout(() => (this.isCorrectEmpty = false), 2700);
    },
    isNoCorrectValue() {
      setTimeout(() => (this.isNoCorrectValue = 1), 2500);
    },
    isCorrectMore() {
      setTimeout(() => (this.isCorrectMore = false), 2500);
    },
    getQuestion(newObj) {
      this.questionName = newObj.name;
    },
    // questionName(val) {
    //   if (!val) {
    //     this.isEmpty = true;
    //   }
    // },
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
/* .form-control {
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
} */
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
.fixed-actions {
  position: sticky;
  z-index: 1;
  top: 10%;
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
  z-index: 100;
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
