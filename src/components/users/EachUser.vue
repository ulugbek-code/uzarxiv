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
                <router-link to="/"> Home</router-link>
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
              <form action="" method="post" id="user_form" novalidate>
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
                          <div class="row">
                            <label class="col-sm-2 text-left" for="id_password">
                              Parol

                              <span class="text-red">* </span>
                            </label>
                            <div class="col-sm-10 field-password">
                              <input
                                v-model="password"
                                type="text"
                                class="vTextField"
                                maxlength="128"
                                required
                              />
                              <div class="help-block red"></div>
                              <div class="help-block text-red"></div>
                            </div>
                          </div>
                        </div>
                        <div class="form-group field-is_superuser">
                          <div class="row">
                            <label class="col-sm-2 text-left">
                              Superuser status
                            </label>
                            <div class="col-sm-10 field-is_superuser">
                              <input v-model="superStatus" type="checkbox" />

                              <div class="help-block red"></div>

                              <div class="help-block">
                                Ushbu foydalanuvchi barcha ruxsatlarga ularni
                                aniq tayinlamasdan ega ekanligini tasdiqlaydi.
                              </div>

                              <div class="help-block text-red"></div>
                            </div>
                          </div>
                        </div>

                        <div class="form-group field-groups">
                          <div class="row">
                            <label class="col-sm-2 text-left" for="id_groups">
                              Groups
                            </label>
                            <div class="col-sm-10 field-groups">
                              <div class="related-widget-wrapper">
                                <div>
                                  <Multiselect
                                    v-model="value"
                                    mode="tags"
                                    :close-on-select="false"
                                    :searchable="true"
                                    :options="options"
                                    label="age"
                                  />
                                </div>
                              </div>
                              <div class="help-block">
                                Ushbu foydalanuvchi tegishli bo'lgan guruhlar.
                                Foydalanuvchi har bir guruhga berilgan barcha
                                ruxsatlarni oladi.
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="form-group field-user_permissions">
                          <div class="row">
                            <label
                              class="col-sm-2 text-left"
                              for="id_user_permissions"
                            >
                              User permissions
                            </label>
                            <div class="col-sm-10 field-user_permissions">
                              <div class="related-widget-wrapper">
                                <Multiselect
                                  v-model="value"
                                  mode="tags"
                                  :close-on-select="false"
                                  :searchable="true"
                                  :options="options"
                                  label="age"
                                />
                              </div>

                              <div class="help-block red"></div>

                              <div class="help-block">
                                Ushbu foydalanuvchi uchun maxsus ruxsatlar.
                              </div>

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
                                class="vTextField"
                                maxlength="150"
                                required
                              />

                              <div class="help-block red"></div>

                              <div class="help-block">
                                Majburiy. 150 yoki undan kam belgi. Faqat
                                harflar, raqamlar va @/./+/-/_.
                              </div>

                              <div class="help-block text-red"></div>
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
                            </label>
                            <div class="col-sm-10 field-first_name">
                              <input
                                v-model="firstname"
                                type="text"
                                class="vTextField"
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
                            </label>
                            <div class="col-sm-10 field-last_name">
                              <input
                                v-model="lastname"
                                type="text"
                                class="vTextField"
                                maxlength="150"
                                id="id_last_name"
                              />

                              <div class="help-block red"></div>

                              <div class="help-block text-red"></div>
                            </div>
                          </div>
                        </div>

                        <div class="form-group field-email">
                          <div class="row">
                            <label class="col-sm-2 text-left" for="id_email">
                              Email address
                            </label>
                            <div class="col-sm-10 field-email">
                              <input
                                v-model="email"
                                type="email"
                                class="vTextField"
                                maxlength="254"
                              />

                              <div class="help-block red"></div>

                              <div class="help-block text-red"></div>
                            </div>
                          </div>
                        </div>

                        <div class="form-group field-is_staff">
                          <div class="row">
                            <label class="col-sm-2 text-left" for="id_is_staff">
                              Staff status
                            </label>
                            <div class="col-sm-10 field-is_staff">
                              <input v-model="isStaff" type="checkbox" />

                              <div class="help-block red"></div>

                              <div class="help-block">
                                Foydalanuvchining ushbu administrator saytiga
                                kirishi mumkinligini belgilaydi.
                              </div>

                              <div class="help-block text-red"></div>
                            </div>
                          </div>
                        </div>

                        <div class="form-group field-is_active">
                          <div class="row">
                            <label
                              class="col-sm-2 text-left"
                              for="id_is_active"
                            >
                              Active
                            </label>
                            <div class="col-sm-10 field-is_active">
                              <input
                                v-model="isActive"
                                type="checkbox"
                                name="is_active"
                                id="id_is_active"
                                checked
                              />

                              <div class="help-block red"></div>

                              <div class="help-block">
                                Bu foydalanuvchini faol deb hisoblash
                                kerakligini belgilaydi. Hisoblarni o'chirish
                                o'rniga bu belgini olib tashlang.
                              </div>

                              <div class="help-block text-red"></div>
                            </div>
                          </div>
                        </div>

                        <div class="form-group field-date_joined">
                          <div class="row">
                            <label
                              class="col-sm-2 text-left"
                              for="id_date_joined"
                            >
                              Date joined

                              <span class="text-red">* </span>
                            </label>
                            <div class="col-sm-10 field-date_joined">
                              <p class="datetime">
                                Sana:
                                <input
                                  v-model="dateJoined"
                                  type="text"
                                  class="vDateField"
                                  size="10"
                                  required
                                  id="id_date_joined_0"
                                />

                                <br />
                                Vaqt:
                                <input
                                  v-model="timeJoined"
                                  type="text"
                                  class="vTimeField"
                                  size="8"
                                  required
                                  id="id_date_joined_1"
                                />
                              </p>

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
                                class="vTextField"
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
                                class="vTextField"
                                maxlength="200"
                                required
                              />

                              <div class="help-block red"></div>

                              <div class="help-block text-red"></div>
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
      value: null,
      options: [
        // { value: "batman", age: "Batman" },
      ],
      password: "",
      superStatus: false,
      username: "",
      email: "",
      firstname: "",
      lastname: "",
      isStaff: false,
      isActive: false,
      dateJoined: "",
      timeJoined: "",
      organization: "",
      position: "",
    };
  },
  computed: {
    getUser() {
      return this.$store.getters.user(parseInt(this.id));
    },
  },
  created() {
    this.$store.dispatch("getUsers");
  },
  watch: {
    getUser(newObj) {
      this.password = newObj.password;
      this.superStatus = newObj.is_superuser;
      this.username = newObj.username;
      this.firstname = newObj.first_name;
      this.lastname = newObj.last_name;
      this.email = newObj.email;
      this.isStaff = newObj.is_staff;
      this.isActive = newObj.is_active;
      this.dateJoined = newObj.date_joined
        .substring(0, 10)
        .replaceAll("-", ".");
      this.timeJoined = newObj.date_joined.substring(11, 19);
      this.organization = newObj.organization;
      this.position = newObj.position;
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
.table-responsive {
  display: block;
  width: 100%;
  overflow-x: auto;
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
.table td.action-checkbox {
  width: 45px;
  padding-left: 1.5rem;
}
.djn-checkbox-select-all {
  padding-left: 1.5rem !important;
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
label:not(.form-check-label):not(.custom-file-label) {
  font-weight: 700;
}
.text-red {
  color: #dc3545 !important;
}
.btn-block {
  display: block;
  width: 100%;
}

select {
  word-wrap: normal;
}
button {
  text-transform: none;
}

.form-group div .vTextField {
  display: block;
  width: 100%;
}
.vTextField {
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
.vDateField,
.vTimeField {
  min-width: 200px;
  height: calc(2.25rem + 2px);
  margin-top: 5px;
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
.vTimeField {
  margin-left: 2px;
}
</style>
