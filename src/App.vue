<template>
  <vue-progress-bar></vue-progress-bar>
  <template v-if="isAuth || token">
    <nav-bar></nav-bar>
    <div
      @click="toggleHamburgerMenu"
      :class="[isNavOpened ? 'offset' : '']"
    ></div>
  </template>
  <div :class="[isNavOpened ? 'body-pd' : '']" class="app-container">
    <!-- body-pd class above -->
    <router-view> </router-view>
  </div>
</template>

<script>
import NavBar from "./components/navigation/NavBar.vue";
export default {
  name: "App",
  components: {
    NavBar,
  },
  computed: {
    isNavOpened() {
      return this.$store.getters.isNavOpened;
    },
    isAuth() {
      return this.$store.getters.isAuth;
    },
    token() {
      return this.$store.state.token;
    },
  },
  methods: {
    toggleHamburgerMenu() {
      this.$store.commit("toggleNavbar");
    },
  },
  // created() {
  //   this.$router.beforeEach((to, from, next) => {
  //     //  does the page we want to go to have a meta.progress object

  //     //  start the progress bar
  //     this.$Progress.start();
  //     //  continue to next page
  //     next();
  //   });
  //   //  hook the progress bar to finish after we've finished moving router-view
  //   this.$router.afterEach(() => {
  //     //  finish the progress bar
  //     this.$Progress.finish();
  //   });
  // },
};
</script>

<style>
:root {
  --header-height: 3rem;
  --nav-width: 100px;
  --first-color: rgb(52, 58, 64);
  --first-color-light: #afa5d9;
  --white-color: #f7f6fb;
  --normal-font-size: 1rem;
  --z-fixed: 100;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a {
  text-decoration: none;
}
.app-container {
  transition: 0.5s;
  margin-top: calc(var(--header-height) + 1rem);
  padding-left: calc(var(--nav-width) + 1.2rem);
}
.app-wrapper {
  padding: 0 1rem 0 0;
}
.body-pd {
  padding-left: calc(var(--nav-width) + 1rem);
}
.app-container.body-pd {
  padding-left: calc(var(--nav-width) + 11rem);
}
.text a {
  color: #444;
}
.card-title {
  font-weight: 400;
}
.table {
  margin-bottom: 0px !important;
}
td {
  vertical-align: middle;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  /* margin: 0; */
}
@media screen and (max-width: 768px) {
  .offset {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 10;
  }
  .app-wrapper {
    padding: 0;
  }
  .body-pd {
    padding-left: calc(var(--nav-width) + 188px);
  }
  .app-container {
    margin-top: 48px;
    padding-left: 0;
  }
  .app-container.body-pd {
    /* padding-left: calc(var(--nav-width)); */
    padding-left: 0;
  }
}
</style>
