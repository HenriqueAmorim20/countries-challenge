<template>
  <div>
    <v-app-bar
      class="nav"
      height="80"
      flat
      :class="darkMode ? 'dark' : 'light'"
    >
      <h2>Where in the world?</h2>
      <v-spacer></v-spacer>
      <div class="switcher">
        <v-switch
          light
          color="white"
          inset
          dense
          v-model="darkMode"
          @click="switchMode()"
          class="toggle"
        ></v-switch>
        <span>Dark mode</span>
        <i class="fa-solid fa-moon"></i>
      </div>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  name: "NavbarLayout",
  data() {
    return {
      darkMode: null,
    };
  },
  mounted() {
    this.darkMode = this.$store.state.theme.darkMode;
  },
  methods: {
    switchMode() {
      this.$store.dispatch("theme/SWITCH");
    },
  },
};
</script>
<style scoped>
.nav {
  padding: 0 1%;
  background-color: transparent !important;
  color: inherit;
}

.nav h2 {
  font-size: clamp(1rem, 5vw, 1.8rem);
}

@media (max-width: 400px) {
  .switcher span {
    display: none;
  }

  .switcher .toggle {
    margin: 1.2em -12px 0 !important;
  }
}

.switcher {
  display: flex;
  align-items: center;
  font-size: clamp(0.8rem, 2vw, 1rem);
}

.switcher .toggle {
  margin: 1.2em 0 0;
}

.fa-moon {
  margin-left: 0.3em;
  font-size: clamp(1rem, 2vw, 1.2rem);
}

.dark {
  background-color: var(--DarkModeElements) !important;
}

.light {
  background-color: var(--LightModeElements) !important;
}
</style>
