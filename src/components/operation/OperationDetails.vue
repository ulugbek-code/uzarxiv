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
  unmounted() {
    this.$store.commit("resetOperation");
  },
};
</script>

<style scoped>
table {
  color: #444;
}
</style>
