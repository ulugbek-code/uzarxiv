<template>
  <div class="container-fluid app-wrapper">
    <section id="content" class="content">
      <div class="row">
        <div class="container">
          <div class="row mt-4 justify-content-center">
            <div
              v-for="exam in exams"
              :key="exam.id"
              class="card col-lg-3 col-10 mx-2"
            >
              <div class="card-body px-0">
                <h5 v-if="exam.group" class="card-title text-bold">
                  {{ exam.group.name }}
                </h5>
                <br />
                <p>Boshlanish vaqti: {{ getStartDate(exam.start_date) }}</p>
                <p>Tugash vaqti: {{ getStartDate(exam.finish_date) }}</p>
                <p>Davomiyligi: {{ exam.duration }} minutes</p>
                <p>
                  <span class="bg-success text-light p-1"
                    >Passed students: {{ exam.total_passed_students }}
                  </span>
                  <br />

                  <span class="bg-danger text-light p-1"
                    >Yiqilgan o'quvchilar:
                    {{ exam.total_failed_students }} </span
                  ><br />

                  <span class="bg-warning p-1"
                    >Topshirmagan o'quvchilar:
                    {{ exam.total_missed_students }} </span
                  ><br />
                </p>

                <p></p>
                <div class="d-flex" style="justify-content: space-between">
                  <router-link
                    :to="{
                      name: 'operation',
                      params: { id: exam.id },
                    }"
                  >
                    <button class="btn btn-primary">Ko'rish</button>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
.card {
  margin-bottom: 1rem;
}
p span {
  line-height: 2;
}
</style>
