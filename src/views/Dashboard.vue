<template>
  <div class="container-fluid pt-2">
    <div class="row d-flex justify-content-between mt-2">
      <div class="col-md-4">
        <h1>Dashboard</h1>
        <!-- {{ statistics }} -->
      </div>
      <template v-if="isUserAdmin">
        <div class="col-md-5 d-flex align-items-center">
          <span>Dan: </span>
          <input
            v-model="grStartDate"
            class="form-control w-75 mx-md-2"
            type="date"
          />
          <span>Gacha: </span>
          <input
            v-model="grFinishDate"
            class="form-control w-75 mx-md-2"
            type="date"
          />
        </div>

        <div class="col-md-3 d-flex align-items-center my-md-0 my-2">
          <base-dropdown
            :options="addedGroups"
            :withObj="true"
            default="Guruh tanlang..."
            @input="selectedGroup"
          ></base-dropdown>
        </div>
      </template>
    </div>
    <template v-if="isUserAdmin">
      <div class="row dash-chart">
        <div v-if="Object.keys(statistics).length" class="col-lg-3 my-1">
          <div class="card">
            <div class="card-body d-flex justify-content-between">
              <div class="info w-75">
                <p class="mb-0">Guruhlar</p>
                <p class="fs-2">
                  {{ statistics.number_groups }}
                </p>
                <!-- <span v-if="!groupId">
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
              > -->
              </div>
              <div class="icon-img text-primary">
                <fa class="icon icon-group" :icon="['fas', 'people-group']" />
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-body d-flex justify-content-between">
              <div class="info w-75">
                <p class="mb-0">To'lov qilgan o'quvchilar</p>
                <p class="fs-2">{{ statistics.number_paid_users }}</p>
              </div>
              <div class="icon-img text-primary">
                <fa class="icon icon-group" :icon="['fas', 'user-check']" />
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-body d-flex justify-content-between">
              <div class="info w-75">
                <p class="mb-0">Barcha o'quvchilar</p>
                <p class="fs-2">{{ statistics.number_users }}</p>
              </div>
              <div class="icon-img text-primary">
                <fa class="icon icon-group" :icon="['fas', 'user']" />
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
              </div>
              <div class="icon-img text-primary">
                <fa class="icon icon-group" :icon="['fas', 'list-check']" />
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-body d-flex justify-content-between">
              <div class="info w-75">
                <p class="mb-0">Olingan sertifikatlar</p>
                <p class="fs-2">
                  {{
                    statistics.number_certificate
                      ? statistics.number_certificate
                      : 0
                  }}
                </p>
              </div>
              <div class="icon-img text-primary">
                <fa
                  class="icon icon-group"
                  :icon="['fas', 'square-poll-horizontal']"
                />
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
          class="col-lg-6 mt-1 mb-3"
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
      <!-- third row in admin -->
      <div
        v-if="
          statistics.passed_users ||
          statistics.failed_users ||
          statistics.missed_users
        "
        class="row"
      >
        <div v-if="Object.keys(statistics).length" class="col-lg-4">
          <div @click="goToUserStatus(1)" class="card card-pointer">
            <div class="card-body d-flex justify-content-between">
              <div class="info w-75">
                <p class="mb-0">Imtihondan a'lo o'tganlar</p>
                <p class="fs-2">{{ statistics.passed_users }}</p>
              </div>
              <div class="icon-img text-primary">
                <fa class="icon icon-group" :icon="['fas', 'check-circle']" />
              </div>
            </div>
          </div>
        </div>
        <div v-if="Object.keys(statistics).length" class="col-lg-4">
          <div @click="goToUserStatus(2)" class="card card-pointer">
            <div class="card-body d-flex justify-content-between">
              <div class="info w-75">
                <p class="mb-0">Imtihondan o'tolmaganlar</p>
                <p class="fs-2">{{ statistics.failed_users }}</p>
              </div>
              <div class="icon-img text-primary">
                <fa class="icon icon-group" :icon="['fas', 'circle-xmark']" />
              </div>
            </div>
          </div>
        </div>
        <div v-if="Object.keys(statistics).length" class="col-lg-4">
          <div @click="goToUserStatus(3)" class="card card-pointer">
            <div class="card-body d-flex justify-content-between">
              <div class="info w-75">
                <p class="mb-0">Imtihon topshirmaganlar</p>
                <p class="fs-2">{{ statistics.missed_users }}</p>
              </div>
              <div class="icon-img text-primary">
                <fa
                  class="icon icon-group"
                  :icon="['fas', 'question-circle']"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>

    <!-- user dashboard -->
    <div v-if="!isUserAdmin" class="row">
      <!-- {{ getExams }} -->
      <div v-if="examResults.length" class="col-lg-9 table-responsive mb-4">
        <table class="table table-responsive text-center table-hover">
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
                {{
                  result.status === "Passed"
                    ? "O'tgan"
                    : result.status === "Fail"
                    ? "O'tolmagan"
                    : result.status === "not_submit"
                    ? "O'tkazib yuborgan"
                    : "Topshirmagan"
                }}
                <!-- {{ result.status }} -->
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
      <!-- {{ changedExams }} -->
      <div class="col-lg-3 spaced-top my-sm-0 my-2">
        <div v-for="exam in changedExams" :key="exam.id" class="card p-3">
          <div class="card-body px-0">
            <h5 class="card-title pb-1">
              {{ exam.variant_name }}
            </h5>
            <p>Boshlanish vaqti: {{ formatDate(exam.start_date) }}</p>
            <p>Tugash vaqti: {{ formatDate(exam.finish_date) }}</p>
            <p>Davomiyligi: {{ exam.duration }} minutes</p>
            <div class="d-flex">
              <router-link
                :to="{
                  name: 'quiz',
                  params: {
                    id: exam.variant_id,
                    examId: exam.id,
                    groupId: exam.group_id,
                    duration: exam.newDuration,
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
      groupId: null,
      grStartDate: null,
      grFinishDate: null,
      // statistics: {},
    };
  },
  components: {
    PieChart,
  },
  computed: {
    statistics() {
      return this.$store.getters.statistics;
    },
    exams() {
      return this.$store.getters.userExams;
    },
    changedExams() {
      return this.exams.map((exam) => {
        return {
          ...exam,
          newDuration: Math.ceil(
            (new Date(exam.finish_date.slice(0, -1)) - new Date()) / 1000
          ),
        };
      });
    },
    // varGroups() {
    //   if (Object.keys(this.statistics).length) {
    //     return this.varianceCalc(
    //       this.current_month_number_groups,
    //       this.last_month_number_groups
    //     );
    //   } else return 0;
    // },
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
    // varianceCalc(current, last) {
    //   let a = ((current - last) / last) * 100;
    //   if (a == "Infinity" || a == "-Infinity" || isNaN(a)) return 0;
    //   return a;
    // },
    goToUserStatus(s) {
      this.$router.push({
        name: "user-status",
        params: {
          status: s,
          group: this.groupId ? this.groupId : "null",
          start: this.grStartDate ? this.grStartDate : "null",
          finish: this.grFinishDate ? this.grFinishDate : "null",
        },
      });
    },
    async getCertificate(id) {
      try {
        this.$Progress.start();
        const res = await customAxios.get(
          `operation/sertificate/get/?id=${id}`
        );
        let fileLink = document.createElement("a");
        fileLink.setAttribute("target", "_blank");
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
        this.groupId = null;
        if (this.grStartDate && this.grFinishDate) {
          this.$store.dispatch("getStatisticsByDate", {
            start: this.grStartDate,
            finish: this.grFinishDate,
            groupId: this.groupId,
          });
          return;
        }
        await this.$store.dispatch("getStatistics");
        return;
      }
      if (typeof val === "string") {
        this.groupId = null;
        return;
      }
      this.groupId = val.id;
      if (!this.grStartDate && !this.grFinishDate) {
        await this.$store.dispatch("getStatisticsByGroup", {
          groupId: this.groupId,
          start: this.grStartDate,
          finish: this.grFinishDate,
        });
        return;
      }
      if (this.grStartDate && this.grFinishDate)
        await this.$store.dispatch("getStatisticsByGroup", {
          groupId: this.groupId,
          start: this.grStartDate,
          finish: this.grFinishDate,
        });
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
    startFetching() {
      this.fetchTimeInterval = setInterval(
        () => this.$store.dispatch("getUserExams"),
        40000
      );
    },
  },
  async created() {
    this.$Progress.start();
    if (!this.isUserAdmin) {
      await this.$store.dispatch("getUserExams");
      await this.$store.dispatch("getExamResults");
      this.startFetching();
      return;
    }
    if (!this.groups.length) this.$store.dispatch("getGroups");
    await this.$store.dispatch("getStatistics");
  },
  mounted() {
    this.$Progress.finish();
  },
  watch: {
    grStartDate(val) {
      if (val && this.grFinishDate && this.groupId)
        this.$store.dispatch("getStatisticsByGroup", {
          groupId: this.groupId,
          start: this.grStartDate,
          finish: this.grFinishDate,
        });
      if (val && this.grFinishDate && !this.groupId)
        this.$store.dispatch("getStatisticsByDate", {
          start: this.grStartDate,
          finish: this.grFinishDate,
          groupId: this.groupId,
        });
    },
    grFinishDate(val) {
      if (val && this.grStartDate && this.groupId)
        this.$store.dispatch("getStatisticsByGroup", {
          groupId: this.groupId,
          start: this.grStartDate,
          finish: this.grFinishDate,
        });
      if (val && this.grStartDate && !this.groupId)
        this.$store.dispatch("getStatisticsByDate", {
          start: this.grStartDate,
          finish: this.grFinishDate,
          groupId: this.groupId,
        });
    },
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
/* .dash-chart {
  min-height: 50vh;
} */
.card-pointer {
  cursor: pointer;
}
.card-pointer:hover {
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
}
.dash-col {
  height: 99%;
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
  height: 45px;
  width: 48px;
  border-radius: 50%;
  padding: 2px;
}
.card-title {
  font-weight: 500;
}

.card {
  margin: 0.5rem 0;
}
.icon {
  font-size: 1.6rem;
}
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
input[type="date"]::-webkit-inner-spin-button,
input[type="date"]::-webkit-calendar-picker-indicator {
  filter: invert(0.4);
}
input[type="date"] {
  color: #444;
}

@media screen and (max-width: 768px) {
  .spaced-top {
    margin-top: 2rem;
  }
  /* .dash-col {
    flex-wrap: wrap;
  } */
}
</style>
