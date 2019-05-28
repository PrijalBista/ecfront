<template>
	<div class="col-md-6">
		<div class="aa-myaccount-login">
		<h4>Login</h4>
		<div v-if="error!=''" class="alert alert-danger" role="alert"> <!---->
  			{{error.message}}
		</div>
		 <form action="" class="aa-login-form">
		  <label for="">Email address<span>*</span></label>
		   <input type="text" placeholder="Email" v-model="auth.username"> <!---->
		   <label for="">Password<span>*</span></label>
		    <input type="password" placeholder="Password" v-model="auth.password">  <!---->
		    <button type="submit" class="aa-browse-btn" @click.prevent="login(null)">Login</button> <!---->
		    <label class="rememberme" for="rememberme"><input type="checkbox" id="rememberme"> Remember me </label>
		    <p class="aa-lost-password">
		    	<router-link to="/password/reset">Lost your password?</router-link><!---->
		    </p>
		  </form>
		</div>
	</div>
</template>

<script>
	import {eventBus} from './../../main.js'

	export default {
		created(){
	        eventBus.$on('showLoginError', (e)=>{
	            this.error = e;
	        })

	        eventBus.$on('loginAfterRegister', (registerInfo)=>{
	        	this.login(registerInfo);
	        })
	    },

	    data() {
        	return {
            	auth:{
                	client_id: 2,
                	client_secret: 'ONo7VPjObuMmPxaBoWz9W8EHIzHl4fDsVdxEzpzg',
                	grant_type: 'password',
                	username: "destinee.williamson@example.org",
                	password: "secret",
                	scope: 'place-orders',
            	},
            	error: ""
        	}
    	},

    	methods:{
			login(registerInfo){
	            if(registerInfo !=null){
	                this.auth.username = registerInfo.email;
	                this.auth.password = registerInfo.password;        
	            }
	            this.$store.dispatch('asyncSetAuthUser', this.auth);
        	}
		}
	};
</script>
