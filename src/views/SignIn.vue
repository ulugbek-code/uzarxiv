<template>
  <div id="sign-in">
    <section>
      <div>
        <div class="container">
          <div class="user signinBx">
            <div class="imgBx">
              <h2 class="px-3">Malaka oshirish test sinoviga kirish</h2>
            </div>
          </div>
          <div class="user signupBx">
            <div class="formBx">
              <form @submit.prevent="">
                <div v-if="error" class="alert alert-danger" role="alert">
                  {{ error }}
                </div>
                <h2>SIGN IN</h2>
                <div @click="error = false" class="input-group mb-3">
                  <input
                    v-model.trim="login"
                    type="text"
                    class="form-control"
                    placeholder="Username"
                    aria-describedby="basic-addon1"
                    required
                  />
                </div>
                <div @click="error = false" class="input-group mb-3">
                  <input
                    v-model.trim="password"
                    type="password"
                    class="form-control"
                    placeholder="Password"
                    autocomplete="off"
                    required
                  />
                </div>
                <div class="d-grid">
                  <button
                    @click.prevent="loginUser"
                    class="btn btn-outline-primary"
                  >
                    Log in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <!--  -->
  <!--  -->
  <!-- <div class="c-sign-in pt-5">
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
            type="password"
            class="form-control"
            placeholder="Password"
            autocomplete="off"
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
  </div> -->
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
        // console.log(response);
        localStorage.setItem("token", JSON.stringify(response.data.token));
        localStorage.setItem(
          "isAdmin",
          JSON.stringify(response.data.is_superuser)
        );
        localStorage.setItem("userId", JSON.stringify(response.data.id));
        localStorage.setItem(
          "fullname",
          JSON.stringify(response.data.full_name)
        );
        await this.$store.commit("setAuth");
        // this.$router.replace("/");
        this.$Progress.finish();
        // location.reload();
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
  font-family: "Poppins", sans-serif;
}

section {
  width: 100%;
  min-height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  z-index: 100;
  background: #f8dd30;
}

section .container {
  position: relative;
  width: 800px;
  height: 500px;
  background: #fff;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  border-radius: 0.25rem;
}

section .container .user {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
}

section .container .user .imgBx {
  position: relative;
  width: 50%;
  height: 100%;
  background: #ff0;
  transition: 0.5s;
}
.imgBx h2 {
  font-size: 30px;
  margin-top: 50%;
  margin-bottom: 50%;
  text-align: center;
  font-weight: 500;
  line-height: 1.2;
}
section .container .user .formBx {
  position: relative;
  width: 50%;
  height: 100%;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  transition: 0.5s;
}

section .container .user .formBx form h2 {
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-align: center;
  width: 100%;
  margin-bottom: 10px;
  color: #555;
}
input::placeholder {
  opacity: 0.7;
}

section .container.active .signupBx {
  pointer-events: initial;
}

section .container .signupBx .formBx {
  left: 50%;
}

section .container.active .signupBx .formBx {
  left: 0;
}

section .container .signupBx .imgBx {
  left: -100%;
}

section .container.active .signupBx .imgBx,
section .container .signinBx .formBx,
section .container .signinBx .imgBx {
  left: 0%;
}

section .container.active .signinBx .formBx {
  left: 100%;
}
section .container.active .signinBx .imgBx {
  left: -100%;
}
input.border-danger::placeholder {
  color: #dc3545;
}
@media (max-width: 991px) {
  section .container {
    max-width: 400px;
  }
  section .container .signupBx .formBx {
    left: 0%;
  }
  .imgBx {
    display: none;
  }

  section .container .user .formBx {
    width: 100%;
  }
}
</style>
