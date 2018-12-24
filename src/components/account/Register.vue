<template>
	<div class="col-md-6">
	    <div class="aa-myaccount-register">                 
	     <h4>Register</h4>
	     	<div v-if="errors!=''"> <!---->
	     		<div class="alert alert-danger" role="alert" v-for="error in errors.errors.email">
	     			{{error}}
	     		</div>
	     		<div class="alert alert-danger" role="alert" v-for="error in errors.errors.password">
	     			{{error}}
	     		</div>
			</div>
	     <form action="" class="aa-login-form">
	        <label for="">Username<span>*</span></label>
	        <input type="text" placeholder="Username" v-model="registerInfo.name"> <!---->
	        <label for="">Email<span>*</span></label>
	        <input type="text" placeholder="Email" v-model="registerInfo.email"> <!---->
	        <label for="">Password<span>*</span></label> 
	        <input type="password" placeholder="Password" v-model="registerInfo.password"> <!---->
	        <label for="">Confirm Password<span>*</span></label> 
	        <input type="password" placeholder="Password" v-model="registerInfo.password_confirmation"> <!---->
	        <button type="submit" class="aa-browse-btn" @click.prevent="register">Register</button>	<!---->   
	      </form>
	    </div>
	  </div>
</template>

<script>
	import {eventBus} from './../../main.js'

	export default{
		
		created(){
	        eventBus.$on('showError', (e)=>{
	            this.errors = e;
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
				errors: "",
			}
		},

		methods:{
			register(){
				this.$store.dispatch('asyncRegisterUser', this.registerInfo);
			}
		}
	};
</script>
