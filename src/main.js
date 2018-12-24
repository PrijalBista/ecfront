import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Auth from './packages/auth/Auth'
import Axios from './packages/axios/Axios'
import {store} from './store/store'
import {routes} from './routes'

Vue.use(Axios);
Vue.use(Auth);
Vue.use(VueRouter);

export const eventBus = new Vue({
	methods:{
		showLoginError(error){
			this.$emit('showLoginError', error);
		},
		showError(error){
			this.$emit('showError', error);
		},
		showMessage(message){
			this.$emit('showMessage', message);
		},
		loginAfterRegister(newUserInfo){
			this.$emit('loginAfterRegister', newUserInfo);
		}
	}
});

export const router = new VueRouter({
	mode: 'hash',
	routes,
	scrollBehavior (to, from, savedPosition) {
    	return { x: 0, y: 0 };
  	}
});

// router.beforeEach((to, from, next) => {
// 	if(to.meta.requiresAuth == false){			// eg: Cart
// 		next();
// 	}else if(to.meta.forAuth == false){			// eg: Forgot Password, Reset Password
// 		if(Vue.auth.isAuth() == false){
// 			next();
// 		}else{
// 			next('/');
// 		}
// 	}
// 	else if(to.meta.requiresAuth == true){		// eg: Order
// 		if(Vue.auth.isAuth() == true){
// 			next();
// 		}else{
// 			next('/account');
// 		}
// 	}
// 	next();
// });

new Vue({
  el: '#app',
  router,
  store,
  router,
  render: h => h(App)
})


