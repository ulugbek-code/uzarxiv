<template>
  <div>
    <nav :class="!isNavOpened ? 'openedSideBar' : ''">
      <div
        @click="toggleHamburgerMenu"
        :class="[!isNavOpened ? 'open' : '']"
        class="hamburger-menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <router-link to="/"
        ><h1>{{ companyName }}</h1></router-link
      >
      <div class="info">
        <fa class="nav-icon" :icon="['fas', 'circle-user']" />
        <div class="sub-info">
          <h3>Admin</h3>
        </div>
      </div>
      <div class="nav-li">
        <router-link class="nav-link" to="/dashboard">
          <div @click="offseting" class="items">
            <div class="circle"></div>
            <span class="tooltiptext">Dashboard</span>
            <p>Dashboard</p>
          </div>
        </router-link>
        <router-link class="nav-link" to="/users">
          <div @click="offseting" class="items">
            <div class="circle"></div>
            <span class="tooltiptext">Foydalanuvchilar</span>
            <p>Foydalanuvchilar</p>
          </div>
        </router-link>
        <router-link class="nav-link" to="/exams">
          <div @click="offseting" class="items">
            <div class="circle"></div>
            <span class="tooltiptext">Imtihonlar</span>
            <p>Imtihonlar</p>
          </div>
        </router-link>
        <router-link class="nav-link" to="/categories">
          <div @click="offseting" class="items">
            <div class="circle"></div>
            <span class="tooltiptext">Kategoriyalar</span>
            <p>Kategoriyalar</p>
          </div>
        </router-link>
        <router-link class="nav-link" to="/questions">
          <div @click="offseting" class="items">
            <div class="circle"></div>
            <span class="tooltiptext">Savollar</span>
            <p>Savollar</p>
          </div>
        </router-link>
        <router-link class="nav-link" to="/results">
          <div @click="offseting" class="items">
            <div class="circle"></div>
            <span class="tooltiptext">ImtihonNatijalari</span>
            <p>Imtihon natijalari</p>
          </div>
        </router-link>
        <router-link class="nav-link" to="/newuser">
          <div @click="offseting" class="items">
            <div class="circle"></div>
            <span class="tooltiptext">FoydalanuvchiQo'shish</span>
            <p>Foydalanuvchi qo'shish</p>
          </div>
        </router-link>
      </div>
      <div @click="logOut" class="log-out items">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icons"
          width="20"
          height="20"
          viewBox="0 0 24 20"
          stroke-width="1.5"
          stroke="#2c3e50"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path
            d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"
          />
          <path d="M7 12h14l-3 -3m0 6l3 -3" />
        </svg>
        <span class="tooltiptext">Log Out</span>
        <p>Log out</p>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInfo: {},
      isLogOut: false,
    };
  },
  computed: {
    companyName() {
      if (this.isNavOpened) {
        return "QuizApp";
      } else {
        return "QA";
      }
    },

    isNavOpened() {
      return this.$store.getters.isNavOpened;
    },
  },
  methods: {
    toggleHamburgerMenu() {
      this.$store.commit("toggleNavbar");
    },
    close() {
      this.isLogOut = false;
    },
    logOut() {
      this.isLogOut = true;
    },
    // deleteToken() {
    //   localStorage.clear();
    //   this.close();
    //   this.$store.commit("clearState");
    // },
  },
};
</script>

<style scoped>
.nav-icon {
  color: #fff;
  font-size: 2rem;
}
.circle {
  width: 20px;
  height: 20px;
  border-radius: 25px;
  background: rgb(223, 222, 222);
}
.tooltiptext {
  visibility: hidden;
  background-color: #343a40;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 3px;
  width: fit-content;
  position: absolute;
  top: -20%;
  left: 50%;
  z-index: 1;
}
#marker {
  position: absolute;
  left: -10%;
  height: 30px;
  width: 4.5px;
  background: rgba(67, 97, 238, 1);
  transition: 0.4s;
  border-radius: 4px;
  /* padding-bottom: 5px; */
}
nav {
  height: 100%;
  width: 270px;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  /* overflow-x: hidden; */
  background: #343a40;
  padding-left: 1.5rem;
  transition: all 0.3s ease;
}
.nav-li {
  position: relative;
  animation: coming 0.3s ease;
}
nav.openedSideBar {
  width: 110px;
}
nav p,
.sub-info {
  position: absolute;
  left: 20%;
  transition: all 0.5s ease;
  /* animation: slide 1s forwards; */
}
nav.openedSideBar p,
nav.openedSideBar .sub-info {
  display: none;
}
nav.openedSideBar .items,
nav.openedSideBar h1 {
  display: flex;
  justify-content: flex-start;
}
nav.openedSideBar .nav-link:hover .tooltiptext {
  visibility: visible;
}
nav.openedSideBar .log-out {
  left: 22%;
}
nav.openedSideBar .hamburger-menu {
  margin-left: 1rem;
}
.hamburger-menu {
  margin: 1rem 0 2rem;
  width: 35px;
  height: 28px;
  position: relative;
  transition: all 0.3s ease;
  cursor: pointer;
}
.hamburger-menu span {
  display: block;
  position: absolute;
  height: 3px;
  width: 100%;
  background: #fff;
  border-radius: 2.5px;
  opacity: 1;
  left: 10%;
  transition: 0.25s ease-in-out;
}
.hamburger-menu span:nth-child(1) {
  top: 0px;
}

.hamburger-menu span:nth-child(2) {
  top: 10px;
}
.hamburger-menu span:nth-child(3) {
  top: 20px;
}
.hamburger-menu.open span:nth-child(1) {
  width: 80%;
}
.hamburger-menu.open span:nth-child(2) {
  width: 60%;
}
.hamburger-menu.open span:nth-child(3) {
  width: 40%;
}
nav h1 {
  font-size: 26px;
  letter-spacing: 1.2px;
  color: #fff;
  margin-left: 1rem;
}
.info {
  position: relative;
  display: flex;
  justify-content: flex-start;
  margin: 2rem 1rem 2rem 0;
  padding: 0 1rem;
}
.info img {
  position: relative;
  height: 70px;
  width: 70px;
  border: 1px solid #333;
  background: rgba(255, 254, 254, 0.9);
  border-radius: 50%;
  z-index: 9;
}
.sub-info {
  top: 8%;
  width: 100%;
  left: 30%;
}
.sub-info h3 {
  position: absolute;
  font-size: 20px;
  color: #fff;
  font-weight: 500;
  margin-bottom: 5px;
  overflow: hidden;
}
.icons {
  position: relative;
  color: rgba(170, 170, 170, 0.7);
  font-size: 18px;
  width: 20px;
  margin-right: 1.5rem;
  margin-bottom: 2px;
}
.svg-icons {
  stroke: chocolate;
}
.items {
  display: flex;
  align-items: center;
  position: relative;
  font-size: 15px;
  margin: 4px 0;
  font-weight: 300;
  color: #9fa9b1;
  /* overflow: hidden; */
}
.log-out {
  width: 80%;
  position: absolute;
  bottom: 5%;
  left: 10%;
  color: rgba(255, 185, 62, 1);
  font-weight: 300;
  cursor: pointer;
  /* animation: coming 0.6s ease; */
}
.log-out p {
  margin-bottom: 0;
}
.log-out .icons {
  stroke: rgba(255, 185, 62, 1);
}
a {
  text-decoration: none;
  cursor: pointer;
  color: rgba(253, 253, 253, 0.5);
  font-family: "Poppins", sans-serif;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}
a.active {
  color: #fff;
}

.nav-li a.router-link-active .items p {
  color: #fff;
}
.nav-li a:hover:not(.router-link-active) {
  background: #6c757d;
}
.nav-li a:hover .items p {
  color: rgb(255, 255, 255);
}
.nav-li a.router-link-active {
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  background: #007bff;
}
/* a:hover,
a:active,
a.router-link-active,
.items:hover > .icons,
.log-out:hover,
a.router-link-active .icons {
  color: rgb(231, 44, 44);
} */
.btn-wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
}
.btn-wrapper button {
  margin: 0 8px;
}
.nav-link p {
  margin: 0;
}

/* @keyframes coming {
  0% {
    transform: translateX(-150%);
  }
  100% {
    transform: translateX(0);
  }
} */
/* @keyframes slide {
  100% {
    left: 0;
  }
} */
</style>
