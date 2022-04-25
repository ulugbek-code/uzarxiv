<template>
  <section>
    <div>
      <div class="container">
        <!-- <div class="user signinBx">
          <div class="imgBx">
            <h2
              style="
                font-size: 38px;
                margin-top: 50%;
                margin-bottom: 50%;
                text-align: center;
              "
            >
              Xush kelibsiz <br /><span style="color: red">Quiz</span>
              <span style="color: green">App</span> ga
            </h2>
          </div>
        </div> -->
        <div class="user signupBx">
          <div class="formBx">
            <form @submit.prevent="addNewUser">
              <h2>Foydalanuvchi yaratish</h2>
              <input
                type="text"
                name="username"
                placeholder="Login"
                required
                maxlength="25"
                id="id_username"
              />
              <input
                type="text"
                name="fullname"
                placeholder="To&#x27;liq ismingiz"
                required
                maxlength="30"
                id="id_fullname"
              />
              <input
                type="password"
                name="password1"
                placeholder="Parol yaratish"
                required
                id="id_password1"
              />
              <input
                type="password"
                name="password2"
                placeholder="Parolni takrorlash"
                required
                id="id_password2"
              />
              <input
                type="text"
                name="organization"
                placeholder="Organizatsiya"
                required
                maxlength="50"
                id="id_organization"
              />
              <input
                type="text"
                name="position"
                placeholder="Pozitsiya"
                required
                maxlength="30"
                id="id_position"
              />
              <button class="btn btn-outline-secondary">Bekor qilish</button>
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
      fullName: "",
      password: "",
      confirmPassword: false,
      company: "",
      position: "",
    };
  },
  methods: {
    async addNewUser() {
      try {
        const response = await axios.post(
          "https://quiz.multisim.uz/main/user/",
          {
            password: "test",
            username: "Makhach",
            first_name: "Islam",
            last_name: "Makhachev",
            organization: "Udevs",
            position: "developer",
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
section {
  position: relative;
  height: 90vh;
  width: 100%;
  /* background-color: #f8dd30; */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  padding-right: 3rem;
  /* position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -40%);
  min-width: 90%; */
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

/* section .container .user .imgBx {
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
} */

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

section .container.active .signupBx .formBx {
  left: 0;
}

/* section .container .signupBx .imgBx {
  left: -100%;
} */

/* section .container.active .signupBx .imgBx {
  left: 0%;
} */

section .container .signinBx .formBx {
  left: 0%;
}

section .container.active .signinBx .formBx {
  left: 100%;
}

/* section .container .signinBx .imgBx {
  left: 0%;
} */

/* section .container.active .signinBx .imgBx {
  left: -100%;
} */
</style>
