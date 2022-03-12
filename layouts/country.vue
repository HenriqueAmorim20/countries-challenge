<template>
  <v-card
    class="country"
    :color="darkMode ? 'hsl(209, 23%, 22%)' : 'white'"
    flat
    @click="details()"
  >
    <img :src="country.flags.png" class="country-img" />
    <div class="country-info">
      <h2>{{ country.name.common }}</h2>
      <span><b>Population: </b>{{ country.population }}</span>
      <span><b>Region: </b>{{ country.region }}</span>
      <span>
        <b>Capital: </b>
        {{ country.capital ? country.capital[0] : "None" }}
      </span>
    </div>
  </v-card>
</template>
<script>
export default {
  name: "CountryLayout",
  props: {
    country: {
      type: Object,
      required: true,
    },
    darkMode: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    details() {
      this.$router.push("/countries/" + this.country.name.common);
    },
  },
};
</script>
<style scoped>
.country {
  color: inherit;
  cursor: pointer;
}

.country-img {
  width: 100%;
  aspect-ratio: 1.6;
}

.country-info {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 1rem 1rem 1.5rem;
}

.country-info h2 {
  margin-bottom: 0.7rem;
  font-size: 1.3rem;
}
.country-info span {
  font-size: 0.9rem;
}

.country-info b {
  font-weight: 600;
}
</style>
