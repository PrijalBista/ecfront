<template>
<!-- Cart view section -->
 <section id="cart-view">
   <div class="container">
     <div class="row">
         <div class="cart-view-area">
           <div class="cart-view-table">
             <form action="">
               <div class="table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th></th>
                        <th></th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <!-- <cart-item v-for="item in this.$store.getters.getCart" v-bind:key="item.productId" :item="item"></cart-item> -->
                      <tr v-for="item in this.$store.getters.getCart" v-bind:key="item.productId">
                        <td><a @click="removeFromCart(item)" class="remove" ><fa class="fa fa-close"></fa></a></td>
                        <td><a href="#"><img src="src/assets/img/man/polo-shirt-1.png" alt="img"></a></td>
                        <td><a class="aa-cart-title" href="#">{{item.title}}</a></td>
                        <td>Nrs.{{item.price}}</td>
                        <td><input @change="addToCart(item,$event.target.value)" :value="item.qty" class="aa-cart-quantity" type="number" :max="item.maxQty" min="0"></td>
                        <td>{{item.qty*item.price}}</td>
                      </tr>
                      <tr>
                        <td colspan="6" class="aa-cart-view-bottom">
                          <div class="aa-cart-coupon">
                            <input class="aa-coupon-code" type="text" placeholder="Coupon">
                            <input class="aa-cart-view-btn" type="submit" value="Apply Coupon">
                          </div>
                          <input class="aa-cart-view-btn" type="submit" value="Update Cart">
                        </td>
                      </tr>
                      </tbody>
                  </table>
                </div>
             </form>
             <!-- Cart Total view -->
             <div class="cart-view-total">
               <h4>Cart Totals</h4>
               <table class="aa-totals-table">
                 <tbody>
                   <tr>
                     <th>Subtotal</th>
                     <td>Npr. {{this.$store.getters.getTotal}}</td>
                   </tr>
                   <tr>
                     <th>Total</th>
                     <td>Npr. {{this.$store.getters.getTotal}}</td>
                   </tr>
                 </tbody>
               </table>
               <router-link to="/checkout">
                  <a href="" class="aa-cart-view-btn">Proced to Checkout</a> 
               </router-link>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
   <br><br>
 </section>
 <!-- / Cart view section -->
</template>

<script>
  import CartItem from './CartItem.vue';
  export default{

    components:{
      cartItem : CartItem,
    },

    methods:{

      addToCart(product,qty){
        product.qty=parseInt(qty);
        this.$store.dispatch('addProductToCart',product);
        console.log(JSON.stringify(this.$store.getters.getCart));
      },

      removeFromCart(product){
        this.$store.dispatch('removeProductFromCart',product);
      },
    },
  }
</script>
