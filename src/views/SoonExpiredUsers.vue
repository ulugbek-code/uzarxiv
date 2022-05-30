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
    <!-- {{ expiredUsers }} -->
    <div class="content container-fluid">
      <div class="row">
        <div class="col-12 p-0">
          <div class="card card-primary card-outline">
            <div class="card-header">
              <h4 class="card-title">
                Tez orada amal qilish muddati tugaydigan foydalanuvchilar
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
                          <table class="table">
                            <thead>
                              <tr>
                                <th>
                                  <span>FIO</span>
                                </th>
                                <th>
                                  <span>Passport raqami</span>
                                </th>
                                <th>
                                  <span>Guruh nomi</span>
                                </th>
                                <th>
                                  <span>Kategoriya</span>
                                </th>
                                <th>
                                  <span>Variant nomi</span>
                                </th>
                                <th>
                                  <span>Organizatsiya</span>
                                </th>
                                <th>
                                  <span>Pozitsiya</span>
                                </th>
                                <th>
                                  <span>Sana</span>
                                </th>
                                <!-- <th>
                                  <span>Sertifikat</span>
                                </th> -->
                              </tr>
                            </thead>
                            <tbody>
                              <tr v-for="user in paginatedUsers" :key="user.id">
                                <td>
                                  {{ user.first_name }}
                                </td>
                                <td>
                                  {{
                                    user.pass_number ? user.pass_number : "-"
                                  }}
                                </td>
                                <td>{{ user.group_name }}</td>
                                <td>{{ user.module_name }}</td>
                                <td>{{ user.variant_name }}</td>
                                <td>{{ user.organization }}</td>
                                <td>{{ user.position }}</td>
                                <td>{{ formatDate(user.date) }}</td>
                                <!-- <td></td> -->
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-5">
                      <div class="dataTables_info">
                        {{ paginatedUsers.length }} ta foydalanuvchilar
                      </div>
                    </div>
                    <div v-if="filteredExpiredUsers.length > 50" class="col-7">
                      <base-pagination
                        :totalPages="Math.ceil(expiredUsers.length / 50)"
                        :perPage="50"
                        :currentPage="current"
                        @pagechanged="onPChange"
                      ></base-pagination>
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
import BasePagination from "../components/BasePagination.vue";
export default {
  components: {
    BasePagination,
  },
  data() {
    return {
      search: "",
      current: 1,
      // expiredUsers: [],
    };
  },
  computed: {
    expiredUsers() {
      return this.$store.getters.expiredUser;
    },
    filteredExpiredUsers() {
      return this.expiredUsers.filter((user) => {
        if (user.pass_number) {
          return (
            user.pass_number
              .toLowerCase()
              .includes(this.search.toLowerCase()) ||
            user.first_name.toLowerCase().includes(this.search.toLowerCase())
          );
        }
        return user.first_name
          .toLowerCase()
          .includes(this.search.toLowerCase());
        // user.pass_number.toLowerCase().includes(this.search.toLowerCase()) ||
      });
    },
    startPage() {
      return (this.current - 1) * 50;
    },
    endPage() {
      return this.current * 50;
    },
    paginatedUsers() {
      return this.filteredExpiredUsers.slice(this.startPage, this.endPage);
    },
  },
  methods: {
    onPChange(page) {
      this.current = page;
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
      // + day.substring(11);
      return day;
    },
    // async getExpiredUsers() {
    //   const res = await customAxios.get("deadline_statistic/");
    //   this.expiredUsers = res.data;
    //   // console.log(res);
    // },
  },
  async created() {
    this.$Progress.start();
    if (!this.expiredUsers.length)
      await this.$store.dispatch("getExpiredUsers");
  },
  mounted() {
    this.$Progress.finish();
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
.card {
  box-shadow: 0 0 1px rgb(0 0 0 / 13%), 0 1px 3px rgb(0 0 0 / 20%);
  margin-bottom: 1rem;
}

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
/* .btn-block {
  display: block;
  width: 100%;
} */

select {
  word-wrap: normal;
}
button {
  text-transform: none;
}
.input-group {
  flex-wrap: nowrap;
}
tr {
  cursor: pointer;
}
</style>
