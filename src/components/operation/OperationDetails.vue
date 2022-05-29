<template>
  <div class="container-fluid app-wrapper">
    <div class="content-wrapper">
      <div class="content-header">
        <div class="container-fluid">
          <div class="row mb-4"></div>
        </div>
      </div>
      <!-- {{ getOperationDetails }} -->
      <div class="content">
        <div class="container-fluid">
          <section class="content">
            <table class="table text-center">
              <thead>
                <tr>
                  <!-- <th>ID</th> -->
                  <th>O'quvchi</th>
                  <th>Kurs</th>
                  <th>Ball</th>
                  <th>Foiz</th>
                  <th>Holati</th>
                  <th>Sana</th>
                  <th>Tavsifi</th>
                  <th>Tahrirlash</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="eachGroup in getOperationDetails"
                  :key="eachGroup.id"
                >
                  <operation-details-row
                    :group="eachGroup"
                    :examId="id"
                  ></operation-details-row>
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
import OperationDetailsRow from "./OperationDetailsRow.vue";
export default {
  props: ["id"],
  components: {
    OperationDetailsRow,
  },

  computed: {
    getOperationDetails() {
      return this.$store.getters.operationDetails;
    },
  },
  async created() {
    this.$Progress.start();
    await this.$store.dispatch("getOperationDetails", this.id);
  },
  mounted() {
    this.$Progress.finish();
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      if (from.path == "/results") vm.$store.commit("activateResult");
      else if (from.name === "group") vm.$store.commit("activateGroup");
    });
  },
  unmounted() {
    this.$store.commit("resetOperation");
    if (this.$store.state.isGroupActive) this.$store.commit("activateGroup");
    else if (this.$store.state.isResultActive)
      this.$store.commit("activateResult");
  },
};
</script>

<style scoped>
table {
  color: #444;
}
</style>
