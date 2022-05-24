<template>
  <div class="container-fluid pt-4">
    <div class="row d-flex justify-content-between mb-3">
      <div class="col-md-8">
        <h1>Dashboard</h1>
      </div>
      <template v-if="isUserAdmin">
        <div class="col-md-3 d-flex align-items-center">
          <base-dropdown
            :options="addedGroups"
            :withObj="true"
            default="Guruh tanlang..."
            @input="selectedGroup"
          ></base-dropdown>
        </div>
      </template>
      <!-- {{ statistics }} -->
      <!-- {{ statistics }} -->
    </div>
    <div v-if="isUserAdmin" class="row dash-chart">
      <div v-if="Object.keys(statistics).length" class="col-lg-3 my-1">
        <div v-if="statistics.number_groups" class="card">
          <div class="card-body d-flex justify-content-between">
            <div class="info w-75">
              <p class="mb-0">Guruhlar</p>
              <p class="fs-2">{{ statistics.number_groups }}</p>
              <span>
                <fa
                  :class="
                    varGroups > 0
                      ? 'text-success'
                      : varGroups < 0
                      ? 'text-danger'
                      : ''
                  "
                  :icon="['fas', 'chart-line']"
                />
                <i
                  :class="
                    varGroups > 0
                      ? 'text-success'
                      : varGroups < 0
                      ? 'text-danger'
                      : ''
                  "
                  >&nbsp;{{ varGroups }}%</i
                >
                Avvalgi oydan</span
              >
            </div>
            <div class="icon-img text-primary">
              <fa class="icon icon-group" :icon="['fas', 'people-group']" />
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-body d-flex justify-content-between">
            <div class="info w-75">
              <p class="mb-0">O'quvchilar</p>
              <p class="fs-2">{{ statistics.number_users }}</p>
              <span>
                <fa
                  :class="
                    varUsers > 0
                      ? 'text-success'
                      : varUsers < 0
                      ? 'text-danger'
                      : ''
                  "
                  :icon="['fas', 'chart-line']"
                />
                <i
                  :class="
                    varUsers > 0
                      ? 'text-success'
                      : varUsers < 0
                      ? 'text-danger'
                      : ''
                  "
                  >&nbsp;{{ varUsers }}%</i
                >
                Avvalgi oydan</span
              >
            </div>
            <div class="icon-img text-primary">
              <fa class="icon icon-group" :icon="['fas', 'user']" />
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-body d-flex justify-content-between">
            <div class="info w-75">
              <p class="mb-0">To'lov qilgan o'quvchilar</p>
              <p class="fs-2">{{ statistics.number_paid_users }}</p>
              <span>
                <fa
                  :class="
                    varPaidUsers > 0
                      ? 'text-success'
                      : varPaidUsers < 0
                      ? 'text-danger'
                      : ''
                  "
                  :icon="['fas', 'chart-line']"
                />
                <i
                  :class="
                    varPaidUsers > 0
                      ? 'text-success'
                      : varPaidUsers < 0
                      ? 'text-danger'
                      : ''
                  "
                  >&nbsp;{{ varPaidUsers }}%</i
                >
                Avvalgi oydan</span
              >
            </div>
            <div class="icon-img text-primary">
              <fa class="icon icon-group" :icon="['fas', 'user-check']" />
            </div>
          </div>
        </div>
      </div>
      <div v-if="Object.keys(statistics).length" class="col-lg-3 my-1">
        <div class="card">
          <div class="card-body d-flex justify-content-between">
            <div class="info w-75">
              <p class="mb-0">Imtihonlar</p>
              <p class="fs-2">{{ statistics.all_exams }}</p>
              <span>
                <fa
                  :class="
                    varExams > 0
                      ? 'text-success'
                      : varExams < 0
                      ? 'text-danger'
                      : ''
                  "
                  :icon="['fas', 'chart-line']"
                />
                <i
                  :class="
                    varExams > 0
                      ? 'text-success'
                      : varExams < 0
                      ? 'text-danger'
                      : ''
                  "
                  >&nbsp;{{ varExams }}%</i
                >
                Avvalgi oydan</span
              >
            </div>
            <div class="icon-img text-primary">
              <fa class="icon icon-group" :icon="['fas', 'list']" />
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-body d-flex justify-content-between">
            <div class="info w-75">
              <p class="mb-0">Topshirilgan imtihonlar</p>
              <p class="fs-2">{{ statistics.taken_exams }}</p>
              <span>
                <fa
                  :class="
                    varTakenExams > 0
                      ? 'text-success'
                      : varTakenExams < 0
                      ? 'text-danger'
                      : ''
                  "
                  :icon="['fas', 'chart-line']"
                />
                <i
                  :class="
                    varTakenExams > 0
                      ? 'text-success'
                      : varTakenExams < 0
                      ? 'text-danger'
                      : ''
                  "
                  >&nbsp;{{ varTakenExams }}%</i
                >
                Avvalgi oydan</span
              >
            </div>
            <div class="icon-img text-primary">
              <fa class="icon icon-group" :icon="['fas', 'list-check']" />
            </div>
          </div>
        </div>
      </div>
      <div
        v-if="
          statistics.passed_users ||
          statistics.failed_users ||
          statistics.missed_users
        "
        class="col-lg-6 my-1"
      >
        <div class="card dash-col">
          <div
            class="card-body d-flex justify-content-center align-items-center"
          >
            <!-- {{  statistics.passed_users }} -->
            <pie-chart
              :series="[
                statistics.passed_users,
                statistics.failed_users,
                statistics.missed_users,
              ]"
            ></pie-chart>
          </div>
        </div>
      </div>
    </div>

    <!-- user dashboard -->
    <div v-if="!isUserAdmin" class="row">
      <!-- {{ getExams }} -->
      <div v-if="examResults.length" class="col-lg-9 table-responsive mb-4">
        <table class="table text-center table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>O'quvchi</th>
              <th>Kurs</th>
              <th>Ball</th>
              <th>Foiz</th>
              <th>Holati</th>
              <th>Sana</th>
              <th>Sertifikat</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="result in examResults" :key="result.id">
              <!-- {{
                result
              }} -->
              <td>{{ result.id }}</td>
              <td>{{ result.user_first_name }} {{ result.user_last_name }}</td>
              <td>{{ result.module_name }}</td>
              <td>{{ result.collect_ball ? result.collect_ball : 0 }}</td>
              <td>{{ result.percent ? result.percent : 0 }} %</td>
              <td
                :class="
                  result.status === 'Passed'
                    ? 'text-success'
                    : result.status === 'Fail'
                    ? 'text-danger'
                    : 'text-warning'
                "
              >
                {{ result.status }}
              </td>
              <td>{{ formatDate(result.date) }}</td>
              <td
                v-if="
                  result.status === 'Passed' && result.payment_status === true
                "
                class="td-link"
              >
                <fa
                  class="link-icon text-primary"
                  @click.prevent="getCertificate(result.id)"
                  :icon="['fas', 'file-arrow-down']"
                />
              </td>
              <td
                v-else-if="
                  result.status === 'Passed' && result.payment_status === false
                "
                class="text-danger"
              >
                To'lanmagan
              </td>
              <td v-else>
                <fa class="text-danger" :icon="['fas', 'circle-xmark']" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-lg-3 spaced-top">
        <div v-for="exam in exams" :key="exam.id" class="card p-3">
          <!-- {{ exam }} -->
          <div class="card-body px-0">
            <h5 class="card-title pb-1">
              {{ exam.variant_name }}
            </h5>
            <p>Boshlanish vaqti: {{ formatDate(exam.start_date) }}</p>
            <p>Tugash vaqti: {{ exam.finish_date }}</p>
            <p>Davomiyligi: {{ exam.duration }} minutes</p>
            <div class="d-flex">
              <router-link
                :to="{
                  name: 'quiz',
                  params: {
                    id: exam.variant_id,
                    examId: exam.id,
                    duration: Math.ceil(
                      (new Date(exam.finish_date.slice(0, -1)) - new Date()) /
                        1000
                    ),
                  },
                }"
              >
                <button class="btn btn-primary">Imtihon boshlash</button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import customAxios from "../api";
import PieChart from "../components/PieChart.vue";
export default {
  data() {
    return {
      fetchTimeInterval: null,
      statistics: {},
      // examResults: [],
      exams: [],
    };
  },
  components: {
    PieChart,
  },
  computed: {
    varGroups() {
      let a =
        ((this.statistics.number_groups -
          this.statistics.last_month_number_groups) /
          this.statistics.last_month_number_groups) *
        100;
      if (a == "Infinity" || a == "-Infinity" || a == "NaN") return 0;
      return a;
    },
    varUsers() {
      let a =
        ((this.statistics.number_users -
          this.statistics.last_month_number_users) /
          this.statistics.last_month_number_users) *
        100;
      if (a == "Infinity" || a == "-Infinity" || a == "NaN") return 0;
      return a;
    },
    varPaidUsers() {
      let a =
        ((this.statistics.number_paid_users -
          this.statistics.last_month_number_paid_users) /
          this.statistics.last_month_number_paid_users) *
        100;
      if (a == "Infinity" || a == "-Infinity" || a == "NaN") return 0;
      return a;
    },
    varExams() {
      let a =
        ((this.statistics.all_exams - this.statistics.last_month_all_exams) /
          this.statistics.last_month_all_exams) *
        100;
      if (a == "Infinity" || a == "-Infinity" || a == "NaN") return 0;
      return a;
    },
    varTakenExams() {
      let a =
        ((this.statistics.taken_exams -
          this.statistics.last_month_taken_exams) /
          this.statistics.last_month_taken_exams) *
        100;
      if (a == "Infinity" || a == "-Infinity" || a == "NaN") return 0;
      return a;
    },
    id() {
      return this.$store.state.userId;
    },
    examResults() {
      return this.$store.getters.examResults;
    },
    groups() {
      return this.$store.getters.groups;
    },
    addedGroups() {
      return [{ id: "all", name: "Umumiy" }, ...this.groups];
    },
    isUserAdmin() {
      return this.$store.state.isAdmin;
    },
  },
  methods: {
    async getCertificate(id) {
      try {
        this.$Progress.start();
        const res = await customAxios.get(
          `operation/sertificate/get/?id=${id}`
        );
        // console.log(res.data.url);
        let fileLink = document.createElement("a");

        fileLink.href = res.data.url;
        fileLink.setAttribute("download", "certificate.docx");
        document.body.appendChild(fileLink);

        this.$Progress.finish();
        fileLink.click();
      } catch {
        this.$Progress.fail();
      }
    },
    async selectedGroup(val) {
      if (val.id === "all") {
        await this.getStatistics();
        return;
      }
      if (typeof val === "string") {
        return;
      }
      const res = await customAxios.get(`filter_statistic/?group_id=${val.id}`);
      // console.log(res.data);
      this.statistics = res.data;
    },
    formatDate(date) {
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
    async getStatistics() {
      try {
        const res = await customAxios.get("statistic/");
        this.statistics = res.data;
      } catch (e) {
        console.log(e.response);
      }
    },

    async getExamByUser() {
      try {
        const res = await customAxios.get(`main/exams/get/?user_id=${this.id}`);
        this.exams = res.data;
        // console.log(this.exams);
      } catch (e) {
        console.log(e.response);
      }
    },
    startFetching() {
      this.fetchTimeInterval = setInterval(() => this.getExamByUser(), 40000);
    },
    refreshing() {
      console.log("hello");
      // location.reload();
    },
  },
  async created() {
    this.$Progress.start();
    if (!this.isUserAdmin) {
      await this.getExamByUser();
      await this.$store.dispatch("getExamResults");
      this.startFetching();
      return;
    }
    await this.getStatistics();
    this.$store.dispatch("getGroups");
  },
  mounted() {
    this.$Progress.finish();
  },
  unmounted() {
    clearInterval(this.fetchTimeInterval);
  },
  // mounted() {
  //   let socket = new WebSocket("ws://quiz.uzarxiv-test.uz/ws/some_url/");

  //   socket.onmessage = function (event) {
  //     let data = JSON.parse(event.data);
  //     console.log(data);
  //     // document.querySelector('#app').innerText = data.message;
  //   };
  // },
};
</script>

<style scoped>
.dash-chart {
  min-height: 45vh;
}
.dash-col {
  height: 92%;
}
.container-fluid h1,
.info p:last-child {
  color: #444;
}
.icon-img {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #c1d3ee;
  height: 55px;
  width: 58px;
  border-radius: 50%;
  padding: 2px;
}

/* .info p:first-child {
  color: #0dcaf0;
} */

.card-title {
  font-weight: 500;
}
/* .icon-users,
.info-users p:first-child {
  color: rgb(151, 52, 243);
}
.icon-exam,
.info-exams p:first-child {
  color: rgb(51, 238, 44);
}
.icon-all-exam,
.info-all-exam p:first-child {
  color: rgb(235, 56, 25);
}
.icon-paid,
.info-paid p:first-child {
  color: rgb(231, 192, 15);
} */
.card {
  margin-bottom: 1.5rem;
}
.icon {
  font-size: 2rem;
}
/* .icon-group,
.info-group p:first-child {
  color: #0dcaf0;#f7f6fb
} */
p {
  margin: 0;
}
.info p:first-child {
  color: rgba(148, 144, 144, 0.8);
  font-weight: bold;
  font-size: 1.1rem;
}
.info span {
  color: rgba(148, 144, 144, 0.9);
}
.info p:last-child {
  font-size: 2rem;
  color: #444;
}

p span {
  line-height: 2;
}
.link-icon {
  font-size: 20px;
  transition: all 0.2s ease;
  cursor: pointer;
  /* pointer-events: none; */
}
.link-icon:hover {
  color: #08367a !important;
}
.link-icon:active {
  color: #156ff7 !important;
}

@media screen and (max-width: 768px) {
  .spaced-top {
    margin-top: 2rem;
  }
}
</style>
