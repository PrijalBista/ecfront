<template>
	<div>
		<app-carousel/>
		<app-promo/>
		<app-products/>
		<app-banner/>
		<app-popular/>
		<app-support/>
		<app-testimonial/>
		<app-brand/>
		<app-subscribe/>
	</div>
</template>

<script>
import Carousel from '../components/home/Carousel.vue'
import Promo from '../components/home/Promo.vue'
import Products from '../components/home/Products.vue'
import Banner from '../components/home/Banner.vue'
import Popular from '../components/home/Popular.vue'
import Support from '../components/home/Support.vue'
import Testimonial from '../components/home/Testimonial.vue'
import Brand from '../components/home/Brand.vue'
import Subscribe from '../components/home/Subscribe.vue'

export default {
	components:{
		appCarousel: Carousel,
		appPromo: Promo,
		appProducts: Products,
		appBanner: Banner,
		appPopular: Popular,
		appSupport: Support,
		appTestimonial: Testimonial,
		appBrand: Brand,
		appSubscribe: Subscribe,
	}
};
</script>
