// console.log('main.js');
import Vue from 'vue';
import Router from 'vue-router';
import lbHome from '@/components/Home';
import lbLogin from '@/components/Login';
import lbNewAccount from '@/components/guest/NewAccount';
import lbAbout from '@/components/About';
import lbPrivacy from '@/components/Privacy';
import lbTerms from '@/components/Terms';

Vue.use(Router);
const routes = [
  {
    path: '/',
    redirect: '/lb-home',
  },
  {
    path: '/lb-home',
    name: 'Home',
    component: lbHome,
  },
  {
    path: '/lb-login',
    name: 'Login',
    component: lbLogin,
  },
  {
    path: '/lb-new-account',
    name: 'NewAccount',
    component: lbNewAccount,
  },
  {
    path: '/lb-about',
    name: 'About',
    component: lbAbout,
  },
  {
    path: '/lb-privacy',
    name: 'Privacy',
    component: lbPrivacy,
  },
  {
    path: '/lb-terms',
    name: 'Terms',
    component: lbTerms,
  },
];

export default new Router({
  mode: 'history',
  routes,
});
