<template>
  <div class="container pt-4">
    <div class="row d-flex justify-content-between mb-3">
      <div class="col-md-8">
        <h1>Dashboard</h1>
        <!-- {{ id }} -->
        <!-- {{ getExams }} -->
      </div>
      <template v-if="isUserAdmin">
        <div class="col-md-3 d-flex align-items-center">
          <base-dropdown
            :options="groups"
            :withObj="true"
            default="Guruh tanlang..."
            @input="selectedGroup"
          ></base-dropdown>
        </div>
      </template>
      <!-- {{ statistics }} -->
    </div>
    <div v-if="isUserAdmin" class="row d-flex justify-content-center">
      <div class="col-lg-3 my-1">
        <div class="card">
          <div class="card-body d-flex gap-3">
            <div class="icon-img w-25">
              <fa class="icon icon-users" :icon="['fas', 'user']" />
              <!-- <img src="../assets/user.png" alt="" /> -->
            </div>
            <div class="info-users">
              <p>{{ statistics.number_users }}</p>
              <p class="mb-0">O'quvchilar</p>
            </div>
          </div>
        </div>
      </div>
      <div v-if="statistics.number_groups" class="col-lg-3 my-1">
        <div class="card">
          <div class="card-body d-flex gap-3">
            <div class="icon-img w-25">
              <fa class="icon icon-group" :icon="['fas', 'people-group']" />
            </div>
            <div class="info-group">
              <p>{{ statistics.number_groups }}</p>
              <p class="mb-0">Guruhlar</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 my-1">
        <div class="card">
          <div class="card-body d-flex gap-3">
            <div class="icon-img w-25">
              <fa class="icon icon-all-exam" :icon="['fas', 'list']" />
              <!-- <img src="../assets/exam.png" alt="" /> -->
            </div>
            <div class="info-all-exam">
              <p>
                {{ statistics.all_exams }}
              </p>
              <p class="mb-0">Imtihonlar</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 my-1">
        <div class="card">
          <div class="card-body d-flex gap-2">
            <div class="icon-img w-25">
              <fa class="icon icon-exam" :icon="['fas', 'list-check']" />
              <!-- <img src="../assets/exam.png" alt="" /> -->
            </div>
            <div class="info-exams">
              <p>
                {{ statistics.taken_exams }}
              </p>
              <p class="mb-0">Topshirilgan imtihonlar</p>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="col-lg-3 my-1">
       
      </div> -->
    </div>
    <div class="row dash-chart">
      <div class="col-lg-9 my-3">
        <div class="card dash-col">
          <div
            class="card-body d-flex justify-content-center align-items-center"
          >
            Chart
          </div>
        </div>
      </div>
      <div class="col-lg-3 mt-3">
        <div class="card">
          <div class="card-body d-flex gap-2">
            <div class="icon-img w-25">
              <fa class="icon icon-paid" :icon="['fas', 'user-check']" />
              <!-- <img src="../assets/paid.png" alt="" /> -->
            </div>
            <div class="info-paid">
              <p>{{ statistics.number_paid_users }}</p>
              <p class="mb-0">To'langan o'quvchilar</p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-body d-flex gap-2">
            <div class="icon-img w-25">
              <fa class="icon icon-users" :icon="['fas', 'user']" />
              <!-- <img src="../assets/user.png" alt="" /> -->
            </div>
            <div class="info-users">
              <p>{{ statistics.passed_users }}</p>
              <p class="mb-0">Imtihondan o'tganlar</p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-body d-flex gap-2">
            <div class="icon-img w-25">
              <fa class="icon icon-users" :icon="['fas', 'user']" />
              <!-- <img src="../assets/user.png" alt="" /> -->
            </div>
            <div class="info-users">
              <p>{{ statistics.failed_users }}</p>
              <p class="mb-0">Imtihondan yeqilganlar</p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-body d-flex gap-2">
            <div class="icon-img w-25">
              <fa class="icon icon-users" :icon="['fas', 'user']" />
              <!-- <img src="../assets/user.png" alt="" /> -->
            </div>
            <div class="info-users">
              <p>{{ statistics.missed_users }}</p>
              <p class="mb-0">Imtihon topshirmaganlar</p>
            </div>
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
              <td>{{ result.status }}</td>
              <td>{{ formatDate(result.date) }}</td>
              <td
                v-if="
                  result.status === 'Pass' && result.payment_status === true
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
                  result.status === 'Pass' && result.payment_status === false
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
            <p>Tugash vaqti: {{ formatDate(exam.finish_date) }}</p>
            <p>Davomiyligi: {{ exam.duration }} minutes</p>
            <div class="d-flex">
              <router-link
                :to="{
                  name: 'quiz',
                  params: {
                    id: exam.variant_id,
                    examId: exam.id,
                    duration: exam.duration,
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
export default {
  data() {
    return {
      fetchTimeInterval: null,
      statistics: [],
      // examResults: [],
      exams: [],
    };
  },
  computed: {
    id() {
      return this.$store.state.userId;
    },
    examResults() {
      return this.$store.getters.examResults;
    },
    groups() {
      return this.$store.getters.groups;
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
      if (typeof val === "string") return;
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
        "-yil";
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
        console.log(e.response.data);
      }
    },
    startFetching() {
      this.fetchTimeInterval = setInterval(() => this.getExamByUser(), 40000);
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
  height: 100%;
}
.container h1,
.info p:first-child {
  color: #444;
}
.icon-img {
  display: flex;
  justify-content: center;
  align-items: center;
}
.info p:first-child {
  font-size: 2rem;
}

.info p:last-child {
  color: #0dcaf0;
}

.card-title {
  font-weight: 500;
}
.icon-users,
.info-users p:last-child {
  color: rgb(151, 52, 243);
}
.icon-exam,
.info-exams p:last-child {
  color: rgb(51, 238, 44);
}
.icon-all-exam,
.info-all-exam p:last-child {
  color: rgb(235, 56, 25);
}
.icon-paid,
.info-paid p:last-child {
  color: rgb(231, 192, 15);
}
.card {
  margin-bottom: 1rem;
}
.icon {
  font-size: 2rem;
}
.icon-group,
.info-group p:last-child {
  color: #0dcaf0;
}
p {
  margin-bottom: 8px;
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
