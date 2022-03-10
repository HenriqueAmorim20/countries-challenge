<template>
  <v-app :class="darkMode ? 'dark-mode' : 'light-mode'">
    <Navbar />
    <v-main>
      <Nuxt />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from "./navbar.vue";
import Footer from "./footer.vue";

export default {
  name: "DefaultLayout",
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      darkMode: true,
    };
  },
};
</script>

<style>
:root {
  --DarkModeBackground: hsl(207, 26%, 17%);
  --DarkModeElements: hsl(209, 23%, 22%);
  --DarkModeText: hsl(0, 0%, 100%);
  --LightModeBackground: hsl(0, 0%, 98%);
  --LightModeElements: hsl(0, 0%, 100%);
  --LightModeText: hsl(200, 15%, 8%);
  --LightModeInput: hsl(0, 0%, 52%);
}

.light-mode {
  background-color: var(--LightModeBackground) !important;
  color: var(--LightModeText) !important;
}

.dark-mode {
  background-color: var(--DarkModeBackground) !important;
  color: var(--DarkModeText) !important;
}
</style>
