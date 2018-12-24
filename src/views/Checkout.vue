<template>
	<div>
		<app-banner/>
		<app-checkout/>
	</div>
</template>

<script>
	import Banner from './../components/checkout/Banner.vue'
	import Checkout from './../components/checkout/Checkout.vue'

	export default{
		components:{
			appBanner: Banner,
			appCheckout: Checkout
		}
	};
</script>
