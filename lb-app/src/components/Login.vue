<template>
  <div class="lb-login">
    <h1>{{ msg }}</h1>
    <h1>Coding Instructions</h1>
    <ul>
      <li>Remove instructions for production</li>
      <li>source: Login.vue</li>
      <li>need to set up service to validate login</li>
      <li>uses
      <a href="https://coligo.io/create-mock-rest-api-with-json-server/">json-server</a>
      to mock authentication
      </li>
    </ul>
    <b-form @submit="onSubmit" @reset="onReset">

      <b-form-group id="exampleInputGroup1"
                    label="Email address:"
                    label-for="exampleInput1"
                    description="We'll never share your email with anyone else.">
        <label class="sr-only" for="exampleInput1">Your Email</label>
        <b-form-input id="exampleInput1"
                      type="email"
                      v-model="credentials.email"
                      required
                      placeholder="Enter email">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup3"
                    label="Your Password:"
                    label-for="exampleInput3"
                    description="Upper and lower case, number, and punctuation">
        <label class="sr-only" for="exampleInput3">New Password</label>
          <b-form-input id="exampleInput3"
                        type="password"
                        v-model="credentials.password"
                        required
                        placeholder="Enter password">
          </b-form-input -->
        </b-form-group>
    </b-form>

    <form v-on:submit.prevent="loginUser()">

        <input type="text" placeholder="enter username" v-model="credentials.userID">

        <input type="password" placeholder="enter password" v-model="credentials.password">

        <button type="submit" value="login" >LOGIN</button>

    </form>

  </div>
</template>

<script>

// import loginService from 'loginService';

export default {
  name: 'lb-login',
  data() {
    return {
      msg: 'Login',
      credentials: {
        userID: '',
        password: '',
        counter: 0,
      },
    };
  },
  methods: {
    loginUser: function aa() {
      /* eslint-disable no-console */
      console.log('loginUser needs some code here!');
      /* eslint-enable no-console */
    },
    loginAuth: function bb() {
      /* eslint-disable no-console */
      console.log('loginAuth needs some code here');
      /* eslint-enable no-console */
    },
  },
  created: function cc() {
    /* eslint-disable no-console */
    console.log('created 1');
    /* eslint-enable no-console */
    this.loginAuth();
    /* eslint-disable no-console */
    console.log('created out');
    /* eslint-enable no-console */
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  /* list-style-type: none; */
  padding: 0;
}

li {
  display: ;
  list-style-type: none;
  margin: 0 10px;
}

a {
  color: #42b983;
}

form {
        input {
            height: 40px;
            display: block;
            margin :10px 0;
            width: 300px;
        }
        button {
            height: 30px;
            width: 120px;
        }
    }
</style>
