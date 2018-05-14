import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    owner: 'Specials',
    service: 'http://localhost:4000',
  },
  mutations: {
    // TODO impl mutations
  },
  getters: {
    owner: state => state.owner,
    service: state => state.service,
    // TODO impl getters
  },
  actions: {
    // TODO actions,
    // actions are funcs with side effects and can involve asynchronous operation
  },
});

// export default store;
