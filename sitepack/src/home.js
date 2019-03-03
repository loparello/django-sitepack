/* Loads istances of Vue.js and other JavaScript files for the home page. 
*  This file will get compiled into 'home.bundle.js' and loaded  
*  at the bottom of the home body.
*/  
import Vue from 'vue';

import Hero from './components/Hero';

new Vue({
  el: '#app',
  components: { 
    'hero': Hero 
  },
});