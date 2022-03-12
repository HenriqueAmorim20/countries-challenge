<template>
  <div class="main">
    <section>
      <v-btn class="btn" :class="darkMode ? 'dark' : 'light'" @click="back()">
        <v-icon>mdi-arrow-left-thin</v-icon>
        <span>back</span>
      </v-btn>
    </section>
    <v-skeleton-loader
      v-if="loading"
      :light="!darkMode"
      type="image, article"
      tile
      width="100%"
      style="margin: 2rem 0"
    ></v-skeleton-loader>
    <v-card v-if="!loading" class="country-card" flat color="transparent">
      <img :src="country.flags.png" class="country-card-img" />
      <aside class="country-card-info">
        <h1 class="country-card-info-top">{{ country.name.common }}</h1>
        <div class="country-card-info-left">
          <span><b>Native Name:</b>{{ (Object.values(country.name.nativeName)[0].common).replaceAll("-", " ") }}</span>
          <span><b>Population:</b>{{ country.population }}</span>
          <span><b>Region:</b>{{ country.region }}</span>
          <span><b>Subregion:</b>{{ country.subregion }}</span>
          <span><b>Capital:</b>{{ getCapitals() }}</span>
        </div>
        <div class="country-card-info-right">
          <span><b>Top level domain:</b>{{ country.tld[0] }}</span>
          <span><b>Currencies:</b>{{ getCurrencies() }}</span>
          <span><b>Languages:</b>{{ getLanguages() }}</span>
        </div>
        <div v-if="country.borders" class="country-card-info-bottom">
          <b>Border Countries:</b>
          <span
            :class="darkMode ? 'dark' : 'light'"
            v-for="(item, index) in country.borders"
            :key="index"
            >{{ item }}</span
          >
        </div>
      </aside>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "CountryPage",
  data() {
    return {
      country: null,
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
    this.getCountry();
  },
  methods: {
    back() {
      this.$router.push("/countries");
    },
    async getCountry() {
      try {
        this.country = (
          await this.$axios.$get("/name/" + this.$route.params.id)
        ).shift();
      } catch (error) {
        this.$router.push("/countries");
      }
      this.loading = false;
      console.log(this.country)
    },

    getCapitals() {
      return this.country.capital.join(", ");
    },

    getLanguages() {
      return Object.values(this.country.languages).join(", ");
    },

    getCurrencies() {
      let currencies = ""
      const currenciesArr =  Object.values(this.country.currencies)
      currenciesArr.forEach(currency => {
          currencies += currency.name + (currenciesArr.indexOf(currency) < currenciesArr.length - 1 ? ", " : '')
      });
      return currencies
    }
  },
};
</script>
<style scoped>
.main {
  max-width: 1440px;
  padding: 2rem 5%;
  color: inherit;
}

.btn {
  padding: 0 1.5rem !important;
  text-transform: capitalize;
  color: inherit !important;
}

.btn span {
  margin-left: 0.5rem;
}

.country-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-top: 2rem;
  color: inherit;
}

@media (max-width: 750px) {
  .country-card {
    grid-template-columns: 1fr;
  }
}

.country-card-img {
  width: 100%;
  aspect-ratio: 1.6;
}

.country-card-info {
  display: grid;
  grid-template-areas:
    "one"
    "two"
    "three"
    "four";
  gap: 1rem;
  margin: auto 0;
}

.country-card-info-top {
  grid-area: one;
}
.country-card-info-left {
  grid-area: two;
}
.country-card-info-right {
  grid-area: three;
}
.country-card-info-bottom {
  grid-area: four;
}

@media (min-width: 1000px) {
  .country-card-info {
    grid-template-areas:
      "one one"
      "two three"
      "four four";
  }
}

.country-card .country-card-info-top {
  font-size: 2rem;
}

.country-card .country-card-info-left,
.country-card-info-right {
  display: flex;
  flex-direction: column;
}

.country-card-info span {
  margin: 0.5rem 0 0;
}

.country-card-info b {
  font-weight: 600;
  margin: 0.5rem 0.5rem 0 0;
}

.country-card-info-bottom {
  font-size: 0.9rem;
  margin-top: 1rem;
}

.country-card-info-bottom {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.country-card-info-bottom b {
  font-weight: 600;
  margin: 0.5rem 0.4rem 0.5rem 0;
}

.country-card-info-bottom span {
  margin: 0.2rem 0.3rem;
  padding: 0.1rem 1rem;
  font-size: 0.8rem;
  background-color: #000;
  border-radius: 3px;
}

.dark {
  background-color: var(--DarkModeElements) !important;
}

.light {
  background-color: var(--LightModeElements) !important;
}
</style>
