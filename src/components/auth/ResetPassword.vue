<template>
	<div v-if="!$store.getters.isAuth">
		<h2>ResetPassword.vue</h2>
        <p>Errors/Messages: {{error}} {{message}}</p>
        <p>Token: {{token}}</p>
        <form>
			<input type="email" v-model="reset.email">
			<input type="password" v-model="reset.password">
			<input type="password" v-model="reset.password_confirmation">
			<button type="submit" @click.prevent="resetPassword">Reset Password</button>
		</form>
	</div>
</template>

<script>
	import {eventBus} from './../../main.js'
	
	export default{

		created(){
	        eventBus.$on('showError', (e)=>{
	            this.error = e;
	        }),

	        eventBus.$on('showMessage', (m)=>{
	        	this.message = m;
	        });
	    },

	    props:{
	    	token : String
	    },

		data(){
			return{
				reset: {
					email: "kritish.dhaubanjar@gmail.com",
					password: "newnepal",
					password_confirmation: "newnepal",
					token: this.token
				},
				error: "",
				message: ""
			}
		},

		methods:{
			resetPassword(){
				this.$store.dispatch('asyncResetPassword', this.reset);
			}
		}
	};
</script>
