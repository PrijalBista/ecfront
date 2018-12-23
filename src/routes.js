// import ForgotPassword from './components/auth/ForgotPassword.vue'
// import ResetPassword from './components/auth/ResetPassword.vue'
// import Products from './views/ProductsPage.vue'
// import RegisterLogin from './views/RegisterLoginPage.vue'

import Home from './views/Home.vue'
import ProductDetail from './views/ProductDetail.vue'
import Account from './views/Account.vue'
import WishList from './views/WishList.vue'
import Cart from './views/Cart.vue'


export const routes = [

	// {
	// 	path: '/password/reset', 
	// 	component: ForgotPassword,
	// 	meta:{ forAuth: false }
	// },

	/*
	*	Reset link from Laravel's password reset link email.
	*	eg: http://localhost:8080/password/reset/06f6c46500d2285b3d933afa49821d33617acf5f0aaa5f1f64a5a8a65001ede3
	*/
	// {
	// 	path: '/password/reset/:token', 
	// 	component: ResetPassword,
	// 	props: true,
	// 	meta: { forAuth: false }
	// },

	{
		path:'/',
		component:Home,
		meta :{requiresAuth: false}
	},

	{
		path:'/product/:id',
		component:ProductDetail,
		meta: {requiresAuth: false}
	},

	{
		path:'/account',
		component:Account,
		meta: {forAuth: false}
	},

	{
		path:'/wishlist',
		component:WishList,
		meta: {requiresAuth: false}
	},
	
	{
		path:'/cart',
		component:Cart,
		meta: {requiresAuth: false}
	},
	
];
