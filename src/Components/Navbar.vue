<template>
	<nav class="navbar fixed-top navbar-expand-sm navbar-light bg-light  mb-2 ">
		<div class="container">
			<a href="#" class="navbar-brand">Ecommerce</a>
			<form class="form-inline">
			    <input @click="clearCart()"class="form-control mr-sm-2" type="search" placeholder="Search for product" aria-label="Search">
			    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
			</form>
			<button class="btn btn-outline-dark my-2 my-sm-0" type="submit" @click="logCart()">
				Cart 
				<span class="badge badge-info">{{prodCount>0?prodCount:''}}</span>
			</button>
		</div>
	</nav>
</template>
<script>
	export default{
		computed:{
			prodCount(){
				return this.$store.getters.getprodCount;
			}
		},
		methods:{
			logCart(){
				this.$router.push('/carts');
				console.log(JSON.stringify(this.$store.getters.getCart));
			},
			clearCart(){
				this.$store.state.prodCount=0;
				this.$store.state.cart=[];
			}
		}
	}
</script>