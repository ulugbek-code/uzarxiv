<template>
  <div class="container pt-4">
    <div class="row d-flex justify-content-between mb-4">
      <div class="col-md-8">
        <h1>Dashboard</h1>
        <!-- {{ id }} -->
        <!-- {{ getExams }} -->
      </div>
      <template v-if="isUserAdmin">
        <div class="col-md-3 d-flex align-items-center mx-lg-3">
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
    <div v-if="isUserAdmin" class="row d-flex justify-content-around">
      <div class="col-lg-3 my-2">
        <div class="card">
          <div class="card-body d-flex gap-4">
            <div class="icon-img w-25">
              <!-- <fa class="icon-users" :icon="['fas', 'user']" /> -->
              <img src="../assets/user.png" alt="" />
            </div>
            <div class="info">
              <p>{{ statistics.number_users }}</p>
              <p class="mb-0">O'quvchilar</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 my-2">
        <div class="card">
          <div class="card-body d-flex gap-4">
            <div class="icon-img w-25">
              <!-- <fa class="icon-group" :icon="['fas', 'people-group']" /> -->
              <img src="../assets/groups.png" alt="" />
            </div>
            <div class="info">
              <p>{{ statistics.number_groups }}</p>
              <p class="mb-0">Guruhlar</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 my-2">
        <div class="card">
          <div class="card-body d-flex gap-3">
            <div class="icon-img w-25">
              <!-- <fa class="icon-paid" :icon="['fas', 'user-check']" /> -->
              <img src="../assets/paid.png" alt="" />
            </div>
            <div class="info">
              <p>{{ statistics.number_paid_users }}</p>
              <p class="mb-0">To'langan o'quvchilar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- user dashboard -->
    <div v-else class="row">
      <!-- {{ getExams }} -->
      <div v-if="examResults.length" class="col-lg-9 table-responsive">
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
              <th>Tahrirlash</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="result in examResults" :key="result.id">
              <td>{{ result.id }}</td>
              <td>{{ result.user_first_name }} {{ result.user_last_name }}</td>
              <td>{{ result.module_name }}</td>
              <td>{{ result.collect_ball ? result.collect_ball : 0 }}</td>
              <td>{{ result.percent ? result.percent : 0 }} %</td>
              <td>{{ result.status }}</td>
              <td>{{ formatDate(result.date) }}</td>
              <td>Ko'rish</td>
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
    selectedGroup(val) {
      console.log(val);
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
        console.log(this.exams);
      } catch (e) {
        console.log(e.response.data);
      }
    },
  },
  async created() {
    if (!this.isUserAdmin) {
      await this.$store.dispatch("getExamResults");
      await this.getExamByUser();
      return;
    }
    await this.getStatistics();
    this.$store.dispatch("getGroups");
  },
};
</script>

<style scoped>
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
.icon-users {
  font-size: 3rem;
}
.card {
  margin-bottom: 1rem;
}
p {
  margin-bottom: 8px;
}

p span {
  line-height: 2;
}

@media screen and (max-width: 768px) {
  .spaced-top {
    margin-top: 2rem;
  }
}
</style>
