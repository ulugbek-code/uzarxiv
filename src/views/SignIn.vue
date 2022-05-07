<template>
  <div class="c-sign-in pt-5">
    <div class="logo-img text-center">
      <img class="logo" src="../assets/logo.png" alt="" />
    </div>
    <div class="d-flex justify-content-center">
      <form @submit.prevent="loginUser" class="border rounded p-4">
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
          <button type="submit" class="btn btn-outline-primary">Log in</button>
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
        console.log(response);
        localStorage.setItem("token", JSON.stringify(response.data.token));
        this.$router.replace("/");
        this.$store.commit("setAuth");
      } catch (e) {
        // console.log(e.response.data);
        // if (e.response.status === 400) this.error = "Bunday xodim mavjud emas.";
        this.error = e.response.data;
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
