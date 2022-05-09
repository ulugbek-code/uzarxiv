<template>
  <div class="container-fluid pt-4">
    <div class="row">
      <h1>Dashboard</h1>
      {{ statistics }}
    </div>
  </div>
</template>

<script>
import customAxios from "../api";
export default {
  data() {
    return {
      statistics: [],
    };
  },
  methods: {
    async getStatistics() {
      try {
        const res = await customAxios.get("statistic/");
        this.statistics = res.data;
      } catch (e) {
        console.log(e.response);
      }
    },
  },
  created() {
    this.getStatistics();
  },
};
</script>

<style scoped>
.timeline {
  margin: 0 0 45px;
  padding: 0;
  position: relative;
}
.timeline::before {
  border-radius: 0.25rem;
  background-color: #dee2e6;
  bottom: 0;
  content: "";
  left: 31px;
  margin: 0;
  position: absolute;
  top: 0;
  width: 4px;
}
.timeline > div {
  margin-bottom: 15px;
  margin-right: 10px;
  position: relative;
}
.timeline > div::after,
.timeline > div::before {
  content: "";
  display: table;
}
.timeline > div > .timeline-item {
  box-shadow: 0 0 1px rgb(0 0 0 / 13%), 0 1px 3px rgb(0 0 0 / 20%);
  border-radius: 0.25rem;
  background-color: #fff;
  color: #495057;
  margin-left: 60px;
  margin-right: 15px;
  margin-top: 0;
  padding: 0;
  position: relative;
}
.timeline > div > .timeline-item > .time {
  color: #999;
  float: right;
  font-size: 12px;
  padding: 10px;
}
.timeline > div > .timeline-item > .timeline-header {
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  color: #495057;
  font-size: 16px;
  line-height: 1.1;
  margin: 0;
  padding: 10px;
}
.timeline > div > .timeline-item > .timeline-body {
  padding: 10px;
}
.time-icon {
  border-radius: 50%;
  font-size: 16px;
  height: 26px;
  left: 20px;
  line-height: 30px;
  position: absolute;
  text-align: center;
  top: 0;
  width: 26px;
}
</style>
