<template>
	<tr>
	  <td><a class="remove" href="#"><fa class="fa fa-close"></fa></a></td>
	  <td><a href="#"><img src="src/assets/img/man/polo-shirt-1.png" alt="img"></a></td>
	  <td><a class="aa-cart-title" href="#">{{item.title}}</a></td>
	  <td>Nrs.{{item.price}}</td>
	  <td><input v-model="qty" class="aa-cart-quantity" type="number" :max="item.maxQty" min="0"></td>
	  <td>{{subtotal}}</td>
	</tr>
</template>
<script>
	
	export default{
		props:['item'],
		data(){
			return{
				qty:this.item.qty,
				
			}
		},
		computed:{
			subtotal(){
				return this.qty*this.item.price;
			},
		}
	}
</script>