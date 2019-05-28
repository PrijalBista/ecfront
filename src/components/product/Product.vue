<template>
	<div>
		<!-- start single product item -->
		<figure>
		<!-- <a class="aa-product-img" href="#"><img :src="item.imgSrc" alt="polo shirt img"></a> -->
		<router-link to="/product/102" class="aa-product-img">
			<!-- <img :src="item.imgSrc" alt="polo shirt img"> -->
			<img src="https://picsum.photos/300/300" alt="polo shirt img">
		</router-link>
		<a class="aa-add-card-btn" @click="addToCart(item,1)" ><span class="fa fa-shopping-cart"></span>Add To Cart</a>
		 <figcaption>
		  <h4 class="aa-product-title"><a href="#">{{item.title}}</a></h4>
		  <span class="aa-product-price">Nrs.{{item.price}}</span>
		  <span v-if="isDiscounted" class="aa-product-price"><del>{{item.oldPrice}}</del></span>
		</figcaption>
		</figure>      

		<div class="aa-product-hvr-content">
		<a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span class="fa fa-heart-o"></span></a>
		<a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span class="fa fa-exchange"></span></a>
		<a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span class="fa fa-search"></span></a>                            
		</div>
		<!-- product badge -->
		<span v-if="item.badge == 'sale'" class="aa-badge aa-sale" href="#">SALE!</span>
		<span v-if="item.badge == 'hot'" class="aa-badge aa-hot" href="#">HOT!</span>	
		<span v-if="item.badge == 'soldout'" class="aa-badge aa-sold-out" href="#">Sold Out!</span>
		<!-- start single product item -->
	</div>
</template>

<script>
	export default{
		props:['item'],

		computed:{
			isDiscounted(){
				return ! (this.item.oldPrice == "");
			}
		},

		methods:{
			addToCart(product,qty){
				//this.$store.state.cart=[]
				if(product.quantity=="Out of Stock") return;
				this.$store.dispatch('addProductToCart',{'productId':product.id,'qty':parseInt(qty),'maxQty':product.quantity,'price':product.price,'title':product.title});
				console.log(JSON.stringify(this.$store.getters.getCart));
			}
		},
	};
</script>
