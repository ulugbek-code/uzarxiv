<template>
  <header :class="[isNavOpened ? 'body-pd' : '']" class="header" id="header">
    <!-- bx bx-menu for menu icon -->
    <div @click="toggleHamburgerMenu" class="header_toggle">
      <fa class="bx-menu" :icon="['fas', 'bars']" />
    </div>
    <div v-if="!isUserAdmin" class="fs-5">
      {{ fullname ? fullname : "No name" }}
    </div>
    <div v-else class="title">
      <p class="text-danger fw-bold mb-0">
        "Ustani ishlatganingizdan so'ng peshonasidagi teri qurimasidan turib
        haqqini bering!" Rasululloh S.A.V
      </p>
    </div>
    <!-- <div class="header_img">
      <img src="https://i.imgur.com/hczKIze.jpg" alt="" />
    </div> -->
  </header>
  <div :class="[isNavOpened ? 'show' : '']" class="l-navbar" id="nav-bar">
    <!-- show class above -->
    <nav class="nav">
      <div>
        <router-link to="/" class="nav_logo">
          <img src="../../assets/logo.png" alt="" />
          <!-- <fa class="bx bx-layer nav_logo-icon" :icon="['fas', 'a']" /> -->
          <span class="nav_logo-name">Uz Arxiv</span>
        </router-link>
        <div class="nav_list">
          <template v-if="isUserAdmin">
            <hr />
            <h4 class="nav_link">
              <fa
                class="bx bx-layer nav_logo-icon"
                :icon="['fas', 'circle-user']"
              />
              <span class="nav_name">Admin</span>
            </h4>
            <hr />
          </template>
          <router-link to="/" class="nav_link">
            <fa
              class="bx bx-layer nav_logo-icon"
              :icon="['fas', 'gauge-high']"
            />
            <span class="nav_name px-1">Dashboard</span>
          </router-link>
          <template v-if="isUserAdmin">
            <router-link
              to="/users"
              :class="[isUserActive ? 'activate' : '']"
              class="nav_link"
            >
              <fa
                class="bx bx-layer nav_logo-icon"
                :icon="['fas', 'user-group']"
              />
              <span class="nav_name">Foydalanuvchilar</span>
            </router-link>
            <router-link
              to="/groups"
              :class="[isGroupActive ? 'activate' : '']"
              class="nav_link"
            >
              <fa
                class="bx bx-layer nav_logo-icon"
                :icon="['fas', 'square-poll-horizontal']"
              />
              <span class="nav_name">Guruhlar</span>
            </router-link>
            <router-link
              to="/categories"
              :class="[isCategoryActive ? 'activate' : '']"
              class="nav_link"
            >
              <fa
                class="bx bx-layer nav_logo-icon"
                :icon="['fas', 'layer-group']"
              />
              <span class="nav_name">Kategoriyalar</span>
            </router-link>
            <router-link
              to="/questions"
              :class="[isQuestionActive ? 'activate' : '']"
              class="nav_link"
            >
              <fa
                class="bx bx-layer nav_logo-icon"
                :icon="['fas', 'circle-question']"
              />
              <span class="nav_name">Test Variantlari</span>
            </router-link>
            <router-link
              to="/results"
              :class="[isResultActive ? 'activate' : '']"
              class="nav_link"
            >
              <fa
                class="bx bx-layer nav_logo-icon"
                :icon="['fas', 'circle-check']"
              />
              <span class="nav_name">Imtihon Natijalari</span>
            </router-link>
            <router-link to="/soon-expired-users" class="nav_link">
              <fa class="bx bx-layer nav_logo-icon" :icon="['fas', 'list']" />
              <span class="nav_name">Sertifikat muddati</span>
            </router-link>
            <router-link to="/newuser" class="nav_link">
              <fa
                class="bx bx-layer nav_logo-icon"
                :icon="['fas', 'user-plus']"
              />
              <span class="nav_name">Foydalanuvchi qo'shish</span>
            </router-link>
          </template>
        </div>
      </div>
      <p @click="logout" class="nav_link mb-5 log-out">
        <fa class="bx bx-layer nav_logo-icon" :icon="['fas', 'circle-user']" />
        <span class="nav_name">&nbsp;Chiqish</span>
      </p>
    </nav>
  </div>
</template>

<script>
export default {
  computed: {
    fullname() {
      return JSON.parse(localStorage.getItem("fullname"));
    },
    isNavOpened() {
      return this.$store.getters.isNavOpened;
    },
    isUserActive() {
      return this.$store.state.isUserActive;
    },
    isUserAdmin() {
      return this.$store.state.isAdmin;
    },
    isExamActive() {
      return this.$store.state.isExamActive;
    },
    isCategoryActive() {
      return this.$store.state.isCategoryActive;
    },
    isQuestionActive() {
      return this.$store.state.isQuestionActive;
    },
    isResultActive() {
      return this.$store.state.isResultActive;
    },
    isGroupActive() {
      return this.$store.state.isGroupActive;
    },
  },
  methods: {
    toggleHamburgerMenu() {
      this.$store.commit("toggleNavbar");
    },
    logout() {
      if (confirm("Rostdan ham tizimdan chiqmoqchimisiz?")) {
        localStorage.removeItem("token");
        localStorage.removeItem("isAdmin");
        localStorage.removeItem("userId");
        localStorage.removeItem("fullname");
        // localStorage.removeItem('userInfo')
        this.$store.dispatch("logout");
        // this.$store.commit("toggleNavbar");
      }
    },
  },
};
</script>

<style scoped>
.title {
  position: relative;
  height: 3rem;
  /* margin-left: 2rem; */
  width: 100%;
  overflow: hidden;
}
.title p {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  animation: myfirst 25s linear infinite;
  white-space: nowrap;
  -moz-animation: myfirst 25s; /* Firefox */
}
.header {
  width: 100%;
  height: var(--header-height);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  background-color: var(--white-color);
  z-index: 10;
  transition: 0.5s;
}

.header_toggle {
  color: var(--first-color);
  font-size: 1.5rem;
  cursor: pointer;
  margin-bottom: 4px;
}

.header_img {
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  border-radius: 50%;
  overflow: hidden;
}

.header_img img {
  width: 40px;
}

.l-navbar {
  position: fixed;
  top: 0;
  left: -30%;
  width: var(--nav-width);
  height: 100%;
  background-color: var(--first-color);
  padding: 0.5rem 1rem 0 0;
  transition: 0.5s;
  z-index: var(--z-fixed);
}
.l-navbar hr {
  background: none;
}
.l-navbar:not(.show):hover {
  width: calc(var(--nav-width) + 156px);
  padding-right: 0;
}
.nav {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
}
.bx-menu {
  font-size: 1.2rem;
}
.bx-menu:hover {
  opacity: 0.7;
}
.bx-menu:active {
  opacity: 1;
}
.nav_logo,
.nav_link {
  display: grid;
  grid-template-columns: max-content max-content;
  align-items: center;
  column-gap: 1rem;
  padding: 0.5rem 0 4px 2.5rem;
}
.nav_logo img {
  width: 30px;
}
.nav_link:last-child {
  column-gap: 0.7rem;
}

.nav_logo {
  position: relative;
  left: -2.5%;
  margin-bottom: 2rem;
}
.nav_logo .nav_logo-icon {
  padding: 5px 8px 6px;
  border-radius: 25px;
  background: #fff;
  color: rgb(85, 82, 82);
}
.nav_logo-icon {
  font-size: 1.1rem;
  color: var(--first-color-light);
  /* color: var(--white-color); */
}
.nav_logo-name {
  color: var(--white-color);
  font-weight: 300;
  font-size: 1.4rem;
}
.nav_link {
  position: relative;
  color: var(--first-color-light);
  margin-bottom: 8px;
  transition: all 0.3s ease;
}
.nav_list h4,
.nav_list h4 .nav_logo-icon:first-child,
.router-link-active.nav_link,
.router-link-active.nav_link .nav_logo-icon,
.nav_link.activate .nav_logo-icon,
.nav_link.activate {
  color: #fff;
}
.nav_link:hover,
.nav_link:hover .nav_logo-icon {
  color: var(--white-color);
}

.nav_icon {
  font-size: 1.25rem;
}
.show {
  left: 0;
}
.body-pd {
  padding-left: calc(var(--nav-width) + 1rem);
}
.l-navbar.show hr {
  width: 100%;
  border: 0;
  height: 0.9px;
  margin: 1rem auto;
  background: #fff;
}
.log-out {
  cursor: pointer;
}
@keyframes myfirst /* Firefox */ {
  0% {
    left: -55%;
  }
  100% {
    left: 100%;
  }
}
@media screen and (min-width: 768px) {
  body {
    margin: calc(var(--header-height) + 1rem) 0 0 0;
    padding-left: calc(var(--nav-width) + 2rem);
  }

  .header {
    height: calc(var(--header-height) + 1rem);
    padding: 0 2rem 0 calc(var(--nav-width) + 2rem);
  }

  .header_img {
    width: 40px;
    height: 40px;
  }

  .header_img img {
    width: 45px;
  }

  .l-navbar {
    left: 0;
    padding: 1rem 1.8rem 0 0;
  }
  .l-navbar.show {
    padding: 1rem 1rem 0 0;
  }

  .show {
    width: calc(var(--nav-width) + 156px);
  }

  .body-pd {
    padding-left: calc(var(--nav-width) + 188px);
  }
}
@media screen and (max-width: 768px) {
  .l-navbar.show {
    padding: 1rem 1.8rem 0 0;
  }
  .l-navbar.show {
    width: calc(var(--nav-width) + 156px);
    padding-right: 0;
  }
  .header {
    padding: 0 2rem 0 1rem;
  }
  /* p {
    display: none;
  } */
  /* hr {
    display: none;
  } */
}
</style>
