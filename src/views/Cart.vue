<template>
	<div>
		<app-banner/>
		<app-cart/>
	</div>
</template>

<script>
	import Banner from '../components/cart/Banner.vue'
	import Cart from '../components/cart/Cart.vue'
	export default{
		components:{
			appBanner: Banner,
			appCart: Cart
		}
	};
</script>
