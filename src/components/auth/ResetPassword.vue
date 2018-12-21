<template>
	<div>
		<h4>Error Appears Here</h4>
        <p>{{error}} {{message}}</p>
		<input type="email" v-model="reset.email">
		<input type="password" v-model="reset.password">
		<input type="password" v-model="reset.password_confirmation">
		<button @click="resetPassword">Reset Password</button>
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

		data(){
			return{
				reset: {
					email: "kritish.dhaubanjar@gmail.com",
					password: "newnepal",
					password_confirmation: "newnepal",
					token: "545038f41caa77345b968650623c9af6b3c44205552c4da6e20f3dbe73a57515",
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
