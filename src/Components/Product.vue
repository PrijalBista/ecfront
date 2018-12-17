<template>
	<div class="col-md-3 col-sm-6 mb-4">
	    <div class="product-grid3">
	        <div class="product-image3">
	           	<router-link :to="{path:'/product/'+product.id}" >
	                <img class="pic-1" :src="'https://picsum.photos/255/326?image='+product.id">
	                <img class="pic-2" :src="'https://picsum.photos/255/326?image='+product.id">
	           	</router-link>
	            <ul class="social">
	                <li><a ><i class="fa fa-shopping-bag"></i></a></li>
	                <li><a  @click="addToCart(product.id,1)"><i class="fa fa-shopping-cart"></i></a></li>
	            </ul>
	            <!-- <span class="product-new-label">New</span> -->
	        </div>
	        <div class="product-content">
	            <h3 class="title"><a href="#">{{ product.name }}</a></h3>
	            <div class="price">
	                RS.{{product.discounted_price?product.discounted_price:product.price}}
	                <span v-if="product.discounted_price">NRS.{{ product.price}}</span>
	            </div>
	            <ul class="rating">
	                <li v-for="(n,i) in Math.floor(product.rating)|0" class="fa fa-star"></li>
	                <li v-if="Math.floor(product.rating)<product.rating" class="fa fa-star-half-o"></li>
	            </ul>
	        </div>
	    </div>
	</div>
</template>
<script>
	export default{
		props:['product'],
		methods:{
			addToCart(productId,qty){
				this.$store.dispatch('addProductToCart',{'productId':productId,'qty':qty});
			}
		}
	}
</script>

<style scoped>
.product-grid3{font-family:Roboto,sans-serif;text-align:center;position:relative;z-index:1}
.product-grid3:before{content:"";height:81%;width:100%;background:#fff;border:1px solid rgba(0,0,0,.1);opacity:0;position:absolute;top:0;left:0;z-index:-1;transition:all .5s ease 0s}
.product-grid3:hover:before{opacity:1;height:100%}
.product-grid3 .product-image3{position:relative}
.product-grid3 .product-image3 a{display:block}
.product-grid3 .product-image3 img{width:100%;height:auto}
.product-grid3 .pic-1{opacity:1;transition:all .5s ease-out 0s}
.product-grid3:hover .pic-1{opacity:0}
.product-grid3 .pic-2{position:absolute;top:0;left:0;opacity:0;transition:all .5s ease-out 0s}
.product-grid3:hover .pic-2{opacity:1}
.product-grid3 .social{width:120px;padding:0;margin:0 auto;list-style:none;opacity:0;position:absolute;right:0;left:0;bottom:-23px;transform:scale(0);transition:all .3s ease 0s}
.product-grid3:hover .social{opacity:1;transform:scale(1)}
.product-grid3:hover .product-discount-label,.product-grid3:hover .product-new-label,.product-grid3:hover .title{opacity:0}
.product-grid3 .social li{display:inline-block}
.product-grid3 .social li a{color:#e67e22;background:#fff;font-size:18px;line-height:50px;width:50px;height:50px;border:1px solid rgba(0,0,0,.1);border-radius:50%;margin:0 2px;display:block;transition:all .3s ease 0s}
.product-grid3 .social li a:hover{background:#e67e22;color:#fff}
.product-grid3 .product-discount-label,.product-grid3 .product-new-label{background-color:#e67e22;color:#fff;font-size:17px;padding:2px 10px;position:absolute;right:10px;top:10px;transition:all .3s}
.product-grid3 .product-content{z-index:-1;padding:15px;text-align:left}
.product-grid3 .title{font-size:14px;text-transform:capitalize;margin:0 0 7px;transition:all .3s ease 0s}
.product-grid3 .title a{color:#414141}
.product-grid3 .price{color:#000;font-size:16px;letter-spacing:1px;font-weight:600;margin-right:2px;display:inline-block}
.product-grid3 .price span{color:#909090;font-size:14px;font-weight:500;letter-spacing:0;text-decoration:line-through;text-align:left;display:inline-block;margin-top:-2px}
.product-grid3 .rating{padding:0;margin:-22px 0 0;list-style:none;text-align:right;display:block}
.product-grid3 .rating li{color:#ffd200;font-size:13px;display:inline-block}
.product-grid3 .rating li.disable{color:#dcdcdc}
@media only screen and (max-width:1200px){.product-grid3 .rating{margin:0}
}
@media only screen and (max-width:990px){.product-grid3{margin-bottom:30px}
.product-grid3 .rating{margin:-22px 0 0}
}
@media only screen and (max-width:359px){.product-grid3 .rating{margin:0}
}
</style>