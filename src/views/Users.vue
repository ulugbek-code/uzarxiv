<template>
  <div :class="[!isNavOpened ? 'nav' : '']" id="page-container">
    <h1>users</h1>
  </div>
</template>

<script>
export default {
  computed: {
    isNavOpened() {
      return this.$store.getters.isNavOpened;
    },
  },
};
</script>

<style scoped></style>
