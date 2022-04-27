<template>
  <div class="content-wrapper">
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-auto col-sm-3">
            <h1 class="m-0">Foydalanuvchilar</h1>
          </div>
          <div class="col-auto col-sm-9">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item">
                <a href="/admin/"><i class="fa fa-tachometer-alt"></i> Home</a>
              </li>
              <li class="breadcrumb-item">
                <a href="/admin/quizapp/">Quizapp</a>
              </li>
              <li class="breadcrumb-item">
                <a href="/admin/quizapp/user/">Foydalanuvchilar</a>
              </li>
              <li class="breadcrumb-item active">Umidjon Muhamadaliyev</li>
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
                <input
                  type="hidden"
                  name="csrfmiddlewaretoken"
                  value="gunRej2MLWyvwM2mJm8Rb3AMvZigPZ25wBOkkYzRDR9vbQYIdvh5TCx5VQjsTtSE"
                />

                <div class="row">
                  <div class="col-12 col-lg-9">
                    <div class="card card-primary card-outline">
                      <div class="card-header">
                        <div class="card-title">userni o&#x27;zgartirish</div>
                        {{ getUser }}
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
                                type="text"
                                name="password"
                                value="pbkdf2_sha256$320000$UJPnOGatx91vhcoC72M6W6$cythJMQJB08n6brWx9RbISp3R+WEXEpbd0OVusYIvzY="
                                class="vTextField"
                                maxlength="128"
                                required
                                id="id_password"
                              />

                              <div class="help-block red"></div>

                              <div class="help-block text-red"></div>
                            </div>
                          </div>
                        </div>

                        <div class="form-group field-last_login">
                          <div class="row">
                            <label
                              class="col-sm-2 text-left"
                              for="id_last_login"
                            >
                              Oxirgi kirish
                            </label>
                            <div class="col-sm-10 field-last_login">
                              <p class="datetime">
                                Sana:
                                <input
                                  type="text"
                                  name="last_login_0"
                                  value="04.03.2022"
                                  class="vDateField"
                                  size="10"
                                  id="id_last_login_0"
                                />

                                <br />
                                Vaqt:
                                <input
                                  type="text"
                                  name="last_login_1"
                                  value="17:23:20"
                                  class="vTimeField"
                                  size="8"
                                  id="id_last_login_1"
                                />
                              </p>

                              <div class="help-block red"></div>

                              <div class="help-block text-red"></div>
                            </div>
                          </div>
                        </div>

                        <div class="form-group field-is_superuser">
                          <div class="row">
                            <label
                              class="col-sm-2 text-left"
                              for="id_is_superuser"
                            >
                              Superuser status
                            </label>
                            <div class="col-sm-10 field-is_superuser">
                              <input
                                type="checkbox"
                                name="is_superuser"
                                id="id_is_superuser"
                              />

                              <div class="help-block red"></div>

                              <div class="help-block">
                                Designates that this user has all permissions
                                without explicitly assigning them.
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
                                <select
                                  name="groups"
                                  id="id_groups"
                                  multiple
                                ></select>
                              </div>

                              <div class="help-block red"></div>

                              <div class="help-block">
                                The groups this user belongs to. A user will get
                                all permissions granted to each of their groups.
                                Hold down “Control”, or “Command” on a Mac, to
                                select more than one.
                              </div>

                              <div class="help-block text-red"></div>
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
                                <select
                                  name="user_permissions"
                                  id="id_user_permissions"
                                  multiple
                                >
                                  <option value="1">
                                    admin | jurnal yozuvi | Can add log entry
                                  </option>

                                  <option value="2">
                                    admin | jurnal yozuvi | Can change log entry
                                  </option>

                                  <option value="3">
                                    admin | jurnal yozuvi | Can delete log entry
                                  </option>

                                  <option value="4">
                                    admin | jurnal yozuvi | Can view log entry
                                  </option>

                                  <option value="9">
                                    auth | group | Can add group
                                  </option>

                                  <option value="10">
                                    auth | group | Can change group
                                  </option>

                                  <option value="11">
                                    auth | group | Can delete group
                                  </option>

                                  <option value="12">
                                    auth | group | Can view group
                                  </option>

                                  <option value="5">
                                    auth | permission | Can add permission
                                  </option>

                                  <option value="6">
                                    auth | permission | Can change permission
                                  </option>

                                  <option value="7">
                                    auth | permission | Can delete permission
                                  </option>

                                  <option value="8">
                                    auth | permission | Can view permission
                                  </option>

                                  <option value="13">
                                    contenttypes | tarkib turi | Can add content
                                    type
                                  </option>

                                  <option value="14">
                                    contenttypes | tarkib turi | Can change
                                    content type
                                  </option>

                                  <option value="15">
                                    contenttypes | tarkib turi | Can delete
                                    content type
                                  </option>

                                  <option value="16">
                                    contenttypes | tarkib turi | Can view
                                    content type
                                  </option>

                                  <option value="25">
                                    quizapp | answers | Can add answers
                                  </option>

                                  <option value="26">
                                    quizapp | answers | Can change answers
                                  </option>

                                  <option value="27">
                                    quizapp | answers | Can delete answers
                                  </option>

                                  <option value="28">
                                    quizapp | answers | Can view answers
                                  </option>

                                  <option value="45">
                                    quizapp | exam | Can add exam
                                  </option>

                                  <option value="46">
                                    quizapp | exam | Can change exam
                                  </option>

                                  <option value="47">
                                    quizapp | exam | Can delete exam
                                  </option>

                                  <option value="48">
                                    quizapp | exam | Can view exam
                                  </option>

                                  <option value="41">
                                    quizapp | operation item | Can add operation
                                    item
                                  </option>

                                  <option value="42">
                                    quizapp | operation item | Can change
                                    operation item
                                  </option>

                                  <option value="43">
                                    quizapp | operation item | Can delete
                                    operation item
                                  </option>

                                  <option value="44">
                                    quizapp | operation item | Can view
                                    operation item
                                  </option>

                                  <option value="37">
                                    quizapp | operations | Can add operations
                                  </option>

                                  <option value="38">
                                    quizapp | operations | Can change operations
                                  </option>

                                  <option value="39">
                                    quizapp | operations | Can delete operations
                                  </option>

                                  <option value="40">
                                    quizapp | operations | Can view operations
                                  </option>

                                  <option value="33">
                                    quizapp | question | Can add question
                                  </option>

                                  <option value="34">
                                    quizapp | question | Can change question
                                  </option>

                                  <option value="35">
                                    quizapp | question | Can delete question
                                  </option>

                                  <option value="36">
                                    quizapp | question | Can view question
                                  </option>

                                  <option value="29">
                                    quizapp | subjects | Can add subjects
                                  </option>

                                  <option value="30">
                                    quizapp | subjects | Can change subjects
                                  </option>

                                  <option value="31">
                                    quizapp | subjects | Can delete subjects
                                  </option>

                                  <option value="32">
                                    quizapp | subjects | Can view subjects
                                  </option>

                                  <option value="21">
                                    quizapp | user | Can add user
                                  </option>

                                  <option value="22">
                                    quizapp | user | Can change user
                                  </option>

                                  <option value="23">
                                    quizapp | user | Can delete user
                                  </option>

                                  <option value="24">
                                    quizapp | user | Can view user
                                  </option>

                                  <option value="17">
                                    sessions | sessiya | Can add session
                                  </option>

                                  <option value="18">
                                    sessions | sessiya | Can change session
                                  </option>

                                  <option value="19">
                                    sessions | sessiya | Can delete session
                                  </option>

                                  <option value="20">
                                    sessions | sessiya | Can view session
                                  </option>
                                </select>
                              </div>

                              <div class="help-block red"></div>

                              <div class="help-block">
                                Specific permissions for this user. Hold down
                                “Control”, or “Command” on a Mac, to select more
                                than one.
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
                                type="text"
                                name="username"
                                value="Umidjon"
                                class="vTextField"
                                maxlength="150"
                                required
                                id="id_username"
                              />

                              <div class="help-block red"></div>

                              <div class="help-block">
                                Required. 150 characters or fewer. Letters,
                                digits and @/./+/-/_ only.
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
                                type="text"
                                name="first_name"
                                value="Umidjon Muhamadaliyev"
                                class="vTextField"
                                maxlength="150"
                                id="id_first_name"
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
                                type="text"
                                name="last_name"
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
                                type="email"
                                name="email"
                                class="vTextField"
                                maxlength="254"
                                id="id_email"
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
                              <input
                                type="checkbox"
                                name="is_staff"
                                id="id_is_staff"
                              />

                              <div class="help-block red"></div>

                              <div class="help-block">
                                Designates whether the user can log into this
                                admin site.
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
                                type="checkbox"
                                name="is_active"
                                id="id_is_active"
                                checked
                              />

                              <div class="help-block red"></div>

                              <div class="help-block">
                                Designates whether this user should be treated
                                as active. Unselect this instead of deleting
                                accounts.
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
                                  type="text"
                                  name="date_joined_0"
                                  value="04.03.2022"
                                  class="vDateField"
                                  size="10"
                                  required
                                  id="id_date_joined_0"
                                />

                                <br />
                                Vaqt:
                                <input
                                  type="text"
                                  name="date_joined_1"
                                  value="16:25:30"
                                  class="vTimeField"
                                  size="8"
                                  required
                                  id="id_date_joined_1"
                                />
                              </p>
                              <input
                                type="hidden"
                                name="initial-date_joined_0"
                                value="04.03.2022"
                                id="initial-id_date_joined_0"
                              /><input
                                type="hidden"
                                name="initial-date_joined_1"
                                value="16:25:30"
                                id="initial-id_date_joined_1"
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
                                type="text"
                                name="organization"
                                value="Fargona vil DSI"
                                class="vTextField"
                                maxlength="200"
                                required
                                id="id_organization"
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
                                type="text"
                                name="position"
                                value="xodim"
                                class="vTextField"
                                maxlength="200"
                                required
                                id="id_position"
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
                            <i class="fas fa-edit"></i>
                            Actions
                          </h3>
                        </div>
                        <div class="card-body">
                          <div class="form-group">
                            <input
                              type="submit"
                              value="Saqlash"
                              class="btn btn-outline-success form-control"
                              name="_save"
                            />
                          </div>

                          <div class="form-group">
                            <a
                              href="/admin/quizapp/user/24/delete/"
                              class="btn btn-outline-danger form-control"
                              >O'chirish</a
                            >
                          </div>

                          <div class="form-group">
                            <input
                              type="submit"
                              class="btn btn-outline-info form-control"
                              value="Save and add another"
                              name="_addanother"
                            />
                          </div>

                          <div class="form-group">
                            <input
                              type="submit"
                              class="btn btn-outline-info form-control"
                              value="Save and continue editing"
                              name="_continue"
                            />
                          </div>
                        </div>
                      </div>

                      <div class="object-tools">
                        <a
                          class="btn btn-block btn-outline-secondary btn-sm"
                          href="/admin/quizapp/user/24/history/"
                          >History</a
                        >
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
    getUser() {
      return this.$store.getters.user(parseInt(this.id));
    },
  },
  created() {
    this.$store.dispatch("getUsers");
  },
};
</script>

<style scoped>
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
.select2-container--default.select2-container--focus
  .select2-selection--multiple {
  border: solid black 1px;
  outline: 0;
}
.select2-container--default .select2-selection--multiple {
  background-color: white;
  border-radius: 4px;
  cursor: text;
  padding-bottom: 5px;
  padding-right: 5px;
  position: relative;
}
.select2-container .select2-selection--multiple {
  box-sizing: border-box;
  display: block;
  min-height: 32px;
  user-select: none;
  -webkit-user-select: none;
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
</style>
