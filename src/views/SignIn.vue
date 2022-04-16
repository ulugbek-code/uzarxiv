<template>
  <div class="container c-sign-in">
    <div class="logo-img text-center mb-2">
      <img class="logo" src="../assets/logo.png" alt="" />
    </div>
    <div class="d-flex justify-content-center">
      <form @submit.prevent="loginUser" class="border rounded p-4">
        <div class="mb-3 text-center">
          <p>Welcome</p>
        </div>
        <div class="input-group mb-3">
          <input
            v-model="login"
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
        <div class="input-group mb-3">
          <input
            v-model="password"
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
import axios from "axios";
export default {
  data() {
    return {
      login: "",
      password: "",
    };
  },
  methods: {
    async loginUser() {
      try {
        const response = await axios.post(
          "https://quiz.multisim.uz/api/login/",
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
        this.$router.push("/dashboard");
      } catch (e) {
        console.log(e.message);
      }
    },
  },
};
</script>

<style scoped>
.c-sign-in {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.logo {
  display: relative;
  top: 50%;
  left: 40%;
}
</style>
