<template>
  <td>
    {{ `${users.user.first_name} ${users.user.last_name}` }}
  </td>
  <td>{{ users.user.organization }}</td>
  <td>{{ users.user.position }}</td>
  <td>
    <input
      v-model="paymentStatus"
      @change="updatePayment"
      type="checkbox"
      :disabled="isLoading"
    />
  </td>
  <td
    :class="
      users.exam_status === 'Passed'
        ? 'text-success'
        : users.exam_status === 'Fail'
        ? 'text-danger'
        : 'text-secondary'
    "
  >
    {{
      users.exam_status === "Passed"
        ? "O'tgan"
        : users.exam_status === "Fail"
        ? "O'tolmagan"
        : users.exam_status === "not_submit"
        ? "O'tkazib yuborgan"
        : "Topshirmagan"
    }}
  </td>
  <!--users.operation_id && users.payment_status && users.exam_status === 'Pass' for below td -->
  <!-- @click.prevent="getCertificate(users.operation_id)" -->
  <td
    v-if="users.operation_id && users.exam_status === 'Passed'"
    class="td-link"
  >
    <fa
      class="link-icon text-primary"
      @click.prevent="getCertificate(users.operation_id)"
      :icon="['fas', 'file-arrow-down']"
    />
  </td>
  <td v-else>
    <fa class="text-danger" :icon="['fas', 'circle-xmark']" />
  </td>
</template>

<script>
import customAxios from "../../api";
export default {
  props: ["users", "groupId"],
  emits: ["updatedStatus"],
  data() {
    return {
      paymentStatus: null,
      isLoading: false,
    };
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
    async updatePayment() {
      try {
        this.$Progress.start();
        this.isLoading = true;

        await customAxios.post("operation/payment/update_status/", [
          {
            status: this.paymentStatus,
            group: parseInt(this.groupId),
            user: this.users.user.id,
          },
        ]);
        this.$Progress.finish();
        this.isLoading = false;
        this.$emit("updatedStatus");
      } catch {
        this.$Progress.fail();
      }

      // await this.$store.dispatch("getGroups");
    },
  },
  created() {
    this.paymentStatus = this.users.payment_status;
  },
};
</script>

<style scoped>
input,
.link-icon {
  cursor: pointer;
}
.link-icon {
  font-size: 20px;
  transition: all 0.2s ease;
  /* pointer-events: none; */
}
.link-icon:hover {
  color: #08367a !important;
}
.link-icon:active {
  color: #156ff7 !important;
}
</style>
