<template>
  <div>
    <apexchart
      width="480"
      type="donut"
      :options="options"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
export default {
  props: ["series"],
  data() {
    return {
      options: {
        labels: [
          "Imtihondan o'tganlar",
          "Imtihondan o'tolmaganlar",
          "Imtihon topshirmaganlar",
        ],
        colors: ["#008ffb", "#ff4560", "#feb019"],
      },
    };
  },
};
</script>

<style scoped></style>
