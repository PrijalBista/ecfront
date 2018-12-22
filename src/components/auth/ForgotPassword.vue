<template>
	<div v-if="!$store.getters.isAuth">
		<h2>ForgotPassword.vue</h2>
    	<p>Errors/Messages: {{error}} {{message}}</p>
    	<form>
			<input type="email" name="email" v-model="userEmail.email">
			<button type="submit" @click.prevent="sendPasswordResetLink">Send Password Reset Link</button>
		</form>
	</div>
</template>

<script>
	import {eventBus} from './../../main.js'

	export default{

		created(){
	        eventBus.$on('showError', (e)=>{
	            this.error = e;
	        });

	        eventBus.$on('showMessage', (m)=>{
	        	this.message = m;
	        });
	    },

		data(){
			return {
				userEmail:{
					email: 'kritish.dhaubanjar@gmail.com',
				},
				error: "",
				message: ""
			}
		},

		methods:{
			sendPasswordResetLink(){
				this.$store.dispatch('asyncSendPasswordResetLink', this.userEmail);
			}
		}
	};
</script>
