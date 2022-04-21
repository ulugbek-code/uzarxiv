<template>
  <header :class="[isNavOpened ? 'body-pd' : '']" class="header" id="header">
    <!-- bx bx-menu for menu icon -->
    <div @click="toggleHamburgerMenu" class="header_toggle">
      <fa class="bx-menu" :icon="['fas', 'bars']" />
    </div>
    <div class="header_img">
      <img src="https://i.imgur.com/hczKIze.jpg" alt="" />
    </div>
  </header>
  <div :class="[isNavOpened ? 'show' : '']" class="l-navbar" id="nav-bar">
    <!-- show class above -->
    <nav class="nav">
      <div>
        <a href="#" class="nav_logo">
          <fa class="bx bx-layer nav_logo-icon" :icon="['fas', 'a']" />
          <span class="nav_logo-name">Quiz App</span>
        </a>
        <div class="nav_list">
          <hr />
          <a href="#" class="nav_link active">
            <fa
              class="bx bx-layer nav_logo-icon"
              :icon="['fas', 'circle-user']"
            />
            <span class="nav_name">Admin</span>
          </a>
          <hr />
          <a href="#" class="nav_link">
            <fa
              class="bx bx-layer nav_logo-icon"
              :icon="['fas', 'gauge-high']"
            />
            <span class="nav_name">Dashboard</span>
          </a>
          <Transition mode="in-out">
            <p v-if="isNavOpened" class="px-4 text-light">Quizapp</p>
          </Transition>
          <a href="#" class="nav_link">
            <fa
              class="bx bx-layer nav_logo-icon"
              :icon="['fas', 'user-group']"
            />
            <span class="nav_name">Foydalanuvchilar</span>
          </a>
          <a href="#" class="nav_link">
            <fa
              class="bx bx-layer nav_logo-icon"
              :icon="['fas', 'square-poll-horizontal']"
            />
            <span class="nav_name">Imtihonlar</span>
          </a>
          <a href="#" class="nav_link">
            <fa
              class="bx bx-layer nav_logo-icon"
              :icon="['fas', 'layer-group']"
            />
            <span class="nav_name">Kategoriyalar</span>
          </a>
          <a href="#" class="nav_link">
            <fa
              class="bx bx-layer nav_logo-icon"
              :icon="['fas', 'circle-question']"
            />
            <span class="nav_name">Savollar</span>
          </a>
          <a href="#" class="nav_link">
            <fa
              class="bx bx-layer nav_logo-icon"
              :icon="['fas', 'circle-check']"
            />
            <span class="nav_name">Imtihon Natijalari</span>
          </a>
          <a href="#" class="nav_link">
            <fa
              class="bx bx-layer nav_logo-icon"
              :icon="['fas', 'user-plus']"
            />
            <span class="nav_name">Foydalanuvchi qo'shish</span>
          </a>
        </div>
      </div>
      <a @click="logout" href="#" class="nav_link">
        <fa class="bx bx-layer nav_logo-icon" :icon="['fas', 'circle-user']" />
        <span class="nav_name">&nbsp;SignOut</span>
      </a>
    </nav>
  </div>
</template>

<script>
export default {
  computed: {
    isNavOpened() {
      return this.$store.getters.isNavOpened;
    },
  },
  methods: {
    toggleHamburgerMenu() {
      this.$store.commit("toggleNavbar");
    },
    logout() {
      localStorage.removeItem("token");
      this.$store.commit("logout");
    },
  },
};
</script>

<style scoped>
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
  z-index: var(--z-fixed);
  transition: 0.5s;
}

.header_toggle {
  color: var(--first-color);
  font-size: 1.5rem;
  cursor: pointer;
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
  height: 100vh;
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
  color: #555;
}
.nav_logo-icon {
  font-size: 1.1rem;
  color: var(--white-color);
}
.nav_logo-name {
  color: var(--white-color);
  font-weight: 300;
  font-size: 1.4rem;
}
.nav_link {
  /* background: aqua; */
  position: relative;
  color: var(--first-color-light);
  margin-bottom: 8px;
  transition: 0.3s;
}
.nav_link:hover {
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
.v-enter-active,
.v-leave-active {
  transition: opacity 0.35s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
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
  p {
    display: none;
  }
  hr {
    display: none;
  }
}
</style>
