<template>
  <div class="container-fluid app-wrapper">
    <div class="content-wrapper">
      <div class="content-header">
        <div class="container-fluid">
          <div class="row mb-1">
            <div class="col-sm-3 mt-2">
              <h1 class="m-0 fw-normal">Savollar</h1>
            </div>
            <div class="col-sm-9 mt-4">
              <ol class="breadcrumb float-end">
                <li class="breadcrumb-item">
                  <router-link to="/">Bosh sahifa</router-link>
                </li>
                <li class="breadcrumb-item active">Imtihonlar</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div class="content">
        <div class="container-fluid">
          <section id="content" class="content">
            <div class="row">
              <div class="col-12">
                <div class="card card-primary card-outline">
                  <div class="card-header mt-2">
                    <h4 class="card-title fw-normal">
                      O'zgartirish uchun savolni tanlang
                    </h4>
                    <div class="card-tools form-inline">
                      <form
                        id="changelist-search"
                        class="form-inline"
                        method="GET"
                      >
                        <div class="form-group">
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
                          class="btn btn-outline-primary mx-1"
                        >
                          Izlash
                        </button>
                      </form>
                    </div>
                  </div>

                  <div class="card-body">
                    <!-- <form> -->
                    <div id="content-main">
                      <div class="module filtered" id="changelist">
                        <div class="row">
                          <div class="col-lg-12">
                            <div class="row">
                              <div class="col-12 col-sm-8">
                                <div class="actions">
                                  <label>
                                    <select
                                      class="form-select"
                                      aria-label="Default select example"
                                    >
                                      <option selected>
                                        Open this select menu
                                      </option>
                                      <option value="1">One</option>
                                      <option value="2">Two</option>
                                      <option value="3">Three</option>
                                    </select> </label
                                  ><label
                                    ><input
                                      type="hidden"
                                      name="select_across"
                                      value="0"
                                      class="select-across"
                                  /></label>

                                  <button
                                    type="submit"
                                    class="btn btn-outline-primary"
                                    style="margin-right: 5px; margin-left: 15px"
                                    title="Tanlangan faoliyatni ishga tushirish"
                                    name="index"
                                    value="0"
                                  >
                                    Go
                                  </button>

                                  <span
                                    class="action-counter"
                                    data-actions-icnt="4"
                                    >0 of 4 selected</span
                                  >
                                </div>
                              </div>
                              <div class="col-12 col-sm-4">
                                <a
                                  href="/admin/quizapp/exam/add/"
                                  class="btn btn-outline-success float-end"
                                >
                                  <fa :icon="['fas', 'plus-circle']" /> &nbsp;
                                  Imtihon qo'shish
                                </a>
                              </div>
                            </div>
                            <hr />

                            <div class="card">
                              <div class="card-body table-responsive p-0">
                                <table
                                  id="result_list"
                                  class="table table-striped"
                                >
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
                                        class="sorting"
                                        tabindex="0"
                                        rowspan="1"
                                        colspan="1"
                                      >
                                        <div class="text">
                                          <a href="#">Savollar</a>
                                        </div>
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr v-for="q in questions" :key="q.id">
                                      <td class="action-checkbox">
                                        <input
                                          type="checkbox"
                                          :value="q.id"
                                          class="action-select"
                                        />
                                      </td>

                                      <th class="field-subject nowrap">
                                        <router-link
                                          :to="{
                                            name: 'question',
                                            params: { id: q.id },
                                          }"
                                          >{{ q.name }}</router-link
                                        >
                                      </th>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="row mt-2">
                          <div class="col-5">
                            <div
                              class="dataTables_info"
                              role="status"
                              aria-live="polite"
                            >
                              {{ questions.length }} Savollar
                            </div>
                          </div>

                          <div class="col-7">
                            <ul
                              class="pagination pagination-sm m-0 float-right"
                            ></ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- </form> -->
                  </div>
                </div>
                <br class="clear" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    questions() {
      return this.$store.getters.questions;
    },
  },
  created() {
    this.$store.dispatch("getQuestions");
  },
};
</script>

<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  background-color: transparent;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  /* padding: 0.75rem 1.25rem; */
  position: relative;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}
form {
  display: flex;
  align-items: center;
}
.card-primary.card-outline {
  border-top: 3px solid #007bff;
}
.card-body {
  -webkit-flex: 1 1 auto;
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1.25rem;
}
.table td.action-checkbox,
.djn-checkbox-select-all {
  width: 45px;
  padding-left: 1.5rem;
}
</style>
