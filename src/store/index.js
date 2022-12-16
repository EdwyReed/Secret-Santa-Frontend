import { createStore } from "vuex";

export default createStore({
  state: {
    user: JSON.parse(localStorage.getItem("user")),
  },
  getters: {
    user: (state) => state.user,
  },
  mutations: {
    SET_USER(state, data) {
      state.user = data;
      localStorage.setItem("user", JSON.stringify(data));
    },
  },
  actions: {
    setUser({ commit }, data) {
      commit("SET_USER", data);
    },
  },
  modules: {},
});
