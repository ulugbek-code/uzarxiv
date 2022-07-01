<template>
  <div class="container-fluid app-wrapper">
    <div class="content-wrapper">
      <div class="content-header">
        <div class="container-fluid">
          <div class="row mb-1">
            <div class="col-sm-3 mt-2">
              <h1 class="m-0 fw-normal">Guruhlar</h1>
            </div>
            <div class="col-sm-9 mt-3">
              <router-link
                to="/groups/add-group"
                class="btn btn-outline-success float-end"
              >
                <fa :icon="['fas', 'plus-circle']" />
                Guruh qo'shish
              </router-link>
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
                  <th></th>
                </tr>
              </thead>
              <!-- below changed -->
              <!-- {{
                getGroups
              }} -->
              <tbody v-if="getGroups.length">
                <tr
                  @click="goGroupDetail(group.id)"
                  v-for="group in getGroups"
                  :key="group.id"
                >
                  <td>{{ group?.name }}</td>
                  <td>{{ formatDate(group.start_date) }}</td>
                  <td>{{ formatDate(group.finish_date) }}</td>
                  <td>{{ group.module?.name }}</td>
                  <td>{{ group.module?.AT }}</td>
                  <td>
                    <button
                      @click.prevent.stop="deleteGroup(group.id)"
                      class="btn btn-danger"
                    >
                      <fa class="text-light" :icon="['fas', 'trash-alt']" />
                    </button>
                  </td>
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
import customAxios from "../api";
export default {
  computed: {
    getGroups() {
      return this.$store.getters.groups;
      // .map((group) => {
      //   return {
      //     ...group,
      //     module: this.getModules.find((mod) => mod.id === group.module).name,
      //     abbreviation: this.getModules.find((mod) => mod.id === group.module)
      //       .AT,
      //   };
      // });
    },
    // filteredGroups() {
    //   return this.getGroups
    // },
  },
  methods: {
    async deleteGroup(id) {
      this.$Progress.start();
      if (confirm("Siz haqiqatan ham o'chirmoqchimisiz")) {
        await customAxios.delete(`main/group/${id}/`);
        await this.$store.dispatch("getGroups");
        this.$Progress.finish();
      }
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
    goGroupDetail(id) {
      this.$router.push("/groups/" + id);
    },
  },
  async created() {
    this.$Progress.start();
    // await this.$store.dispatch("getModules");
    if (!this.getGroups.length) {
      await this.$store.dispatch("getGroups");
    }
  },
  mounted() {
    this.$Progress.finish();
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
