<template>
  <div class="content-wrapper">
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-1">
          <div class="col-auto col-sm-3 mt-2">
            <h1 class="m-0">Imtihonlar</h1>
          </div>
          <div class="col-auto col-sm-9 mt-4">
            <ol class="breadcrumb float-end">
              <li class="breadcrumb-item">
                <router-link to="/">Bosh sahifa</router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link to="/groups">Guruhlar</router-link>
              </li>
              <li v-if="Object.keys(eachExam).length" class="breadcrumb-item">
                <router-link :to="`/groups/${id}`">{{
                  eachExam.group.name
                }}</router-link>
              </li>
              <li v-if="id" class="breadcrumb-item active">Imtihon qo'shish</li>
            </ol>
          </div>
        </div>
      </div>
    </div>

    <!-- {{ eachExam }}
    <hr /> -->
    <!-- {{ eachExamUsers }} -->
    <div class="content">
      <div class="container-fluid">
        <section id="content" class="content">
          <div class="row">
            <div id="content-main" class="col-12">
              <form>
                <div class="row">
                  <div class="col-12 col-lg-9">
                    <div class="card card-primary card-outline">
                      <div class="card-header">
                        <div class="card-title">Imtihonni o'zgartirish</div>
                        <!-- {{ getExam }} -->
                        <!-- {{ getGroups }} -->
                        <!-- {{ getUsers }} -->
                      </div>
                      <div class="card-body">
                        <div class="form-group field-subject">
                          <div class="row">
                            <label class="col-sm-2 text-left" for="id_subject">
                              Test variantlari
                              <span class="text-red">* </span>
                            </label>
                            <div class="col-sm-10 field-subject">
                              <div class="related-widget-wrapper">
                                <div
                                  v-if="Object.keys(eachExam).length"
                                  class="d-inline-block w-50"
                                >
                                  <base-dropdown
                                    :options="getVariants"
                                    :withObj="true"
                                    @input="getExamVariant"
                                    :default="eachExam.variant.name"
                                  ></base-dropdown>
                                </div>
                                <div v-else class="text-danger">
                                  Kategoriyaning test variantlari mavjud emas
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="form-group field-user">
                          <div class="row">
                            <label class="col-sm-2 text-left" for="id_user">
                              Ishtirokchi

                              <span class="text-red">* </span>
                            </label>
                            <div class="col-sm-10 field-user">
                              <div class="related-widget-wrapper">
                                <div class="multi d-inline-block w-75">
                                  <Multiselect
                                    v-model="value"
                                    mode="tags"
                                    :close-on-select="false"
                                    :searchable="true"
                                    :options="getUsers"
                                    label="name"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="form-group field-start_date">
                          <div class="row">
                            <label
                              class="col-sm-2 text-left"
                              for="id_start_date"
                            >
                              Ochilish sanasi

                              <span class="text-red">* </span>
                            </label>
                            <div class="col-sm-10 field-start_date">
                              Sana:
                              <div class="d-inline-block w-50">
                                <input
                                  v-model="startDate"
                                  class="form-control border my-2"
                                  :class="
                                    isEmpty && !startDate ? 'border-danger' : ''
                                  "
                                  type="datetime-local"
                                />
                              </div>
                              <br />
                              <template v-if="startDate">
                                Vaqt:
                                <div class="d-inline-block w-50">
                                  <input
                                    disabled
                                    :value="formattedStart"
                                    class="form-control without_ampm"
                                    type="text"
                                  />
                                </div>
                              </template>
                            </div>
                          </div>
                        </div>

                        <div class="form-group field-finish_date">
                          <div class="row">
                            <label
                              class="col-sm-2 text-left"
                              for="id_finish_date"
                            >
                              Yopilish sanasi

                              <span class="text-red">* </span>
                            </label>
                            <div class="col-sm-10 field-finish_date">
                              Sana:
                              <div class="d-inline-block w-50">
                                <input
                                  v-model="finishDate"
                                  class="form-control border my-2"
                                  :class="
                                    isEmpty && !finishDate
                                      ? 'border-danger'
                                      : ''
                                  "
                                  type="datetime-local"
                                />
                              </div>
                              <br />
                              <template v-if="finishDate">
                                Vaqt:
                                <div class="d-inline-block w-50">
                                  <input
                                    disabled
                                    :value="formattedFinish"
                                    class="form-control"
                                    type="text"
                                  />
                                </div>
                              </template>
                            </div>
                            <div v-if="isDateInvalid" class="mt-2 text-danger">
                              Yopilish sanasi ochilish sanasidan so'ng bo'lishi
                              va ochilish sanasi hozirdan katta bo'lishi lozim
                            </div>
                          </div>
                        </div>

                        <div class="form-group field-duration">
                          <div class="row">
                            <label class="col-sm-2 text-left" for="id_duration">
                              Davomiyligi
                            </label>
                            <div class="col-sm-10 field-duration">
                              <div class="d-inline-block w-50">
                                <input
                                  :value="duration"
                                  type="number"
                                  class="form-control"
                                />
                              </div>
                              <div class="help-block">
                                Imtihon davomiyligi minutda ko'rsatilgan
                              </div>
                            </div>
                          </div>
                        </div>
                        <div v-if="isEmpty" class="text-danger">
                          Barcha kerakli maydonlarni toʻldiring!
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-12 col-lg-3">
                    <div>
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
                              @click.prevent="editExam"
                              class="btn btn-outline-success"
                            >
                              Saqlash
                            </button>
                          </div>
                          <div class="d-grid my-2">
                            <button
                              @click="previousPage"
                              class="btn btn-outline-danger"
                              type="button"
                            >
                              Bekor qilish
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
import Multiselect from "@vueform/multiselect";
import customAxios from "../../api";

export default {
  props: ["id", "examId"],
  components: {
    Multiselect,
  },
  data() {
    return {
      isDateInvalid: false,
      isEmpty: false,
      value: [],
      variantId: null,
      startDate: "",
      finishDate: "",
      eachExam: {},
      //   duration: "",
    };
  },
  computed: {
    eachExamUsers() {
      return this.eachExam.user.map((user) => user.id);
    },
    duration() {
      return (new Date(this.finishDate) - new Date(this.startDate)) / 60000;
    },
    formattedFinish() {
      return new Date(`${this.finishDate}`).toTimeString().slice(0, 8);
    },
    formattedStart() {
      return new Date(`${this.startDate}`).toTimeString().slice(0, 8);
    },
    getUsers() {
      return this.$store.getters.users.map((user) => {
        return {
          value: user.id,
          name: `${user.first_name}  ${user.last_name}`,
        };
      });
    },
    getVariants() {
      return this.$store.getters.variants.filter(
        (variant) => variant.module === this.eachExam.group.module.id
      );
    },
  },
  methods: {
    async getEachExam() {
      try {
        const res = await customAxios.get(`main/exams/${this.examId}/`);
        this.eachExam = res.data;
      } catch (e) {
        console.log(e.response);
      }
    },
    previousPage() {
      this.$router.push(`/groups/${this.id}`);
    },
    getExamVariant(val) {
      if (typeof val === "string") return;
      this.variantId = val.id;
      // console.log(val);
    },
    async editExam() {
      try {
        if (
          !this.startDate ||
          !this.finishDate ||
          !this.duration ||
          !this.variantId ||
          !this.value.length > 0
        ) {
          this.isEmpty = true;
          return;
        }
        if (
          //   new Date() <= new Date(this.startDate) &&
          new Date(this.startDate) < new Date(this.finishDate)
        ) {
          await customAxios.post("main/exams/edit/", {
            id: this.examId,
            start_date: this.startDate,
            finish_date: this.finishDate,
            duration: this.duration,
            group: parseInt(this.id),
            variant: this.variantId,
            user: this.value,
          });
          this.$router.replace("/groups/" + this.id);
        } else {
          this.isDateInvalid = true;
        }
      } catch (e) {
        console.log(e.response.data);
      }
    },
  },
  async created() {
    this.$Progress.start();
    this.$store.commit("activateGroup");
    await this.getEachExam();
    if (!this.$store.state.users.length) await this.$store.dispatch("getUsers");
    if (!this.$store.state.variants.length)
      await this.$store.dispatch("getVariants");
  },
  mounted() {
    this.$Progress.finish();
  },
  unmounted() {
    this.$store.commit("activateGroup");
  },
  watch: {
    eachExam(newExam) {
      this.startDate = newExam.start_date.slice(0, -1);
      this.finishDate = newExam.finish_date.slice(0, -1);
      this.variantId = newExam.variant.id;
      this.value = this.eachExamUsers;
    },
    isEmpty() {
      setTimeout(() => (this.isEmpty = false), 2000);
    },
    isDateInvalid() {
      setTimeout(() => (this.isDateInvalid = false), 3000);
    },
  },
};
</script>

<style src="@vueform/multiselect/themes/default.css"></style>
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
.form-group {
  margin-bottom: 1rem;
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
input[type="datetime-local"]::-webkit-inner-spin-button,
input[type="datetime-local"]::-webkit-calendar-picker-indicator {
  filter: invert(0.3);
}
input[type="datetime-local"]::-webkit-inner-spin-button:hover,
input[type="datetime-local"]::-webkit-calendar-picker-indicator:hover {
  cursor: pointer;
}
.without_ampm::-webkit-datetime-edit-ampm-field {
  display: none;
}
input[type="time"]::-webkit-clear-button {
  -webkit-appearance: none;
  -moz-appearance: none;
  -o-appearance: none;
  -ms-appearance: none;
  appearance: none;
  margin: -10px;
}
input[type="time"]::-webkit-calendar-picker-indicator {
  background: none;
}
</style>
