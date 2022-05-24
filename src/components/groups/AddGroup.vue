<template>
  <div class="content-wrapper">
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-1">
          <div class="col-auto col-sm-3 mt-2">
            <h1 class="m-0">Guruh</h1>
          </div>
          <div class="col-auto col-sm-9 mt-4">
            <ol class="breadcrumb float-end">
              <li class="breadcrumb-item">
                <router-link to="/">Bosh sahifa</router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link to="/groups">Guruhlar</router-link>
              </li>
              <li class="breadcrumb-item active">Guruh qo'shish</li>
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
                        <div class="card-title">Guruh qo'shish</div>
                      </div>
                      <div class="card-body">
                        <div class="form-group field-subject">
                          <div class="row">
                            <label class="col-sm-2 text-left" for="id_subject">
                              Guruh nomi
                              <span class="text-red">* </span>
                            </label>
                            <div class="col-sm-10 field-subject">
                              <div class="related-widget-wrapper">
                                <div class="d-inline-block w-50">
                                  <input
                                    v-model="groupName"
                                    class="form-control"
                                    type="text"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="form-group field-subject">
                          <div class="row">
                            <label class="col-sm-2 text-left" for="id_subject">
                              Kategoriya
                              <span class="text-red">* </span>
                            </label>
                            <div class="col-sm-10 field-subject">
                              <div class="related-widget-wrapper">
                                <div
                                  v-if="getCategories.length"
                                  class="d-inline-block w-50"
                                >
                                  <base-dropdown
                                    :options="getCategories"
                                    :withObj="true"
                                    @input="getExamVariant"
                                    default="Kategoriya tanlang..."
                                  ></base-dropdown>
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
                              <div class="d-inline-block w-50">
                                <input
                                  v-model="startDate"
                                  class="form-control"
                                  type="date"
                                />
                              </div>
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
                              <div class="d-inline-block w-50">
                                <input
                                  v-model="finishDate"
                                  class="form-control"
                                  type="date"
                                />
                              </div>
                            </div>
                            <div v-if="isDateInvalid" class="mt-2 text-danger">
                              Yopilish sanasi ochilish sanasidan kegn bo'lishi
                              lozim
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
                              @click.prevent="addGroup"
                              class="btn btn-outline-success"
                            >
                              Saqlash
                            </button>
                          </div>
                          <div class="d-grid my-2">
                            <router-link to="/groups">
                              <button
                                class="btn btn-outline-danger display-block"
                              >
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
import Multiselect from "@vueform/multiselect";
import customAxios from "../../api";

export default {
  components: {
    Multiselect,
  },
  data() {
    return {
      isDateInvalid: false,
      isEmpty: false,
      value: [],
      groupName: "",
      moduleId: null,
      startDate: "",
      finishDate: "",
    };
  },
  computed: {
    getUsers() {
      return this.$store.getters.users.map((user) => {
        return {
          value: user.id,
          name: `${user.first_name}  ${user.last_name}`,
        };
      });
    },
    getCategories() {
      return this.$store.getters.modules;
    },
  },
  methods: {
    getExamVariant(val) {
      if (typeof val === "string") return;
      this.moduleId = val.id;
      // console.log(this.moduleId);
    },
    async addGroup() {
      try {
        if (
          !this.startDate ||
          !this.finishDate ||
          !this.groupName ||
          !this.moduleId ||
          !this.value.length > 0
        ) {
          return (this.isEmpty = true);
        }
        if (new Date(this.startDate) < new Date(this.finishDate)) {
          // console.log({
          //   name: this.groupName,
          //   start_date: this.startDate,
          //   finish_date: this.finishDate,
          //   module: this.moduleId,
          //   users: this.value,
          // });
          await customAxios.post("main/group/post/", {
            name: this.groupName,
            start_date: this.startDate,
            finish_date: this.finishDate,
            module: this.moduleId,
            users: this.value,
          });
          await this.$store.dispatch("getGroups");
          this.$router.replace("/groups");
        } else {
          this.isDateInvalid = true;
        }
      } catch (e) {
        console.log(e.response.data);
      }
    },
  },
  async created() {
    this.$store.commit("activateGroup");
    await this.$store.dispatch("getModules");
    await this.$store.dispatch("getUsers");
  },
  unmounted() {
    this.$store.commit("activateGroup");
  },
  watch: {
    getUsersGroupById(newUsers) {
      this.value = newUsers[0];
    },
    isEmpty() {
      setTimeout(() => (this.isEmpty = false), 2000);
    },
    isDateInvalid() {
      setTimeout(() => (this.isDateInvalid = false), 2000);
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
.display-block {
  /* display: block; */
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

input[type="date"]::-webkit-inner-spin-button,
input[type="date"]::-webkit-calendar-picker-indicator {
  filter: invert(0.3);
}
input[type="date"]::-webkit-inner-spin-button:hover,
input[type="date"]::-webkit-calendar-picker-indicator:hover {
  cursor: pointer;
}
</style>
