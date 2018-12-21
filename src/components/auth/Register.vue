<template>
	<div>
		<h4>Error Appears Here</h4>
    	<p>{{error}}</p>
		<input type="text" name="name" v-model="registerInfo.name" placeholder="Name">
		<input type="email" name="email" v-model="registerInfo.email" placeholder="example@domain.com">
		<input type="password" name="password" v-model="registerInfo.password" placeholder="Password">
		<input type="password" name="confirmPassword" v-model="registerInfo.password_confirmation" placeholder="Confirm Password">
		<button @click="register">Register</button>
	</div>
</template>

<script>
	import {eventBus} from './../../main.js'

	export default{
		
		created(){
	        eventBus.$on('showError', (e)=>{
	            this.error = e;
	        });
	    },

		data(){
			return {
				registerInfo: {
					name: "Lorem Ipsum",
					email: "lorem@ipsum.com",
					password: "loremipsum",
					password_confirmation: "loremipsum",
				},
				error: "",
			}
		},

		methods:{
			register(){
				this.$store.dispatch('asyncRegisterUser', this.registerInfo);
			}
		}
	};
</script>

