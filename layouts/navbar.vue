<template>
  <v-app-bar class="navbar" height="70">
    <h1>Where in the world?</h1>
    <v-switch v-model="darkMode" @click="switchMode()">Dark mode</v-switch>
  </v-app-bar>
</template>
<script>
export default {
  name: "NavbarLayout",
  data() {
    return {
      darkMode: false,
    }
  },
  methods:{
    switchMode() {
      console.log(this.darkMode)
    }
  }
};
</script>
<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3%;
}
</style>
