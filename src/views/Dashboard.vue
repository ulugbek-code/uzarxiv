<template>
  <div class="container-fluid pt-4">
    <div class="row">
      <div class="col-md-8">
        <div class="row">
          <div class="col-lg-7">
            <div class="card card-primary card-outline">
              <div class="card-header">
                <h5 class="m-0">QuizApp</h5>
              </div>
              <div class="card-body">
                <table class="table table-sm">
                  <tbody>
                    <tr>
                      <td>
                        <router-link to="/users">Foydalanuvchilar</router-link>
                      </td>
                      <td>
                        <div class="btn-group float-right gap-2">
                          <router-link
                            to="/users"
                            class="btn btn-sm btn-outline-success btn-flat addlink"
                            >Qo'shish</router-link
                          >
                          <router-link
                            to="/users"
                            class="btn btn-sm btn-outline-primary btn-flat changelink"
                            >O'zgartirish</router-link
                          >
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <router-link to="/users">Imtihonlar</router-link>
                      </td>
                      <td>
                        <div class="btn-group float-right gap-2">
                          <router-link
                            to="/users"
                            class="btn btn-sm btn-outline-success btn-flat addlink"
                            >Qo'shish</router-link
                          >
                          <router-link
                            to="/users"
                            class="btn btn-sm btn-outline-primary btn-flat changelink"
                            >O'zgartirish</router-link
                          >
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <router-link to="/users">Kategoriyalar</router-link>
                      </td>
                      <td>
                        <div class="btn-group float-right gap-2">
                          <router-link
                            to="/users"
                            class="btn btn-sm btn-outline-success btn-flat addlink"
                            >Qo'shish</router-link
                          >
                          <router-link
                            to="/users"
                            class="btn btn-sm btn-outline-primary btn-flat changelink"
                            >O'zgartirish</router-link
                          >
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <router-link to="/users">Savollar</router-link>
                      </td>
                      <td>
                        <div class="btn-group float-right gap-2">
                          <router-link
                            to="/users"
                            class="btn btn-sm btn-outline-success btn-flat addlink"
                            >Qo'shish</router-link
                          >
                          <router-link
                            to="/users"
                            class="btn btn-sm btn-outline-primary btn-flat changelink"
                            >O'zgartirish</router-link
                          >
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <router-link to="/users"
                          >Imtihon Natijalari</router-link
                        >
                      </td>
                      <td>
                        <div class="btn-group">
                          <router-link
                            to="/users"
                            class="btn btn-sm btn-outline-success btn-flat addlink"
                            >Ko'rish</router-link
                          >
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <router-link to="/users"
                          >Foydalanuvchi qo'shish</router-link
                        >
                      </td>
                      <td>
                        <div class="btn-group">
                          <router-link
                            to="/users"
                            class="btn btn-sm btn-outline-success btn-flat addlink"
                            >Qo'shish</router-link
                          >
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="module">
          <h3 class="fw-normal">So'ngi harakatlar</h3>
          <div class="timeline">
            <div>
              <fa
                class="time-icon bg-light text-success"
                :icon="['fas', 'plus-circle']"
              />
              <div class="timeline-item">
                <span class="time">
                  <fa :icon="['fas', 'clock']" />
                  1 month ago
                </span>
                <h3 class="timeline-header no-border">TK 1 Variant</h3>
                <div class="timeline-body">"TK 1 Variant" qo'shildi</div>
              </div>
            </div>
            <div>
              <fa
                class="time-icon bg-light text-danger"
                :icon="['fas', 'circle-minus']"
              />
              <div class="timeline-item">
                <span class="time">
                  <fa :icon="['fas', 'clock']" />
                  2 month ago
                </span>
                <h3 class="timeline-header no-border">TK 2 Variant</h3>
              </div>
            </div>
            <div>
              <fa
                class="time-icon bg-light text-danger"
                :icon="['fas', 'circle-minus']"
              />
              <div class="timeline-item">
                <span class="time">
                  <fa :icon="['fas', 'clock']" />
                  2 month ago
                </span>
                <h3 class="timeline-header no-border">TK 3 Variant</h3>
              </div>
            </div>
            <div>
              <fa
                class="time-icon bg-light text-danger"
                :icon="['fas', 'circle-minus']"
              />
              <div class="timeline-item">
                <span class="time">
                  <fa :icon="['fas', 'clock']" />
                  2 month ago
                </span>
                <h3 class="timeline-header no-border">TK 4 Variant</h3>
              </div>
            </div>
            <div>
              <fa
                class="time-icon bg-light text-danger"
                :icon="['fas', 'circle-minus']"
              />
              <div class="timeline-item">
                <span class="time">
                  <fa :icon="['fas', 'clock']" />
                  2 month ago
                </span>
                <h3 class="timeline-header no-border">TK 5 Variant</h3>
              </div>
            </div>
            <div>
              <fa
                class="time-icon bg-light text-secondary"
                :icon="['fas', 'clock']"
              />
            </div>
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
