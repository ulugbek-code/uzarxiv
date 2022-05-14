<template>
  <div class="container-fluid app-wrapper">
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
                <li class="breadcrumb-item active">Guruhlar</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div class="content">
        <div class="container-fluid">
          <section class="content">
            <table class="table table-hover">
              <thead>
                <tr>
                  <th>Nomi</th>
                  <th>Boshlangan sana</th>
                  <th>Tugaydigan sana</th>
                  <th>Module nomi</th>
                  <th>Qisqartma</th>
                </tr>
              </thead>
              <!-- below changed -->
              <tbody v-if="getGroups.length">
                <tr
                  @click="goGroupDetail(group.id)"
                  v-for="group in getGroups"
                  :key="group.id"
                >
                  <td>{{ group.name }}</td>
                  <td>{{ formatDate(group.start_date) }}</td>
                  <td>{{ formatDate(group.finish_date) }}</td>
                  <td>{{ group.module }}</td>
                  <td>{{ group.abbreviation }}</td>
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
  computed: {
    getModules() {
      return this.$store.getters.modules;
    },
    getGroups() {
      return this.$store.getters.groups.map((group) => {
        return {
          ...group,
          module: this.getModules.find((mod) => mod.id === group.module).name,
          abbreviation: this.getModules.find((mod) => mod.id === group.module)
            .AT,
        };
      });
    },
    // filteredGroups() {
    //   return this.getGroups
    // },
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
    this.$store.dispatch("getModules");
    this.$store.dispatch("getGroups");
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
