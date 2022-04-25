<template>
  <section>
    <div>
      <!--  -->
      <div
        v-if="passwordValidity"
        autohide="true"
        delay="1000"
        class="alert alert-danger"
      >
        Parolni tasdiqlash mos kelmadi
      </div>
      <!--  -->
      <!-- <p class="m-0">Parolni tasdiqlash mos kelmadi.</p> -->
      <div class="container">
        <div @click="changeValidity" class="user signupBx">
          <div class="formBx">
            <form @submit.prevent="addNewUser">
              <h2>Foydalanuvchi yaratish</h2>
              <input
                v-model="login"
                type="text"
                placeholder="Login"
                required
                maxlength="25"
              />
              <input
                v-model="firstname"
                type="text"
                placeholder="Ismingiz"
                required
                maxlength="30"
              />
              <input
                v-model="surname"
                type="text"
                placeholder="Familiyangiz"
                required
                maxlength="30"
              />
              <input
                v-model="password"
                type="password"
                placeholder="Parol yaratish"
                required
              />
              <input
                v-model="confirmPassword"
                type="password"
                placeholder="Parolni takrorlash"
                required
              />
              <input
                v-model="company"
                type="text"
                placeholder="Organizatsiya"
                required
                maxlength="50"
              />
              <input
                v-model="position"
                type="text"
                placeholder="Pozitsiya"
                required
                maxlength="30"
              />

              <button @click="removeInputs" class="btn btn-outline-secondary">
                Bekor qilish
              </button>
              <button @click="addNewUser" class="btn btn-primary mx-2">
                Yuboorish
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      login: "",
      firstname: "",
      surname: "",
      password: "",
      confirmPassword: "",
      passwordValidity: false,
      company: "",
      position: "",
    };
  },
  methods: {
    changeValidity() {
      if (this.passwordValidity) this.passwordValidity = !this.passwordValidity;
    },
    async addNewUser() {
      try {
        if (this.password === this.confirmPassword) {
          const response = await axios.post(
            "https://quiz.multisim.uz/main/user/",
            {
              password: this.password,
              username: this.login,
              first_name: this.firstname,
              last_name: this.surname,
              organization: this.company,
              position: this.position,
            },
            {
              headers: {
                Authorization: `Token ${JSON.parse(
                  localStorage.getItem("token")
                )}`,
              },
            }
          );
          console.log(response);
          this.$router.replace("/");
        } else {
          this.passwordValidity = true;
        }
      } catch (e) {
        // console.log(e.response.data);
        // if (e.response.status === 400) this.error = "Bunday xodim mavjud emas.";
        console.log(e.response);
      }
    },
    removeInputs() {
      (this.login = ""),
        (this.firstname = ""),
        (this.surname = ""),
        (this.password = ""),
        (this.confirmPassword = ""),
        (this.company = ""),
        (this.position = "");
    },
  },
};
</script>

<style scoped>
section {
  position: relative;
  height: 90vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  padding-right: 3rem;
}

section .container {
  position: relative;
  width: 400px;
  height: 500px;
  background: #fff;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

section .container .user {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
}

section .container .user .formBx {
  position: relative;
  width: 100%;
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

section .container .user .formBx form input {
  position: relative;
  width: 100%;
  padding: 10px;
  background: #f5f5f5;
  color: #333;
  border: none;
  outline: none;
  box-shadow: none;
  margin: 8px 0;
  font-size: 14px;
  letter-spacing: 1px;
  font-weight: 300;
}
input::placeholder {
  color: rgba(68, 68, 68, 0.6);
}

section .container .user .formBx form input[type="submit"] {
  max-width: 100px;
  background: #677eff;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1px;
  transition: 0.5s;
}

section .container .user .formBx form .signup {
  position: relative;
  margin-top: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  color: #555;
  text-transform: uppercase;
  font-weight: 300;
}

section .container .user .formBx form .signup a {
  font-weight: 600;
  text-decoration: none;
  color: #677eff;
}

section .container.active .signupBx {
  pointer-events: initial;
}

section .container .signupBx .formBx {
  left: 0%;
}

section .container .signinBx .formBx {
  left: 0%;
}
</style>
