<template>
  <div class="content-wrapper">
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-1">
          <div class="col-auto col-sm-3">
            <h1 class="my-2 fw-normal">Foydalanuvchilar</h1>
          </div>
          <div class="col-sm-9 mt-4">
            <ol class="breadcrumb float-end">
              <li class="breadcrumb-item">
                <router-link to="/">Bosh sahifa</router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link to="/users">Foydalanuvchilar</router-link>
              </li>
              <li v-if="getUser" class="breadcrumb-item active">
                {{
                  getUser.first_name
                    ? `${getUser.first_name} ${getUser.last_name}`
                    : getUser.username
                }}
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
              <form @submit.prevent>
                <div class="row">
                  <div class="col-12 col-lg-9">
                    <div class="card card-primary card-outline">
                      <div class="card-header">
                        <div class="card-title">
                          Foydalanuvchini o'zgartirish
                        </div>
                      </div>
                      <div class="card-body">
                        <div class="form-group field-password">
                          <div class="row mb-3">
                            <label class="col-sm-2 text-left" for="id_password">
                              Passport raqami

                              <span class="text-red">* </span>
                            </label>
                            <div class="col-sm-10 field-password">
                              <input
                                v-model="passportNumber"
                                type="text"
                                class="form-control"
                                maxlength="9"
                                required
                              />
                            </div>
                          </div>
                          <div class="row">
                            <label class="col-sm-2 text-left" for="id_password">
                              Parol

                              <span class="text-red">* </span>
                            </label>
                            <div class="col-sm-10 field-password">
                              <input
                                v-model="password"
                                type="text"
                                class="form-control"
                                maxlength="128"
                                required
                              />
                              <div class="help-block red"></div>
                              <div class="help-block text-red"></div>
                            </div>
                          </div>
                        </div>

                        <div class="form-group field-username">
                          <div class="row">
                            <label class="col-sm-2 text-left" for="id_username">
                              Username

                              <span class="text-red">* </span>
                            </label>
                            <div class="col-sm-10 field-username">
                              <input
                                v-model="username"
                                type="text"
                                class="form-control"
                                maxlength="150"
                                required
                              />

                              <!-- <div class="help-block">
                                Majburiy. 150 yoki undan kam belgi. Faqat
                                harflar, raqamlar va @/./+/-/_.
                              </div> -->
                            </div>
                          </div>
                        </div>

                        <div class="form-group field-first_name">
                          <div class="row">
                            <label
                              class="col-sm-2 text-left"
                              for="id_first_name"
                            >
                              First name
                              <span class="text-red">* </span>
                            </label>
                            <div class="col-sm-10 field-first_name">
                              <input
                                v-model="firstname"
                                type="text"
                                class="form-control"
                                maxlength="150"
                              />

                              <div class="help-block red"></div>

                              <div class="help-block text-red"></div>
                            </div>
                          </div>
                        </div>

                        <div class="form-group field-last_name">
                          <div class="row">
                            <label
                              class="col-sm-2 text-left"
                              for="id_last_name"
                            >
                              Last name
                              <!-- <span class="text-red">* </span> -->
                            </label>
                            <div class="col-sm-10 field-last_name">
                              <input
                                v-model="lastname"
                                type="text"
                                class="form-control"
                                maxlength="150"
                                id="id_last_name"
                              />

                              <div class="help-block red"></div>

                              <div class="help-block text-red"></div>
                            </div>
                          </div>
                        </div>

                        <div class="form-group field-organization">
                          <div class="row">
                            <label
                              class="col-sm-2 text-left"
                              for="id_organization"
                            >
                              Organization

                              <span class="text-red">* </span>
                            </label>
                            <div class="col-sm-10 field-organization">
                              <input
                                v-model="organization"
                                type="text"
                                class="form-control"
                                maxlength="200"
                                required
                              />

                              <div class="help-block red"></div>

                              <div class="help-block text-red"></div>
                            </div>
                          </div>
                        </div>

                        <div class="form-group field-position">
                          <div class="row">
                            <label class="col-sm-2 text-left" for="id_position">
                              Position

                              <span class="text-red">* </span>
                            </label>
                            <div class="col-sm-10 field-position">
                              <input
                                v-model="position"
                                type="text"
                                class="form-control"
                                maxlength="200"
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <div v-if="isEmpty" class="help-block text-red fs-4">
                          Iltimos, barcha kerakli maydonlarni toʻldiring!
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
                              @click="updateUser"
                              class="btn btn-outline-success"
                            >
                              Saqlash
                            </button>
                          </div>

                          <div class="d-grid my-2">
                            <router-link to="/users">
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
import customAxios from "../../api";
export default {
  props: ["id"],
  data() {
    return {
      isEmpty: false,
      password: "",
      passportNumber: "",
      username: "",
      firstname: "",
      lastname: "",
      organization: "",
      position: "",
      getUser: [],
    };
  },
  methods: {
    async updateUser() {
      try {
        if (
          !this.passportNumber ||
          !this.username ||
          !this.firstname ||
          // !this.lastname ||
          !this.password ||
          !this.organization ||
          !this.position
        ) {
          return (this.isEmpty = true);
        }
        this.$Progress.start();
        await customAxios.patch(`main/user/${this.getUser.id}/`, {
          password: this.password,
          username: this.username,
          first_name: this.firstname,
          last_name: this.lastname,
          organization: this.organization,
          position: this.position,
          pass_number: this.passportNumber,
        });
        // await this.getUserByPassNumber();
        this.$Progress.finish();
        await this.$store.dispatch("getUsers");
        this.$router.push("/users");
      } catch (e) {
        this.$Progress.fail();
        console.log(e.response.message);
      }
    },
    async getUserByPassNumber() {
      try {
        this.$Progress.start();
        const res = await customAxios.get(`main/user/${this.id}/`);
        // console.log(res.data);
        this.getUser = res.data;
        this.$Progress.finish();
      } catch (e) {
        this.$Progress.fail();
        console.log(e);
      }
    },
  },
  async created() {
    this.$store.commit("activateUser");
    this.$Progress.start();
    await this.getUserByPassNumber();
  },
  mounted() {
    this.$Progress.finish();
  },
  unmounted() {
    this.$store.commit("activateUser");
  },
  watch: {
    isEmpty() {
      setTimeout(() => (this.isEmpty = false), 2500);
    },
    getUser(newObj) {
      this.password = newObj.password;
      this.passportNumber = newObj.pass_number;
      this.username = newObj.username;
      this.firstname = newObj.first_name;
      this.lastname = newObj.last_name;
      this.organization = newObj.organization;
      this.position = newObj.position;
    },
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
/* .table-responsive { */
.display-block {
  /* display: block; */
  /* overflow-x: auto; */
  width: 100%;
}
.card-body > .table > thead > tr > th {
  border-top-width: 0;
}
.table thead th {
  vertical-align: bottom;
  border-bottom: 2px solid #dee2e6;
}

.table td,
.table th {
  padding: 0.75rem;
  vertical-align: top;
  border-top: 1px solid #dee2e6;
}
.card-body::after,
.card-footer::after,
.card-header::after {
  display: block;
  clear: both;
  content: "";
}
.for-label {
  display: inline-block;
  margin-bottom: 0.5rem;
}

.card {
  box-shadow: 0 0 1px rgb(0 0 0 / 13%), 0 1px 3px rgb(0 0 0 / 20%);
  margin-bottom: 1rem;
}
.table td.action-checkbox {
  width: 45px;
  padding-left: 1.5rem;
}
.djn-checkbox-select-all {
  padding-left: 1.5rem !important;
}
.card {
  box-shadow: 0 0 1px rgb(0 0 0 / 13%), 0 1px 3px rgb(0 0 0 / 20%);
  margin-bottom: 1rem;
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
label:not(.form-check-label):not(.custom-file-label) {
  font-weight: 700;
}
.text-red {
  color: #dc3545 !important;
}

select {
  word-wrap: normal;
}
button {
  text-transform: none;
}

.help-block,
.timezonewarning {
  font-size: 0.8em;
  color: #859099;
  font-style: italic;
}
.vTimeField {
  margin-left: 2px;
}
</style>
