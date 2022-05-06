<template>
  <div class="container-fluid app-wrapper">
    <div class="content-wrapper">
      <div class="content-header">
        <div class="container-fluid">
          <div class="row mb-1">
            <div class="col-sm-3 mt-2">
              <h1 class="m-0 fw-normal">Imtihonlar</h1>
            </div>
            <div class="col-sm-9 mt-4">
              <ol class="breadcrumb float-end">
                <li class="breadcrumb-item">
                  <a href="/admin/">Bosh sahifa</a>
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
                    <h4 class="card-title">
                      O'zgartirish uchun imtihonni tanlang
                    </h4>
                    <div class="card-tools form-inline">
                      <form class="form-inline">
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
                                      <th class="sorting">
                                        <div class="text">
                                          <a>ID</a>
                                        </div>
                                      </th>

                                      <th class="sorting">
                                        <div class="text">
                                          <a>Kategoriya</a>
                                        </div>
                                      </th>

                                      <th class="sorting">
                                        <div class="text">
                                          <a>Ochilish sanasi</a>
                                        </div>
                                      </th>

                                      <th class="sorting">
                                        <div class="text">
                                          <a>Davomiyligi</a>
                                        </div>
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr v-for="exam in exams" :key="exam.id">
                                      <td class="field-id">{{ exam.id }}</td>
                                      <th class="field-subject nowrap">
                                        <!-- <a
                                          href="/admin/quizapp/exam/18/change/"
                                          >{{ exam.group.name }}</a
                                        > -->
                                        <router-link
                                          :to="{
                                            name: 'exam',
                                            params: { id: exam.id },
                                          }"
                                          >{{ exam.group.name }}</router-link
                                        >
                                      </th>
                                      <td class="field-start_date nowrap">
                                        <!-- 19-Mart, 2022-yil 0:39 -->
                                        {{ getStartDate(exam.start_date) }}
                                      </td>
                                      <td class="field-duration">
                                        {{ exam.duration }}
                                      </td>
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
                              {{ exams.length }} Imtihonlar
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
    exams() {
      return this.$store.getters.exams;
    },
  },
  methods: {
    getStartDate(date) {
      let day = new Date(date).toUTCString().slice(5, 22);
      day =
        day.substring(0, 2) +
        "-" +
        day.substring(3, 6) +
        ", " +
        day.substring(7, 11) +
        "-yil" +
        day.substring(11);
      return day;
    },
  },
  created() {
    this.$store.dispatch("getExams");
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
</style>
