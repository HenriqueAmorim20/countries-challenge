export const state = () => ({
  darkMode: window.localStorage.getItem("theme") === "true" ? true : false,
});

export const mutations = {
  SWITCH(state) {
    state.darkMode = !state.darkMode;
  },
  GET(state) {
    return state;
  },
};

export const actions = {
  SWITCH(state) {
    return new Promise((resolve) => {
      state.commit("SWITCH");
      window.localStorage.setItem("theme", state.state.darkMode)
      resolve(true);
    });
  },
  GET(state) {
    return state.state;
  },
};
