<template>
  <div id="lb-footer">
    <!-- Footer -->
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <!-- span class="copyright">Copyright &copy; {{footer.owner}}, {{footer.year}}</span -->
            <span class="copyright">Copyright &copy; {{getOwner}}, {{footer.year}}</span>
          </div>
          <div class="col-md-4">
            <ul class="list-inline social-buttons">

              <li v-for="social in footer.social_list" class="list-inline-item">
                <a href="#">
                  <i v-bind:class="social.class"></i>
                </a>
              </li>
            </ul>
          </div>
          <div class="col-md-4">

            <ul class="list-inline quicklinks">
              <li><router-link to='lb-privacy'>Privacy Policy</router-link></li>
              <li><router-link to='lb-terms'>Terms of Use</router-link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>

  </div>
</template>

<script>

export default {
  name: 'lb-footer',
  data() {
    return {
      footer: {
        title: 'Footer',
        owner: 'your company name',
        year: '2018',
        social_list: [
          { class: 'fa fa-twitter' },
          { class: 'fa fa-facebook' },
          { class: 'fa fa-linkedin' },
        ],
      },
    };
  },

  computed: {
    getOwner() { return this.$store.state.owner; },
  },
};

</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
