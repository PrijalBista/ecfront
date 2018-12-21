<template>
  <div>

	<h4>isAuth : {{$store.getters.isAuth}}</h4>

	<h4>isLoading : {{isLoading}}</h4>

	<ul>
		<li v-if="!$store.getters.isAuth"><router-link to="/password/reset">Forgot Password</router-link></li>
	</ul>

	<hr>
	<router-view/><hr>
	<app-register/><hr>
	<app-login/><hr>
	<app-logout/>
	<hr>


  </div>
</template>

<script>
import Register from './components/auth/Register.vue';
import Login from './components/auth/Login.vue';
import Logout from './components/auth/Logout.vue';

import {eventBus} from './main.js'

export default {

	created(){
		eventBus.$on('showError', (e)=>{
			this.error = e;
		})
	},

	computed: {
		isLoading(){
			return this.$store.getters.isLoading;
		}
	},

	components:{
		appRegister: Register,
		appLogin : Login,
		appLogout : Logout,
	}
};
</script>

