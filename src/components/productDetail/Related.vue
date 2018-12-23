<template>
	<div class="aa-product-related-item">
	  <h3>Related Products</h3>
	  <ul class="aa-product-catg aa-related-item-slider">
	    <!-- start single product item -->
	    <li><app-product :item="item"/></li>
	    <li><app-product :item="item"/></li>
	    <li><app-product :item="item"/></li>
	    <li><app-product :item="item"/></li>
	    <li><app-product :item="item"/></li>
	    <li><app-product :item="item"/></li> 
	    <li><app-product :item="item"/></li>
	    <li><app-product :item="item"/></li>                                                                         
	  </ul>

	  <!-- Quick View Model -->
	</div>  
</template>

<script>
	import Product from '../product/Product.vue'

	export default{
		data(){
            return {
                item: {
                    imgSrc : "src/assets/img/man/polo-shirt-2.png",
                    title: "Polo T-Shirt Lorem",
                    price: "$45.50",
                    oldPrice: "$65.50",
                    badge: 'hot'   /*{sale, hot, soldout}*/
                }
            }
        },
		components:{
			appProduct: Product,
		},

		mounted(){
  		/* ----------------------------------------------------------- */
  		/*  13. RELATED ITEM SLIDER (SLICK SLIDER)
  		/* ----------------------------------------------------------- */      

		    jQuery('.aa-related-item-slider').slick({
		      dots: false,
		      infinite: false,
		      speed: 300,
		      slidesToShow: 4,
		      slidesToScroll: 4,
		      responsive: [
		        {
		          breakpoint: 1024,
		          settings: {
		            slidesToShow: 3,
		            slidesToScroll: 3,
		            infinite: true,
		            dots: true
		          }
		        },
		        {
		          breakpoint: 600,
		          settings: {
		            slidesToShow: 2,
		            slidesToScroll: 2
		          }
		        },
		        {
		          breakpoint: 480,
		          settings: {
		            slidesToShow: 1,
		            slidesToScroll: 1
		          }
		        }
		      ]
		    }); 
		}
	};
</script>
