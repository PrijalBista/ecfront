<template>
	<div>
		<app-banner/>
		<app-wishlist/>
	</div>
</template>

<script>

	import Banner from '../components/wishlist/Banner.vue'
	import WishList from '../components/wishlist/WishList.vue'

	export default{
		components:{
			appBanner: Banner,
			appWishlist: WishList
		}
	};
</script>
