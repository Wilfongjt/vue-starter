<template>
  <div class="lb-about">

    <h1>{{ msg }}</h1>
    <h1>Coding Instructions</h1>
    <ul>
      <li>Remove instructions for production</li>
      <li>source: About.vue</li>
      <li>Describe yourself and the function of this application.</li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'lb-about',
  data() {
    return {
      msg: 'About',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  display: ;
  list-style-type: none;
  padding: 1;
}

li {
  list-style-type: none;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
