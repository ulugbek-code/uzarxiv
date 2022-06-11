<template>
  <section>
    <div>
      <div class="container">
        <div class="user signinBx">
          <div class="imgBx">
            <h2>
              <span class="text-danger">Uz</span>
              <span class="text-success">Arxiv</span> loyihasiga yangi o'quvchi
              qo'shing
            </h2>
          </div>
        </div>
        <div class="user signupBx">
          <div class="formBx">
            <form @submit.prevent="">
              <h2>Foydalanuvchi yaratish</h2>
              <input
                :class="[
                  !isInvalidPassportNumber && passportNumber
                    ? 'border-success'
                    : '',
                  isInvalidPassportNumber ? 'border-danger' : '',
                  isEmpty && !passportNumber ? 'border-danger' : '',
                ]"
                class="form-control mb-2 border"
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
                v-model.trim="firstname"
                class="form-control border mb-2"
                :class="isEmpty && !firstname ? 'border-danger' : ''"
                type="text"
                placeholder="Ismi"
                required
              />
              <input
                v-model.trim="lastname"
                class="form-control border mb-2"
                :class="isEmpty && !lastname ? 'border-danger' : ''"
                type="text"
                placeholder="Familiyasi"
                required
              />
              <input
                v-model.trim="login"
                class="form-control border mb-2"
                :class="[
                  !loginValidity && login ? 'border-success' : '',
                  loginValidity ? 'border-danger' : '',
                  isEmpty && !login ? 'border-danger' : '',
                ]"
                type="text"
                placeholder="Login"
                required
                maxlength="25"
                autocomplete="off"
              />
              <span v-if="!!loginValidity" class="text-danger mb-0"
                >Bunday login dasturda mavjud!</span
              >
              <input
                v-model="password"
                class="form-control border mb-2"
                :class="isEmpty && !password ? 'border-danger' : ''"
                type="password"
                placeholder="Parol"
                required
                autocomplete="off"
              />
              <input
                v-model.trim="confirmPassword"
                class="form-control border mb-2"
                :class="isEmpty && !confirmPassword ? 'border-danger' : ''"
                type="password"
                placeholder="Parolni takrorlash"
                required
                maxlength="50"
                autocomplete="off"
              />
              <span v-if="passwordValidity" class="text-danger mb-0">
                Parol takrorlanmadi
              </span>
              <textarea
                v-model.trim="company"
                class="form-control border mb-2"
                :class="isEmpty && !company ? 'border-danger' : ''"
                type="text"
                placeholder="Tashkilot nomi"
                required
                maxlength="200"
                rows="2"
              ></textarea>
              <input
                v-model.trim="position"
                class="form-control border"
                :class="isEmpty && !position ? 'border-danger' : ''"
                type="text"
                placeholder="Pozitsiya"
                required
                maxlength="100"
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
      isInvalidPassportNumber: null,
      passportNumber: "",
      login: "",
      firstname: "",
      lastname: "",
      password: "",
      confirmPassword: "",
      company: "",
      position: "",
      passwordValidity: false,
      loginValidity: null,
      isEmpty: false,
    };
  },
  computed: {
    getUsers() {
      return this.$store.getters.users;
    },
  },
  methods: {
    async addNewUser() {
      try {
        if (
          !this.passportNumber ||
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
          !this.isInvalidPassportNumber &&
          !this.loginValidity
        ) {
          this.$Progress.start();
          await customAxios.post("main/user/", {
            password: this.password,
            username: this.login,
            first_name: this.firstname,
            last_name: this.lastname,
            organization: this.company,
            position: this.position,
            pass_number: this.passportNumber,
          });
          await this.$store.dispatch("getUsers");
          // console.log(response);
          this.$Progress.finish();
          this.$router.replace("/users");
        } else {
          // this.isInvalidPassportNumber.length !== 0 below logic
          if (this.isInvalidPassportNumber) {
            this.notValidPassport = "Bunday passport raqami allaqachon mavjud!";
            setTimeout(() => (this.notValidPassport = ""), 2000);
            return;
          }
          if (this.loginValidity) return;
          this.passwordValidity = true;
        }
      } catch (e) {
        this.$Progress.fail();
        // console.log(e.response.data);
        // if (e.response.status === 400) this.error = "Bunday xodim mavjud emas.";
        console.log(e.response);
      }
    },
    removeInputs() {
      this.$router.replace("/users");
      // (this.login = ""),
      //   (this.passportNumber = ""),
      //   (this.firstname = ""),
      //   (this.lastname = ""),
      //   (this.password = ""),
      //   (this.confirmPassword = ""),
      //   (this.company = ""),
      //   (this.position = "");
    },
  },
  async created() {
    this.$Progress.start();
    if (!this.getUsers.length) {
      await this.$store.dispatch("getUsers");
    }
  },
  mounted() {
    this.$Progress.finish();
  },
  watch: {
    passportNumber(newVal) {
      this.isInvalidPassportNumber = this.getUsers.find(
        (user) => user.pass_number == newVal
      );
      // this.isInvalidPassportNumber = this.getUsers.filter((user) => {
      //   return user.pass_number.toLowerCase().includes(newVal.toLowerCase());
      // });
    },
    login(val) {
      this.loginValidity = this.getUsers.find((user) => user.username == val);
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
input::placeholder,
textarea::placeholder {
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
