<template>
  <div id="lb-new-account">
    <h1>New Account</h1>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">

      <b-form-group id="exampleInputGroup1"
                    label="Email address:"
                    label-for="exampleInput1"
                    description="We'll never share your email with anyone else.">
        <label class="sr-only" for="exampleInput1">Your Email</label>
        <b-form-input id="exampleInput1"
                      type="email"
                      size="sm"
                      v-model="form.email"
                      required
                      placeholder="Enter email">
        </b-form-input>
      </b-form-group>

      <b-form-group id="exampleInputGroup2"
                    label="Your Name:"
                    label-for="exampleInput2"
                    description="Your First and Last Names">
        <label class="sr-only" for="exampleInput2">Your Name</label>
        <b-form-input id="exampleInput2"
                      type="text"
                      size="default"
                      v-model="form.name"
                      required
                      placeholder="Enter name">
        </b-form-input>
      </b-form-group>

      <b-form-group id="exampleInputGroup3"
                    label="Your Password:"
                    label-for="exampleInput3"
                    description="Upper and lower case, number, and punctuation">
        <label class="sr-only" for="exampleInput3">New Password</label>
        <b-form-input id="exampleInput3"
                      type="password"
                      size="lg"
                      :state="passwordState"
                      v-model="form.password"
                      required
                      placeholder="Enter password">
        </b-form-input>
        <b-form-invalid-feedback id="passwordFeedback">
          <!-- This will only be shown if the preceeding input has an invalid state -->
          Enter at least 8 characters
        </b-form-invalid-feedback>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      regular_expr: '/[a-zA-Z0-1]+/g',
      form: {
        email: '',
        name: '',
        password: '',
      },
      show: true,
    };
  },
  computed: {
    passwordState() {
      const validPWCharacters = this.form.regular_expr; // '/[a-zA-Z0-1]+/g';
      // const lowercase = '/[a-z]/g';
      // const uppercase = '/[A-Z]/g';
      // const numbers = '/[0-9]/g';

      let rc = true;

      // if (this.form.password.length < 8) { rc = false; }
      /* eslint-disable no-console */
      console.log('passwordState %s'.replace('%s', this.form.password));

      /* eslint-enable no-console */
      // if (this.form.password === null) {  false; }
      if (this.form.password === null
        || this.form.password.length < 8
      ) {
        /* eslint-disable no-console */
        console.log('passwordState < 8');
        /* eslint-enable no-console */
        return false;
      }
      if (!this.form.password.match(validPWCharacters)) {
        /* eslint-disable no-console */
        console.log('passwordState lowercase');
        /* eslint-enable no-console */
        rc = false;
      }

      // if (this.form.password.match(uppercase)) { rc = false; }
      // if (this.form.password.match(numbers)) { rc = false; }

      // upper case
      // lower case
      // number
      // punctuation
      return rc;
    },
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      // console.log(JSON.stringify(this.form));
      /* eslint-disable no-console */
      console.log('onSubmit 1');
      /* eslint-enable no-console */
    },
    onReset(evt) {
      evt.preventDefault();
      /* eslint-disable no-console */
      console.log('onSubmit 2');
      /* eslint-enable no-console */
      /* Reset our form values */
      this.form.email = '';
      this.form.name = '';
      this.form.password = '';
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => { this.show = true; });
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
