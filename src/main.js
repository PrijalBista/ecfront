import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import Products from './Components/Products.vue'
import ProductDetail from './Components/ProductDetail.vue'
import Carts from './Components/Carts.vue'
Vue.use(VueRouter)

const routes=[
	{path:'/',component:Products},
	{path:'/product/:id',component:ProductDetail},
  {path:'/carts',component:Carts},
]

const router=new VueRouter({routes, mode:'history'})

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
  router,
  store,
  render: h => h(App)
})
