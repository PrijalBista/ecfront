import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import Products from './Components/Products.vue'
import ProductDetail from './Components/ProductDetail.vue'

Vue.use(VueRouter)

const routes=[
	{path:'/',component:Products},
	{path:'/product/:id',component:ProductDetail}
]

const router=new VueRouter({routes, mode:'history'})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
