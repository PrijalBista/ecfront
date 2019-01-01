<template>
	<section id="aa-myaccount">
	   <div class="container">
	     <div class="row">
	       <div class="col-md-12">
	        <div class="aa-myaccount-area">         
	            <div class="row">
	            	<div class="col-md-12">
						<div class="aa-myaccount-login">
						<h4>Reset Password</h4>
						<div v-if="message!=''" class="alert alert-info" role="alert"> <!---->
				  			{{message}}
						</div>
						 <form action="" class="aa-login-form">
						  <label for="">Email address<span>*</span></label>
						   <input type="text" placeholder="Email" v-model="reset.email"> <!---->
						   <label for="">Password<span>*</span></label>
						   <input type="password" placeholder="Password" v-model="reset.password"> <!---->
						   <label for="">Confirm Password<span>*</span></label>
						   <input type="password" placeholder="Email" v-model="reset.password_confirmation"> <!---->
						    <button type="submit" class="aa-browse-btn" @click.prevent="resetPassword">Reset Password</button> <!---->
						  </form>
						</div>
					</div>
	            </div>          
	         </div>
	       </div>
	     </div>
	   </div>
	 </section>
</template>

<script>
	import {eventBus} from './../main.js'
	
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
