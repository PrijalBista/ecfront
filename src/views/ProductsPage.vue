<template>
	<div>
		<nav aria-label="Product navigation ">
		  <ul class="pagination justify-content-center">
		    <li v-bind:class="[{disabled: !pagination.prev_page_url}]" class="page-item"><a class="page-link" href="#" @click="fetchProducts(pagination.prev_page_url)">Previous</a></li>
		    <li class="page-item disabled"><a class="page-link text-dark" href="#">Page {{pagination.current_page}} of {{pagination.last_page}}</a></li>
		    <li v-bind:class="[{disabled: !pagination.next_page_url}]" class="page-item"><a class="page-link" href="#" @click="fetchProducts(pagination.next_page_url)">Next</a></li>
		  </ul>
		  <hr>
		</nav>
		<div class="container-fluid">
		    <div class="row">
		        <product-card v-for="product in products" v-bind:key="product.id" :product="product"></product-card>  
		    </div>
		</div>
		<hr>
	</div>
</template>

<script>
	import Product from '../components/Product.vue';
	export default{
		components:{'product-card':Product},
		data(){
			return {
				products:[],
				product:{
					id:'',
					name:'',
					qty:'',
					prict:'',
				},
				product_id:'',
				pagination:{},
				edit:false
			}
		},
		created(){
			this.fetchProducts('http://localhost:8000/api/products');
		},
		methods :{
			fetchProducts(page_url){
				let vm = this;
				page_url = page_url || '/api/products'
				fetch(page_url)
					.then(res=>res.json())
					.then(res=>{
						this.products=res.data;
						vm.makePagination(res.meta,res.links);
					})
					.catch(err=>console.log(err));
			},
			makePagination(meta,links){
				let pagination = {
					current_page: meta.current_page,
					last_page: meta.last_page,
					next_page_url: links.next,
					prev_page_url: links.prev,
				}
				this.pagination = pagination;
			}
		}
	}
</script>