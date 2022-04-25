<template>
  <div class="container-fluid pt-3">
    <div class="content-header">
      <div class="row mb-3">
        <div class="col-auto">
          <h2 class="m-0 fw-normal">Foydalanuvchilar</h2>
        </div>
      </div>
    </div>
    <div class="content container-fluid">
      <div class="row">
        <div class="col-12 p-0">
          <div class="card card-primary card-outline">
            <div class="card-header">
              <h4 class="card-title">
                O'zgartirish uchun foydalanuvchini tanlang
              </h4>
            </div>
            <div class="card-body">
              <form>
                <div class="module">
                  <div class="row">
                    <div class="col-12">
                      <div class="row">
                        <div class="col-12 col-sm-8">
                          <div class="actions">
                            <div class="for-label">
                              <select
                                class="form-select"
                                aria-label="Default select example"
                              >
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </div>
                            <button
                              type="submit"
                              class="btn btn-outline-primary mx-2 mb-1"
                            >
                              Go
                            </button>
                            <span class="action-counter"
                              >24 dan 0 tanlandi</span
                            >
                          </div>
                        </div>
                        <div class="col-12 col-sm-4"></div>
                      </div>
                      <hr />
                      <div class="card">
                        <div class="card-body table-responsive p-0">
                          <table id="result_list" class="table table-striped">
                            <thead>
                              <tr>
                                <th
                                  class="djn-checkbox-select-all"
                                  tabindex="0"
                                  rowspan="1"
                                  colspan="1"
                                >
                                  <div class="text">
                                    <span
                                      ><input
                                        type="checkbox"
                                        id="action-toggle"
                                    /></span>
                                  </div>
                                </th>

                                <th
                                  class=""
                                  tabindex="0"
                                  rowspan="1"
                                  colspan="1"
                                >
                                  <div class="text">
                                    <span>Foydalanuvchilar</span>
                                  </div>
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr v-for="user in users" :key="user.is">
                                <td class="action-checkbox">
                                  <input
                                    type="checkbox"
                                    :value="user.id"
                                    class="action-select"
                                  />
                                </td>
                                <th class="field-__str__">
                                  <a href="/admin/quizapp/user/24/change/">{{
                                    user.username
                                  }}</a>
                                </th>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-5">
                      <div
                        class="dataTables_info"
                        role="status"
                        aria-live="polite"
                      >
                        {{ users.length }} Foydalanuvchilar
                      </div>
                    </div>

                    <div class="col-7">
                      <ul class="pagination pagination-sm m-0 float-right"></ul>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    users() {
      return this.$store.getters.users;
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
.card-header {
  background-color: transparent;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  padding: 0.75rem 1.25rem;
  position: relative;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}
/* .card-body {
  -webkit-flex: 1 1 auto;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1.25rem;
} */
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
</style>
