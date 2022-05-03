<template>
  <div class="content-wrapper">
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-auto col-sm-3">
            <h1 class="m-0">Imtihonlar</h1>
          </div>
          <div class="col-auto col-sm-9">
            {{ getModules }}
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item">
                <a href="/admin/"><i class="fa fa-tachometer-alt"></i> Home</a>
              </li>
              <li class="breadcrumb-item">
                <a href="/admin/quizapp/">Quizapp</a>
              </li>
              <li class="breadcrumb-item">
                <a href="/admin/quizapp/exam/">Imtihonlar</a>
              </li>
              <li class="breadcrumb-item active">Ijro Test 1 Rus</li>
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
              <form action="" method="post" id="exam_form" novalidate>
                <input
                  type="hidden"
                  name="csrfmiddlewaretoken"
                  value="l89lL5GvyvZufhswwai4ORbYKHnEk1RRAw6EP6lQET04TM9Xx2XdblaewRxwzCwv"
                />

                <div class="row">
                  <div class="col-12 col-lg-9">
                    <div class="card card-primary card-outline">
                      <div class="card-header">
                        <div class="card-title">examni o&#x27;zgartirish</div>
                        {{ getExam }}
                      </div>
                      <div class="card-body">
                        <div class="form-group field-subject">
                          <div class="row">
                            <label class="col-sm-2 text-left" for="id_subject">
                              Kategoriya

                              <span class="text-red">* </span>
                            </label>
                            <div class="col-sm-10 field-subject">
                              <div class="related-widget-wrapper">
                                <select name="subject" required>
                                  <option value="">---------</option>
                                </select>

                                <a
                                  class="related-widget-wrapper-link change-related"
                                  id="change_id_subject"
                                  data-href-template="/admin/quizapp/subjects/__fk__/change/?_to_field=id&amp;_popup=1"
                                  title="Change selected subjects"
                                  ><img
                                    src="/static/admin/img/icon-changelink.svg"
                                    alt="O'zgartirish" /></a
                                ><a
                                  class="related-widget-wrapper-link add-related"
                                  id="add_id_subject"
                                  href="/admin/quizapp/subjects/add/?_to_field=id&amp;_popup=1"
                                  title="Add another subjects"
                                  ><img
                                    src="/static/admin/img/icon-addlink.svg"
                                    alt="Qo'shish"
                                /></a>
                              </div>

                              <div class="help-block red"></div>

                              <div class="help-block text-red"></div>
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
                                <select
                                  name="user"
                                  required
                                  id="id_user"
                                  multiple
                                >
                                  <option value="1">Admin</option>

                                  <option value="2" selected>
                                    Diyorbek Yuldashev
                                  </option>

                                  <option value="3">Diyorbek</option>

                                  <option value="4">My Account</option>

                                  <option value="5">Sarvarxo&#x27;ja</option>

                                  <option value="6">
                                    Вохидова Малика Ойбек қизи
                                  </option>
                                </select>

                                <a
                                  class="related-widget-wrapper-link add-related"
                                  id="add_id_user"
                                  href="/admin/quizapp/user/add/?_to_field=id&amp;_popup=1"
                                  title="Add another user"
                                  ><img
                                    src="/static/admin/img/icon-addlink.svg"
                                    alt="Qo'shish"
                                /></a>
                              </div>

                              <div class="help-block red"></div>

                              <div class="help-block">
                                Hold down “Control”, or “Command” on a Mac, to
                                select more than one.
                              </div>

                              <div class="help-block text-red"></div>
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
                                  type="text"
                                  name="start_date_0"
                                  value="05.03.2022"
                                  class="vDateField"
                                  size="10"
                                  required
                                  id="id_start_date_0"
                                />

                                <br />
                                Vaqt:
                                <input
                                  type="text"
                                  name="start_date_1"
                                  value="00:21:56"
                                  class="vTimeField"
                                  size="8"
                                  required
                                  id="id_start_date_1"
                                />
                              </p>

                              <div class="help-block red"></div>

                              <div class="help-block text-red"></div>
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
                                  type="text"
                                  name="finish_date_0"
                                  value="05.03.2022"
                                  class="vDateField"
                                  size="10"
                                  required
                                  id="id_finish_date_0"
                                />

                                <br />
                                Vaqt:
                                <input
                                  type="text"
                                  name="finish_date_1"
                                  value="05:21:58"
                                  class="vTimeField"
                                  size="8"
                                  required
                                  id="id_finish_date_1"
                                />
                              </p>

                              <div class="help-block red"></div>

                              <div class="help-block text-red"></div>
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
                                type="number"
                                name="duration"
                                value="5"
                                class="vIntegerField"
                                required
                                id="id_duration"
                              />

                              <div class="help-block red"></div>

                              <div class="help-block">
                                Imtihon davomiyligi minutda kiritilsin!
                              </div>

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
export default {
  props: ["id"],
  computed: {
    getExam() {
      return this.$store.getters.exam(parseInt(this.id));
    },
    getModules() {
      return this.$store.getters.modules;
    },
  },
  created() {
    this.$store.dispatch("getExams");
    this.$store.dispatch("getModules");
  },
  watch: {
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
</style>
