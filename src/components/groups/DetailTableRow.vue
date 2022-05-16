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
      :checked="users.payment_status"
      type="checkbox"
    />
  </td>
  <td>{{ users.exam_status ? users.exam_status : "Missed" }}</td>

  <td><a :href="users.sertification" target="_blank">link</a></td>
</template>

<script>
import customAxios from "../../api";
export default {
  props: ["users", "groupId"],
  data() {
    return {
      paymentStatus: null,
    };
  },
  methods: {
    async updatePayment() {
      //   console.log(this.paymentStatus);
      //   console.log(this.groupId);
      //   console.log(this.users.user.id);
      await customAxios.post("operation/payment/update_status/", [
        {
          status: this.paymentStatus,
          group: parseInt(this.groupId),
          user: this.users.user.id,
        },
      ]);
      await this.$store.dispatch("getGroups");
    },
  },
};
</script>

<style scoped></style>
