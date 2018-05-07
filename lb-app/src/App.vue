<template>
  <div id="app">
    <lb-nav></lb-nav><!-- fixes the nav at top of page -->
    <img src="./assets/logo.png" vspace="20">
    <lb-header></lb-header>
    <router-view></router-view> <!-- components injected here -->
    <lb-footer></lb-footer>
  </div>
</template>

<script>
// import components common to all views
import lbHome from './components/Home';
import lbHeader from './components/Header';
import lbFooter from './components/Footer';
import lbNav from './components/Nav';
import lbLogin from './components/Login';
import lbAbout from './components/About';
import lbPrivacy from './components/Privacy';
import lbTerms from './components/Terms';
//
export default {
  name: 'app',
  components: {
    lbNav,
    lbHome,
    lbLogin,
    lbHeader,
    lbFooter,
    lbAbout,
    lbPrivacy,
    lbTerms,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
