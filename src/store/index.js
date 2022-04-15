import { createStore, createLogger } from "vuex";

const state = {
  items: [0, 0, 0],
  activeIndex: null,
};

export const mutations = {
  addUpvote: (state, payload) => {
    return state.items[payload.rowIndex]++;
  },
  updateActiveIndex: (state, payload) => {
    if (payload.rowIndex === state.activeIndex) {
      state.activeIndex = null;
    } else {
      state.activeIndex = payload.rowIndex;
    }
  },
};

export default createStore({
  state,
  mutations,
  plugins: process.env.NODE_ENV !== "production" ? [createLogger()] : [],
});
