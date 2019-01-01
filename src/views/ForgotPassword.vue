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
						<div v-if="error!=''" class="alert alert-danger" role="alert"> <!---->
				  			{{error}}
						</div>
						<div v-if="message!=''" class="alert alert-info" role="alert"> <!---->
				  			{{message}}
						</div>
						 <form action="" class="aa-login-form">
						  <label for="">Email address<span>*</span></label>
						   <input type="text" placeholder="Email" v-model="userEmail.email"> <!---->
						    <button type="submit" class="aa-browse-btn" @click.prevent="sendPasswordResetLink">Send Password Reset Link</button> <!---->
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
