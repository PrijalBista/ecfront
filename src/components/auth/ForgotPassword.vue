<template>
	<div>
		<h4>Error/Message Appears Here</h4>
    	<p>{{error}} {{message}}</p>
		<input type="email" name="email" v-model="userEmail.email">
		<button @click="sendPasswordResetLink">Send Password Reset Link</button>
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
