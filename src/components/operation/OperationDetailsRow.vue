<template>
  <td>{{ group.user_first_name }} {{ group.user_last_name }}</td>
  <td>{{ group.module_name }}</td>
  <td>{{ group.collect_ball ? group.collect_ball : 0 }}</td>
  <td>{{ group.percent ? group.percent : 0 }} %</td>
  <td
    :class="
      group.status === 'Passed'
        ? 'text-success'
        : group.status === 'Fail'
        ? 'text-danger'
        : 'text-warning'
    "
  >
    {{ group.status }}
  </td>
  <td>{{ formatDate(group.date) }}</td>
  <td v-if="isLabel" @dblclick="isLabel = false" class="desc">
    {{ group.description ? group.description : "-" }}
  </td>
  <td v-else width="20%">
    <textarea
      v-model="description"
      @blur="closeForm"
      @keydown.enter="addDesc"
      type="text"
      class="form-control"
      rows="1"
      placeholder="description..."
    ></textarea>
  </td>
  <td>
    <router-link
      :to="{
        name: 'operation-result',
        params: { id: group.id },
      }"
    >
      Ko'rish
    </router-link>
  </td>
</template>

<script>
import customAxios from "../../api";
export default {
  props: ["group", "examId"],
  data() {
    return {
      isLabel: true,
      description: this.group.description,
    };
  },
  methods: {
    closeForm() {
      this.isLabel = true;
    },
    async addDesc() {
      await customAxios.post("operation/result/add_description/", {
        id: parseInt(this.group.id),
        description: this.description ? this.description : "-",
      });
      this.description = "";
      this.closeForm();
      await this.$store.dispatch("getOperationDetails", this.examId);
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
    // goGroupDetail(id) {
    //   this.$router.push("/groups/" + id);
    // },
  },
};
</script>

<style scoped>
.desc {
  cursor: pointer;
}

a:hover {
  text-decoration: underline;
}
</style>
