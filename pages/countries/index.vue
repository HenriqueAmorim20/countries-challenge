<template>
  <div class="main">
    <div class="filters">
      <v-text-field
        v-model="name"
        :disabled="loading"
        :light="!darkMode"
        :dark="darkMode"
        clearable
        color="currentColor"
        placeholder="Search for a country..."
        class="filters-search"
        @keyup="applyFilter()"
        @click:clear="
          name = null;
          applyFilter();
        "
      >
        <template v-slot:prepend>
          <v-icon color="currentColor">mdi-magnify</v-icon>
        </template>
      </v-text-field>
      <v-select
        :items="regions"
        :disabled="loading"
        v-model="region"
        :light="!darkMode"
        :dark-mode="darkMode"
        :menu-props="{
          light: !darkMode,
          offsetY: true,
          rounded: true,
        }"
        clearable
        placeholder="Filter by Region"
        color="currentColor"
        class="filters-region"
        @change="applyFilter()"
      >
        <template v-slot:prepend>
          <v-icon color="currentColor">mdi-filter-variant</v-icon>
        </template>
      </v-select>
    </div>
    <div v-if="!loading" class="countries">
      <Country
        v-for="country in countries"
        :key="country.name.common"
        :country="country"
        :dark-mode="darkMode"
        class="country"
      />
    </div>
    <div v-if="countries && countries.length === 0">
      <h3>No results found...</h3>
    </div>
    <div v-if="loading" class="loaders">
      <v-skeleton-loader
        v-for="index in 50"
        :key="index"
        :light="!darkMode"
        type="image, article"
        tile
      ></v-skeleton-loader>
    </div>
  </div>
</template>
<script>
import Country from "@/layouts/country.vue";

export default {
  name: "CountriesPage",
  components: {
    Country,
  },
  data() {
    return {
      regions: ["Africa", "Americas", "Asia", "Europe", "Oceania"],
      allCountries: null,
      countries: null,
      region: null,
      name: null,
      darkMode: null,
      loading: true,
    };
  },
  watch: {
    "$store.state.theme.darkMode": function () {
      this.darkMode = this.$store.state.theme.darkMode;
    },
  },
  mounted() {
    this.darkMode = this.$store.state.theme.darkMode;
    this.getCountries();
  },
  methods: {
    async getCountries() {
      this.allCountries = await this.$axios.$get("/all");
      this.countries = this.allCountries;
      this.loading = false;
    },
    async applyFilter() {
      this.countries = this.allCountries.filter((x) => {
        if (this.name && this.region)
          return (
            x.name.common.toLowerCase().includes(this.name.toLowerCase()) &&
            x.region === this.region
          );
        if (this.name)
          return x.name.common.toLowerCase().includes(this.name.toLowerCase());
        if (this.region) return x.region === this.region;
        return true;
      });
    },
  },
};
</script>
<style>
.main {
  max-width: 1440px;
  margin: 0 auto;
  padding: 1rem;
}

.filters {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 1rem;
  margin: 1rem 0;
}

.filters-search {
  max-width: max(30%, 300px) !important;
}

.filters-region {
  max-width: 200px !important;
}

.countries,
.loaders {
  margin-top: 2rem;
  display: grid;
  gap: 4rem;
  grid-template-columns: repeat(4, 1fr);
  padding: 0 2rem;
}

@media (max-width: 1100px) {
  .countries,
  .loaders {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 900px) {
  .countries,
  .loaders {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .countries,
  .loaders {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
