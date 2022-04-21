<template>
  <div class="container-fluid pt-3">
    <div class="content-header">
      <div class="row mb-2">
        <div class="col-auto">
          <h2 class="m-0 fw-normal">Foydalanuvchilar</h2>
        </div>
      </div>
    </div>
    <div class="content container-fluid">
      <div class="row">
        <div class="col-12 p-0">
          <div class="card card-primary card-outline">
            <div class="card-header">
              <h4 class="card-title">Select user to change</h4>
            </div>
            <div class="card-body"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.card-primary.card-outline {
  border-top: 3px solid #007bff;
}
.card-header {
  background-color: transparent;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  padding: 0.75rem 1.25rem;
  position: relative;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}
</style>
