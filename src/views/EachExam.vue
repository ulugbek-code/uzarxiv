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
                <router-link to="/exams">Imtihonlar</router-link>
              </li>
              <li v-if="getExam" class="breadcrumb-item active">
                {{ getExam.group.name }}
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
                              Kategoriya

                              <span class="text-red">* </span>
                            </label>
                            <div class="col-sm-10 field-subject">
                              <div
                                v-if="getExam"
                                class="related-widget-wrapper"
                              >
                                <div class="d-inline-block w-50">
                                  <base-dropdown
                                    :options="getGroups"
                                    :withObj="true"
                                    :default="getExam.group.name"
                                    @input="getExamCategory"
                                  ></base-dropdown>
                                </div>

                                <a
                                  class="related-widget-wrapper-link change-related"
                                  ><fa
                                    class="icon pencil mx-3"
                                    :icon="['fas', 'pencil']" /></a
                                ><a
                                  class="related-widget-wrapper-link add-related"
                                  ><fa
                                    class="icon plus"
                                    :icon="['fas', 'plus']"
                                /></a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="form-group field-subject">
                          <div class="row">
                            <label class="col-sm-2 text-left" for="id_subject">
                              Test variantlari

                              <span class="text-red">* </span>
                            </label>
                            <div class="col-sm-10 field-subject">
                              <div
                                v-if="getExam"
                                class="related-widget-wrapper"
                              >
                                <div class="d-inline-block w-50">
                                  <base-dropdown
                                    :options="getGroups"
                                    :withObj="true"
                                    :default="getExam.group.name"
                                    @input="getExamCategory"
                                  ></base-dropdown>
                                </div>

                                <a
                                  class="related-widget-wrapper-link change-related"
                                  ><fa
                                    class="icon pencil mx-3"
                                    :icon="['fas', 'pencil']" /></a
                                ><a
                                  class="related-widget-wrapper-link add-related"
                                  ><fa
                                    class="icon plus"
                                    :icon="['fas', 'plus']"
                                /></a>
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
                                <a
                                  class="related-widget-wrapper-link add-related"
                                  id="add_id_user"
                                  href="/admin/quizapp/user/add/?_to_field=id&amp;_popup=1"
                                  title="Add another user"
                                  ><fa
                                    class="icon plus mx-2"
                                    :icon="['fas', 'plus']"
                                /></a>
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
                              <p class="datetime">
                                Sana:
                                <input
                                  v-model="startDate"
                                  type="text"
                                  class="vDateField"
                                  size="10"
                                  required
                                />

                                <br />
                                Vaqt:
                                <input
                                  v-model="startTime"
                                  type="text"
                                  class="vTimeField"
                                  size="8"
                                  required
                                />
                              </p>
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
                              <p class="datetime">
                                Sana:
                                <input
                                  v-model="finishDate"
                                  type="text"
                                  class="vDateField"
                                  size="10"
                                  required
                                />

                                <br />
                                Vaqt:
                                <input
                                  v-model="finishTime"
                                  type="text"
                                  class="vTimeField"
                                  size="8"
                                  required
                                />
                              </p>
                            </div>
                          </div>
                        </div>

                        <div class="form-group field-duration">
                          <div class="row">
                            <label class="col-sm-2 text-left" for="id_duration">
                              Davomiyligi

                              <span class="text-red">* </span>
                            </label>
                            <div class="col-sm-10 field-duration">
                              <input
                                v-model="duration"
                                type="number"
                                class="vIntegerField"
                                required
                              />

                              <div class="help-block">
                                Imtihon davomiyligi minutda kiritilsin!
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
                            <input
                              type="submit"
                              value="Saqlash"
                              class="btn btn-outline-success"
                            />
                          </div>

                          <div class="d-grid my-2">
                            <button class="btn btn-outline-danger">
                              O'chirish
                            </button>
                          </div>

                          <div class="d-grid my-2">
                            <input
                              type="submit"
                              class="btn btn-outline-info"
                              value="Save and add another"
                            />
                          </div>

                          <div class="d-grid my-2">
                            <input
                              type="submit"
                              class="btn btn-outline-info"
                              value="Save and continue editing"
                            />
                          </div>
                        </div>
                      </div>

                      <div class="object-tools mb-md-2">
                        <button
                          class="btn btn-block btn-outline-secondary btn-sm"
                        >
                          History
                        </button>
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

export default {
  props: ["id"],
  components: {
    Multiselect,
  },
  data() {
    return {
      value: [],
      startDate: "",
      startTime: "",
      finishDate: "",
      finishTime: "",
      duration: "",
    };
  },
  computed: {
    getExam() {
      return this.$store.getters.exam(parseInt(this.id));
    },
    getUsers() {
      return this.$store.getters.users.map((user) => {
        return {
          value: user.id,
          name: `${user.first_name}  ${user.last_name}`,
        };
      });
    },
    getGroups() {
      return this.$store.getters.groups.map((group) => {
        return {
          name: group.name,
          id: group.id,
        };
      });
    },
  },
  methods: {
    getExamCategory(val) {
      console.log(val);
    },
  },
  created() {
    this.$store.commit("activateExam");
    this.$store.dispatch("getExams");
    this.$store.dispatch("getModules");
    this.$store.dispatch("getGroups");
    this.$store.dispatch("getUsers");
  },
  unmounted() {
    this.$store.commit("activateExam");
  },
  watch: {
    getExam(newObj) {
      this.value = newObj.group.users;
      this.startDate = newObj.start_date.substring(0, 10).replaceAll("-", ".");
      this.startTime = newObj.start_date.substring(11, 19);
      this.finishDate = newObj.finish_date
        .substring(0, 10)
        .replaceAll("-", ".");
      this.finishTime = newObj.finish_date.substring(11, 19);
      this.duration = newObj.duration;
    },
    // getUser(newObj) {
    //   this.password = newObj.password;
    //   this.superStatus = newObj.is_superuser;
    //   this.username = newObj.username;
    //   this.firstname = newObj.first_name;
    //   this.lastname = newObj.last_name;
    //   this.email = newObj.email;
    //   this.isStaff = newObj.is_staff;
    //   this.isActive = newObj.is_active;
    //   this.dateJoined = newObj.date_joined
    //     .substring(0, 10)
    //     .replaceAll("-", ".");
    //   this.timeJoined = newObj.date_joined.substring(11, 19);
    //   this.organization = newObj.organization;
    //   this.position = newObj.position;
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
.form-group {
  margin-bottom: 1rem;
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
</style>
