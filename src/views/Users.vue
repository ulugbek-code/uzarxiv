<template>
  <div class="container-fluid pt-3">
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-1">
          <div class="col-sm-3 mt-2">
            <h1 class="m-0 fw-normal">Foydalanuvchilar</h1>
          </div>
          <div class="col-sm-9 mt-4">
            <ol class="breadcrumb float-end">
              <li class="breadcrumb-item">
                <a href="/admin/">Bosh sahifa</a>
              </li>
              <li class="breadcrumb-item active">Foydalanuvchilar</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    <div class="content container-fluid">
      <div class="row">
        <div class="col-12 p-0">
          <div class="card card-primary card-outline">
            <div class="card-header">
              <h4 class="card-title">
                O'zgartirish uchun foydalanuvchini tanlang
              </h4>
            </div>
            <div class="card-body">
              <form>
                <div class="module">
                  <div class="row">
                    <div class="col-12">
                      <div class="row">
                        <div class="col-md-4">
                          <div class="actions">
                            <div class="input-group mb-3">
                              <input
                                v-model.trim="search"
                                type="text"
                                class="form-control"
                                placeholder="Qidiruv..."
                              />
                              <span class="input-group-text">
                                <fa
                                  class="text-secondary"
                                  :icon="['fas', 'search']"
                              /></span>
                            </div>
                          </div>
                        </div>
                        <div class="col-12 col-sm-4"></div>
                      </div>
                      <hr />
                      <div class="card">
                        <div class="card-body table-responsive p-0">
                          <table class="table table-hover">
                            <thead>
                              <tr>
                                <th
                                  class="sorting"
                                  tabindex="0"
                                  rowspan="1"
                                  colspan="1"
                                >
                                  <div class="text">
                                    <span>Foydalanuvchilar</span>
                                  </div>
                                </th>
                                <th class="sorting">
                                  <div class="text">
                                    <span>Passport raqami</span>
                                  </div>
                                </th>
                                <th class="sorting">
                                  <div class="text">
                                    <span>Tashkilot</span>
                                  </div>
                                </th>
                                <th class="sorting">
                                  <div class="text">
                                    <span>Pozitsiya</span>
                                  </div>
                                </th>
                                <th class="sorting">
                                  <div class="text">
                                    <span></span>
                                  </div>
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr v-for="user in filteredUsers" :key="user.id">
                                <td>
                                  <!-- <router-link :to="`/users/${user.id}`">{{user.username}}</router-link> -->
                                  <router-link
                                    :to="{
                                      name: 'user',
                                      params: { id: user.pass_number },
                                    }"
                                    >{{ user.username }}</router-link
                                  >
                                </td>
                                <td>{{ user.pass_number }}</td>
                                <td>{{ user.organization }}</td>
                                <td>{{ user.position }}</td>
                                <td>
                                  <button
                                    @click="goUserDetails(user.pass_number)"
                                    class="btn btn-warning mx-2"
                                  >
                                    <fa
                                      class="text-light"
                                      :icon="['fas', 'pencil']"
                                    />
                                  </button>
                                  <button
                                    @click="deleteUser(user.id)"
                                    class="btn btn-danger"
                                  >
                                    <fa
                                      class="text-light"
                                      :icon="['fas', 'trash-alt']"
                                    />
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-5">
                      <div
                        class="dataTables_info"
                        role="status"
                        aria-live="polite"
                      >
                        {{ filteredUsers.length }} ta foydalanuvchilar
                      </div>
                    </div>

                    <div class="col-7">
                      <ul class="pagination pagination-sm m-0 float-right"></ul>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import costumAxios from "../api";
export default {
  data() {
    return {
      search: "",
    };
  },
  computed: {
    filteredUsers() {
      return this.users.filter((user) => {
        return (
          user.pass_number.toLowerCase().includes(this.search.toLowerCase()) ||
          user.username.toLowerCase().includes(this.search.toLowerCase())
        );
      });
    },
    users() {
      return this.$store.getters.users;
    },
  },
  methods: {
    goUserDetails(userId) {
      this.$router.push({ name: "user", params: { id: userId } });
    },
    async deleteUser(id) {
      if (confirm("Siz haqiqatan ham o'chirmoqchimisiz")) {
        await costumAxios.delete(`main/user/${id}/`);
        await this.$store.dispatch("getUsers");
      }
    },
  },
  async created() {
    await this.$store.dispatch("getUsers");
  },
};
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
.table-responsive {
  display: block;
  width: 100%;
  overflow-x: auto;
}
.card-body > .table > thead > tr > th {
  border-top-width: 0;
}
.table thead th {
  vertical-align: bottom;
  border-bottom: 2px solid #dee2e6;
}

.table td,
.table th {
  padding: 0.75rem;
  vertical-align: baseline;
  border-top: 1px solid #dee2e6;
}
.card-body::after,
.card-footer::after,
.card-header::after {
  display: block;
  clear: both;
  content: "";
}
.for-label {
  display: inline-block;
  margin-bottom: 0.5rem;
}
/* .form-control {
  display: block;
  width: 100%;
  height: calc(2.25rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  box-shadow: inset 0 0 0 transparent;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
} */
.card {
  box-shadow: 0 0 1px rgb(0 0 0 / 13%), 0 1px 3px rgb(0 0 0 / 20%);
  margin-bottom: 1rem;
}
/* .table td.action-checkbox {
  width: 45px;
  padding-left: 1.5rem;
}
.djn-checkbox-select-all {
  padding-left: 1.5rem !important;
} */
.card-primary.card-outline {
  border-top: 3px solid #007bff;
}
.card {
  box-shadow: 0 0 1px rgb(0 0 0 / 13%), 0 1px 3px rgb(0 0 0 / 20%);
  margin-bottom: 1rem;
}
.card-header {
  background-color: transparent;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  padding: 0.75rem 1.25rem;
  position: relative;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}
.card-title {
  float: left;
  font-size: 1.1rem;
  font-weight: 400;
  margin: 0;
}
.card-body {
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1.25rem;
}
.form-group {
  margin-bottom: 1rem;
}
label:not(.form-check-label):not(.custom-file-label) {
  font-weight: 700;
}
.text-red {
  color: #dc3545 !important;
}
.btn-block {
  display: block;
  width: 100%;
}

select {
  word-wrap: normal;
}
button {
  text-transform: none;
}

/* .form-group div .vTextField {
  display: block;
  width: 100%;
}
.vTextField {
  height: calc(2.25rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  box-shadow: inset 0 0 0 transparent;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.vDateField,
.vTimeField {
  min-width: 200px;
  height: calc(2.25rem + 2px);
  margin-top: 5px;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  box-shadow: inset 0 0 0 transparent;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.help-block,
.timezonewarning {
  font-size: 0.8em;
  color: #859099;
  font-style: italic;
} */
.input-group {
  flex-wrap: nowrap;
}
</style>
