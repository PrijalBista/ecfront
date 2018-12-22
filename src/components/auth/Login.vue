<template>
	<div v-if="!$store.getters.isAuth">
		<h2>Login.vue</h2>
        <p>Errors: {{error}}</p>
        <form>
	        <input type="text" name="email" v-model="auth.username">
	        <input type="text" name="password" v-model="auth.password">
	        <button type="submit" @click.prevent="login(null)">Login</button>
	    </form>    
	</div>
</template>

<script>
	import {eventBus} from './../../main.js'

	export default{

		created(){
	        eventBus.$on('showError', (e)=>{
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
                	client_secret: '6qiLMwAqfBZUS4Mo82G7HqUe3fccSXuwUSOVL2RJ',
                	grant_type: 'password',
                	username: "kuhn.lesly@example.com",
                	password: "secret",
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
