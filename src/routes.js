// import Products from './views/ProductsPage.vue'
// import RegisterLogin from './views/RegisterLoginPage.vue'
import Vue from 'vue';
import Home from './views/Home.vue'
import ProductDetail from './views/ProductDetail.vue'
import Account from './views/Account.vue'
import WishList from './views/WishList.vue'
import Cart from './views/Cart.vue'
import Checkout from './views/Checkout.vue'
import ForgotPassword from './views/ForgotPassword.vue'
import ResetPassword from './views/ResetPassword.vue'
import Error404 from './views/Error404.vue'

import {store} from './store/store.js'

export const routes = [

	{
		path: '/password/reset', 
		component: ForgotPassword,
		meta:{ forAuth: false },
		beforeEnter: (to, from, next) => {
        	Vue.auth.isAuth() == false ? next(): next('/');
      	}
	},

	/*
	*	Reset link from Laravel's password reset link email.
	*	eg: http://localhost:8080/#/password/reset/06f6c46500d2285b3d933afa49821d33617acf5f0aaa5f1f64a5a8a65001ede3
	*/
	{
		path: '/password/reset/:token', 
		component: ResetPassword,
		props: true,
		meta: { forAuth: false },
		beforeEnter: (to, from, next) => {
        	Vue.auth.isAuth() == false ? next(): next('/');
      	}
	},

	{
		path:'/',
		component:Home,
		meta :{requiresAuth: false}
	},

	{
		path:'/product/:id',
		component:ProductDetail,
		meta: {requiresAuth: false},
	},

	{
		path:'/account',
		component:Account,
		meta: {forAuth: false},
		beforeEnter: (to, from, next) => {
        	Vue.auth.isAuth() == false ? next(): next('/');
      	}
	},

	{
		path:'/wishlist',
		component:WishList,
		meta: {requiresAuth: false}
	},
	
	{
		path:'/cart',
		component:Cart,
		meta: {requiresAuth: false},
	},

	{
		path:'/checkout',
		component:Checkout,
		meta: {requiresAuth: false},
		beforeEnter: (to, from, next) => {
			store.state.cart.length > 0 ? next(): next('/');
			// store.state.redirectTo = to.fullPath;
         	//Vue.auth.isAuth() == false ? next('/account'): next();
      	}
	},

	{
		path: '*',
		component: Error404,
		meta:{requiresAuth: false}
	}
	
];
