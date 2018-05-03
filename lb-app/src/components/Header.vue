<template>
  <div id="lb-header">
    <!-- Header -->
    <!-- vuejs version 2.9.3 -->
    <header class="masthead">
      <div class="container">
        <!-- div class="intro-text">
        <!-- div id="ptitle" class="intro-lead-in">{{header.title}}</div -->
          <!-- div class="intro-heading text-uppercase">{{header.subtitle}}</div -->
          <!-- a class="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">{{header.more}}</a -->
        <!-- /div -->
      </div>
    </header>
  </div>
</template>

<script>

export default {
  name: 'lb-header',
  data() {
    return {
      header: {
        title: 'Welcome to the Lyttle Bit starter app!',
        subtitle: 'We like building things',
        more: 'Tell Me More',
      },
    };
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
