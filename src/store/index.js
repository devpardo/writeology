import Vue from 'vue'
import Vuex from 'vuex'

//fake json
import json from '../assets/data.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articles : []
  },
  getters: {
    getArticles: (state) => state.articles
  },
  mutations: {
    SET_ARTICLES(state, articles) {
      state.articles = articles;
    },
  },
  actions: {
    async fetchArticles({ commit }) {
      try {
        const data = json
        commit("SET_ARTICLES", data);
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {
  }
})
