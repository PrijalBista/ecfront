import Vue from 'vue'
import App from './App.vue'

import Auth from './packages/auth/Auth'
import Axios from './packages/axios/Axios'
import {store} from './store/store'

/*
    this.$store.dispatch('asyncSetAuthUser', this.auth); this.auth : { client_id: 2, client_secret.....}
    this.$store.dispatch('asyncUnsetAuthUser');
    this.$store.getters.isAuth
    this.$store.getters.getAuthUser
*/

Vue.use(Axios);
Vue.use(Auth);

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
