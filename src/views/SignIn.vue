<template>
  <div class="c-sign-in pt-5">
    <div class="logo-img text-center">
      <img class="logo" src="../assets/logo.png" alt="" />
    </div>
    <div class="d-flex justify-content-center">
      <form @submit.prevent class="border rounded p-4">
        <div v-if="error" class="alert alert-danger" role="alert">
          {{ error }}
        </div>
        <div class="mb-3 text-center">
          <p>Welcome</p>
        </div>
        <div @click="error = false" class="input-group mb-3">
          <input
            v-model.trim="login"
            type="text"
            class="form-control"
            placeholder="Username"
            aria-describedby="basic-addon1"
            required
          />
          <span class="input-group-text" id="basic-addon1">
            <fa :icon="['fas', 'user']" />
          </span>
        </div>
        <div @click="error = false" class="input-group mb-3">
          <input
            v-model.trim="password"
            type="text"
            class="form-control"
            placeholder="Password"
            required
          />
          <span class="input-group-text" id="basic-addon1"
            ><fa :icon="['fas', 'lock']"
          /></span>
        </div>
        <div class="d-grid">
          <button @click.prevent="loginUser" class="btn btn-outline-primary">
            Log in
          </button>
        </div>
      </form>
    </div>
  </div>
  <!--  -->
</template>

<script>
import customAxios from "../api";
export default {
  data() {
    return {
      login: "",
      password: "",
      error: "",
    };
  },
  methods: {
    async loginUser() {
      try {
        this.$Progress.start();
        const response = await customAxios.post(
          "api/login/",
          {
            username: this.login,
            password: this.password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        this.$Progress.finish();
        console.log(response.data);
        // localStorage.setItem('userInfo',JSON.stringify(response.data))
        localStorage.setItem("token", JSON.stringify(response.data.token));
        localStorage.setItem(
          "isAdmin",
          JSON.stringify(response.data.is_superuser)
        );
        localStorage.setItem("userId", JSON.stringify(response.data.id));
        this.$store.dispatch("setAuth");
        this.$router.replace("/");
      } catch (e) {
        this.$Progress.fail();
        console.log(e);
        if (e.response.status === 400) {
          this.error = "Bunday xodim mavjud emas.";
          return;
        }
        this.error = e ? e.response.message : "error";
      }
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
}
.c-sign-in {
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -40%);
  min-width: 90%;
}
.logo {
  display: relative;
  top: 50%;
  left: 40%;
}
</style>
