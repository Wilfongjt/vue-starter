// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import Vue from 'vue';
import Vuex from 'vuex';
import BootstrapVue from 'bootstrap-vue';
import App from './App';
import router from './router';
import store from './store';

Vue.use(Vuex);
Vue.use(BootstrapVue);
Vue.config.productionTip = false;
// eslint-disable-next-line
console.log('A1 store: %s'.replace('%s', store.state.owner));
// eslint-disable-next-line
console.log('A2 store: %s'.replace('%s', store.getters.owner));

/* eslint-disable no-new */
// const vapp = new Vue({
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
// eslint-disable-next-line
// console.log('B1 state.owner: %s'.replace('%s', app.$store.state.owner));
// eslint-disable-next-line
// console.log('B2 getters.owner: %s'.replace('%s', app.$store.getters.owner));
