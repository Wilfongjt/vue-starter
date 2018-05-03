import axios from 'axios';
// import Vue from 'vue';
// import { APIENDPOINT, getHeader } from '../../app.config';
import { APIENDPOINT } from '../../app.config';

export default {
  login(value) {
    return new Promise((resolve, reject) => {
      // axios.post(APIENDPOINT + '/auth/login', value)
      axios.post('%a%b'.replace('%a', APIENDPOINT).replace('%b', '/auth/login'), value)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
    });
  },
};
