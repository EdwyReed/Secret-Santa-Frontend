import { createStore } from "vuex";

export default createStore({
  state: {
    user: JSON.parse(localStorage.getItem("user")),
    sendings: [],
    sendings_cards: [],
  },
  getters: {
    user: (state) => state.user,
    sendings: (state) => state.sendings,
    sendings_cards: (state) => state.sendings_cards,
  },
  mutations: {
    SET_USER(state, data) {
      state.user = data;
      localStorage.setItem("user", JSON.stringify(data));
    },
    PUT_SENDING(state, data) {
      state.sendings.push(data);
    },
    SET_SENDINGS(state, data) {
      state.sendings = data;
    },
    SET_SENDINGS_CARDS(state, data) {
      state.sendings_cards = data;
    },
  },
  actions: {
    setUser({ commit }, data) {
      commit("SET_USER", data);
    },
    putSending({ commit }, data) {
      commit("PUT_SENDING", data);
    },
    setSendings({ commit }, data) {
      commit("SET_SENDINGS", data);
    },
    setSendingsCards({ commit }, data) {
      commit("SET_SENDINGS_CARDS", data);
    },
  },
  modules: {},
});
