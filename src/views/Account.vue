<template>
	<div>
		<app-banner/>
		 <!-- Cart view section -->
		 <section id="aa-myaccount">
		   <div class="container">
		     <div class="row">
		       <div class="col-md-12">
		        <div class="aa-myaccount-area">         
		            <div class="row">
		              <app-login/>
		              <app-register/>
		            </div>          
		         </div>
		       </div>
		     </div>
		   </div>
		 </section>
		 <!-- / Cart view section -->		
	</div>
</template>

<script>
	import Banner from '../components/account/Banner.vue'
	import Login from '../components/account/Login.vue'
	import Register from '../components/account/Register.vue'

	export default{
		components:{
			appBanner: Banner,
			appLogin: Login,
			appRegister: Register
		}
	};
</script>
