<template>
  <div class="container-fluid app-wrapper">
    <div class="content-wrapper">
      <div class="content-header">
        <div class="container-fluid">
          <div class="row mb-4">
            <!-- <div class="col-sm-3 mt-2">
              <h1 class="m-0 fw-normal">Guruhlar</h1>
            </div>
            
            <div class="col-sm-9 mt-4">
              <ol class="breadcrumb float-end">
                <li class="breadcrumb-item">
                  <router-link to="/">Bosh sahifa</router-link>
                </li>
                <li class="breadcrumb-item active">Guruhlar</li>
              </ol>
            </div> -->
          </div>
        </div>
      </div>
      <div class="content">
        <div class="container-fluid">
          <section class="content">
            <table class="table text-center table-hover">
              <thead>
                <tr>
                  <th>ID</th>
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
                <tr v-for="group in getOperationDetails" :key="group.id">
                  <td>{{ group.id }}</td>
                  <td>
                    {{ group.user_first_name }} {{ group.user_last_name }}
                  </td>
                  <td>{{ group.module_name }}</td>
                  <td>{{ group.collect_ball ? group.collect_ball : 0 }}</td>
                  <td>{{ group.percent ? group.percent : 0 }} %</td>
                  <td>{{ group.status }}</td>
                  <td>{{ formatDate(group.date) }}</td>
                  <td>Ko'rish</td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  computed: {
    getOperationDetails() {
      return this.$store.getters.operationDetails;
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
    goGroupDetail(id) {
      this.$router.push("/groups/" + id);
    },
  },
  created() {
    this.$store.dispatch("getOperationDetails", this.id);
  },
};
</script>

<style scoped>
table {
  color: #444;
}
tr {
  cursor: pointer;
}
</style>
