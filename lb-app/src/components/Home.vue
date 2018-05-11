<template>
  <div class="lb-home">

    <b-container class="bv-example-row">
        <b-row v-for="special in home.specials">
            <b-col><h4>{{special.store.name}}</h4>
              <br/>waiting for you @ {{special.store.location.street}}
              <br/><h1>{{special.title}}</h1>
              <br/><h4>{{special.details}}</h4>
              <br/><h2>${{special.price}}</h2>
              <hr/>
            </b-col>
        </b-row>

    </b-container>
  </div>
</template>

<script>
import axios from 'axios';

export default {

  name: 'lb-home',
  data() {
    return {
      home: {
        specials: [],
      },
    };
  },
  methods: {
    // TODO call to restful
  },

  created() {
    axios.get('http://localhost:4000/specials')
    .then((response) => {
      // JSON responses are automatically parsed.
      // this.posts = response.data;
      // eslint-disable-next-line
      console.log(response.data);
      this.home.specials = response.data;
    }).catch((e) => {
      this.errors.push(e);
    });
    // async / await version (created() becomes async created())
    //
    // try {
    //   const response = await axios.get(`http://jsonplaceholder.typicode.com/posts`)
    //   this.posts = response.data
    // } catch (e) {
    //   this.errors.push(e)
    // }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  color: #999999;
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

.col { border: 1px solid transparent; }
</style>
