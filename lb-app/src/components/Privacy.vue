<template>
  <div class="lb-privacy">

    <h1>{{ privacy.name }}</h1>

    <ul>
      <li v-for="item in privacy.policy"><h3>{{item.title}}</h3><h4>{{item.body}}</h4></li>

    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'lb-privacy',
  data() {
    return {
      privacy: {
        name: 'Privacy Policy',
        policy: [],
      },
      errors: [],
    };
  },
  created() {
    axios.get('http://localhost:4000/host')
    .then((response) => {
      // JSON responses are automatically parsed.
      // eslint-disable-next-line
      console.log('hi');

      // eslint-disable-next-line
      console.log(response.data);

      this.privacy.policy = response.data.policies.privacy;
      // eslint-disable-next-line
      console.log(this.privacy.policy);
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
