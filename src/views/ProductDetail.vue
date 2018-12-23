<template>
	<div>
		<app-banner/>
		<!-- product category -->
		<section id="aa-product-details">
			<div class="container">
			  	<div class="row">
			    	<div class="col-md-12">
				      	<div class="aa-product-details-area">
				      		<app-detail-content/>
				      		<app-detail-bottom/>
				      		<app-related/>
				      	</div>
	        		</div>
	      		</div>
    		</div>
  		</section>
  	</div>	
</template>

<script>
	import Banner from '../components/productDetail/Banner.vue'
	import DetailContent from '../components/productDetail/DetailContent.vue'
	import DetailBottom from '../components/productDetail/DetailBottom.vue'
	import Related from '../components/productDetail/Related.vue'

	export default{
		components: {
			appBanner: Banner,
			appDetailContent: DetailContent,
			appDetailBottom: DetailBottom,
			appRelated: Related,
		}
	};
</script>
