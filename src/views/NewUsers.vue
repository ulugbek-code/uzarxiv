<template>
  <section>
    <div>
      <div class="container">
        <div class="user signinBx">
          <div class="imgBx">
            <!-- {{ getUsers }}
            {{ isInvalidPassportNumber.length }} -->
            <h2>
              Xush kelibsiz <br /><span class="text-danger">Uz</span>
              <span class="text-success">Arxiv</span> ga
            </h2>
          </div>
          <div v-if="isEmpty" class="custom-toast bg-danger text-light">
            <div class="d-flex">
              <div class="toast-body">Please, fill in all required fields!</div>
            </div>
          </div>
        </div>
        <div class="user signupBx">
          <div class="formBx">
            <form @submit.prevent="">
              <h2>Foydalanuvchi yaratish</h2>
              <input
                :class="[
                  isInvalidPassportNumber.length === 0 && passportNumber.length
                    ? 'border-success'
                    : 'border-danger',
                ]"
                class="form-control mb-2 border border-2"
                v-model.trim="passportNumber"
                type="text"
                placeholder="Passport raqami"
                minlength="9"
                maxlength="9"
                required
              />
              <span class="text-danger mb-0">
                {{ notValidPassport }}
              </span>
              <input
                v-model.trim="login"
                class="form-control mb-2"
                type="text"
                placeholder="Login"
                required
                maxlength="25"
                autocomplete="off"
              />
              <input
                v-model.trim="firstname"
                class="form-control mb-2"
                type="text"
                placeholder="Ismi"
                required
                maxlength="30"
              />
              <input
                v-model.trim="lastname"
                class="form-control mb-2"
                type="text"
                placeholder="Familiyasi"
                required
              />
              <input
                v-model="password"
                class="form-control mb-2"
                type="password"
                placeholder="Parol"
                required
                autocomplete="off"
              />
              <input
                v-model.trim="confirmPassword"
                class="form-control mb-2"
                type="password"
                placeholder="Parolni takrorlash"
                required
                maxlength="50"
                autocomplete="off"
              />
              <span v-if="passwordValidity" class="text-danger mb-0">
                Parol takrorlanmadi
              </span>
              <input
                v-model.trim="company"
                class="form-control mb-2"
                type="text"
                placeholder="Tashkilot nomi"
                required
                maxlength="30"
              />
              <input
                v-model.trim="position"
                class="form-control"
                type="text"
                placeholder="Pozitsiya"
                required
                maxlength="30"
              />
              <button
                @click="addNewUser"
                type="button"
                class="btn btn-success mt-2"
              >
                Yuborish
              </button>
              <button
                @click="removeInputs"
                type="button"
                class="btn btn-outline-danger mt-2 mx-2"
              >
                Bekor qilish
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import customAxios from "../api";
export default {
  data() {
    return {
      notValidPassport: "",
      isInvalidPassportNumber: [],
      passportNumber: "",
      login: "",
      firstname: "",
      lastname: "",
      password: "",
      confirmPassword: "",
      company: "",
      position: "",
      passwordValidity: false,
      isEmpty: false,
    };
  },
  computed: {
    getUsers() {
      return this.$store.getters.users;
    },
  },
  methods: {
    changeValidity() {
      if (this.passwordValidity) this.passwordValidity = !this.passwordValidity;
    },
    async addNewUser() {
      try {
        if (
          !this.passportNumber ||
          !this.login ||
          !this.login ||
          !this.firstname ||
          !this.lastname ||
          !this.password ||
          !this.confirmPassword ||
          !this.company ||
          !this.position
        )
          return (this.isEmpty = true);
        if (
          this.password === this.confirmPassword &&
          this.isInvalidPassportNumber.length === 0
        ) {
          const response = await customAxios.post("main/user/", {
            password: this.password,
            username: this.login,
            first_name: this.firstname,
            last_name: this.lastname,
            organization: this.company,
            position: this.position,
            pass_number: this.passportNumber,
          });
          console.log(response);
          this.$router.replace("/users");
        } else {
          if (this.isInvalidPassportNumber.length !== 0) {
            this.notValidPassport = "Bunday passport raqami allaqachon mavjud!";
            setTimeout(() => (this.notValidPassport = ""), 2000);
            return;
          }
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
        (this.passportNumber = ""),
        (this.firstname = ""),
        (this.lastname = ""),
        (this.password = ""),
        (this.confirmPassword = ""),
        (this.company = ""),
        (this.position = "");
    },
  },
  created() {
    this.$store.dispatch("getUsers");
  },
  watch: {
    passportNumber(newVal) {
      this.isInvalidPassportNumber = this.getUsers.filter((user) => {
        return user.pass_number.toLowerCase().includes(newVal.toLowerCase());
        // ? true
        // : false;
      });
    },
    isEmpty(newVal) {
      if (newVal === true) {
        setTimeout(() => (this.isEmpty = false), 2000);
      }
    },
    passwordValidity(newVal) {
      if (newVal === true) {
        setTimeout(() => (this.passwordValidity = false), 2000);
      }
    },
  },
};
</script>

<style scoped>
.custom-toast {
  position: absolute;
  right: 60%;
  top: 10%;
}
.imgBx h2 {
  font-size: 38px;
  margin-top: 50%;
  margin-bottom: 50%;
  text-align: center;
}
section {
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  z-index: 100;
}

section .container {
  position: relative;
  width: 800px;
  height: 570px;
  background: #fff;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  border-radius: 4px;
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

section .container .user .imgBx img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
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
  left: 50%;
}

section .container.active .signupBx .formBx {
  left: 0;
}

section .container .signupBx .imgBx {
  left: -100%;
}

section .container.active .signupBx .imgBx {
  left: 0%;
}

section .container .signinBx .formBx {
  left: 0%;
}

section .container.active .signinBx .formBx {
  left: 100%;
}

section .container .signinBx .imgBx {
  left: 0%;
}

section .container.active .signinBx .imgBx {
  left: -100%;
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
