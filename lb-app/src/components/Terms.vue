<template>
  <div class="lb-terms">

    <h1>{{ terms.name }}</h1>
    <ul>
      <li v-for="item in terms.policy"><h3>{{item.title}}</h3><h4>{{item.body}}</h4></li>

    </ul>

  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'lb-terms',
  data() {
    return {
      terms: {
        name: 'Terms of Use',
        policy: [],
      },
      errors: [],
    };
  },
  computed: {
    getService() { return this.$store.state.service; },
  },
  created() {
    // axios.get('http://localhost:4000/host')
    axios.get(this.$store.state.service.concat('/host'))
    .then((response) => {
      // JSON responses are automatically parsed.
      // eslint-disable-next-line
      console.log('hi');

      // eslint-disable-next-line
      console.log(response.data);

      this.terms.policy = response.data.policies.terms;
      // eslint-disable-next-line
      console.log(this.terms.policy);
    }).catch((e) => {
      this.errors.push(e);
      // eslint-disable-next-line
      console.log(e);
    });
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
