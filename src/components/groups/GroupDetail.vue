<template>
  <div v-if="groupDetails.length" class="container-fluid app-wrapper">
    <div class="content-wrapper">
      <div class="content-header">
        <div class="container-fluid">
          <div class="row mb-1">
            <div class="col-sm-3 mt-2">
              <h1 class="m-0 fw-normal">Guruhlar</h1>
            </div>
            <div class="col-sm-9 mt-4">
              <ol class="breadcrumb float-end">
                <li class="breadcrumb-item">
                  <router-link to="/">Bosh sahifa</router-link>
                </li>
                <li class="breadcrumb-item">
                  <router-link to="/groups">Guruhlar</router-link>
                </li>
                <li class="breadcrumb-item active">
                  {{ groupDetails[0].group.name }}
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div class="content-info">
        <div class="container-fluid">
          <div class="row justify-content-between">
            <div class="col-sm-3">
              <ul class="list-group">
                <li class="list-group-item">
                  Nomi:
                  <span class="text-success">{{
                    groupDetails[0].group.name
                  }}</span>
                </li>
                <li class="list-group-item">
                  Boshlangan sana:
                  <span class="text-success">{{
                    formatDate(groupDetails[0].group.start_date)
                  }}</span>
                </li>
                <li class="list-group-item">
                  Tugaydigan sana:
                  <span class="text-success">{{
                    formatDate(groupDetails[0].group.finish_date)
                  }}</span>
                </li>
                <li class="list-group-item">
                  Module Nomi:
                  <span class="text-success">{{
                    groupDetails[0].group.module
                  }}</span>
                </li>
              </ul>
            </div>
            <div class="col-sm-3">
              <router-link
                :to="{
                  name: 'exam',
                  params: { id: id },
                }"
              >
                <button type="button" class="btn btn-primary float-end">
                  {{
                    groupDetails[0].group.exams.length > 0
                      ? "Imtihon qayta topshirish"
                      : "Imtihon olish"
                  }}
                </button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="content-table my-4">
        <div class="container-fluid">
          <table class="table table-hover text-center">
            <thead>
              <tr>
                <th>FIO</th>
                <th>Tashkilot</th>
                <th>Pozitsiya</th>
                <th>To'lov holati</th>
                <th>Imtihon holati</th>
                <th>Imtihon sertifikati</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="users in getFilteredDetails" :key="users.user.id">
                <td>
                  {{ `${users.user.first_name} ${users.user.last_name}` }}
                </td>
                <td>{{ users.user.organization }}</td>
                <td>{{ users.user.position }}</td>
                <td>
                  <input :checked="users.payment_status" type="checkbox" />
                  <!-- {{ users.payment_status }}    -->
                </td>
                <td>{{ users.exam_status ? users.exam_status : "Missed" }}</td>

                <td><a :href="users.sertification" target="_blank">link</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="content-results my-4">
        <div class="container-fluid">
          <div class="row mt-2">
            <div
              v-for="exam in groupDetails[0].group.exams"
              :key="exam.id"
              class="card col-lg-3 col-10 mx-2"
            >
              <!-- {{ exam }} -->
              <div class="card-body px-0">
                <h5 class="card-title text-bold pb-1">
                  {{ groupDetails[0].group.name }}
                </h5>
                <p>Boshlanish vaqti: {{ formatDate(exam.start_date) }}</p>
                <p>Tugash vaqti: {{ formatDate(exam.finish_date) }}</p>
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
      <!-- {{ groupDetails }} -->
      <!-- {{ getFilteredDetails }} -->
    </div>
  </div>
</template>

<script>
import customAxios from "../../api";
export default {
  props: ["id"],
  data() {
    return {
      groupDetails: [],
    };
  },
  computed: {
    getFilteredDetails() {
      {
        return this.groupDetails.filter(
          (detail) => !Object.keys(detail).includes("group")
        );
      }
    },
  },
  methods: {
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
    async getGroupDetails(id) {
      try {
        const res = await customAxios.get(
          "main/group/get_details/?group_id=" + id
        );
        this.groupDetails = res.data;
      } catch (e) {
        console.log(e.response);
      }
    },
  },
  created() {
    this.getGroupDetails(this.id);
  },
};
</script>

<style scoped>
.card {
  margin-bottom: 1rem;
}
p {
  margin-bottom: 8px;
}

p span {
  line-height: 2;
}
</style>
