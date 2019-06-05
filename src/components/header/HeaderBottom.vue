<template>
    <!-- start header bottom  -->
    <div class="aa-header-bottom">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="aa-header-bottom-area">
              <!-- logo  -->
              <div class="aa-logo">
                <!-- Text based logo -->
                <a href="index.html">
                  <span class="fa fa-shopping-cart"></span>
                  <p>daily<strong>Shop</strong> <span>Your Shopping Partner</span></p>
                </a>
                <!-- img based logo -->
                <!-- <a href="index.html"><img src="img/logo.jpg" alt="logo img"></a> -->
              </div>
              <!-- / logo  -->
               <!-- cart box -->
              <div class="aa-cartbox">
                <a class="aa-cart-link" href="#">
                  <span class="fa fa-shopping-basket"></span>
                  <span class="aa-cart-title">SHOPPING CART</span>
                  <span class="aa-cart-notify" v-if="this.$store.getters.getprodCount>0">{{ cartSize }}</span>
                </a>
                <div class="aa-cartbox-summary">
                  <ul>
                    <li v-for="item in this.$store.getters.getCart" v-bind:key="item.productId">
                      <a class="aa-cartbox-img" href="#"><img src="img/woman-small-2.jpg" alt="img"></a>
                      <div class="aa-cartbox-info">
                        <h4><a href="#">{{item.title}}</a></h4>
                        <p>{{item.qty}}x {{item.price}}</p>
                      </div>
                      <a class="aa-remove-product" @click="removeFromCart(item)"><span class="fa fa-times"></span></a>
                    </li>                    
                    <li>
                      <span class="aa-cartbox-total-title">
                        Total
                      </span>
                      <span class="aa-cartbox-total-price">
                        {{this.$store.getters.getTotal}}
                      </span>
                    </li>
                  </ul>
                  <router-link to="/cart" v-if="$store.getters.getCart.length > 0">
                  <a class="aa-cartbox-checkout aa-primary-btn" href="">Checkout</a>
                  </router-link>
                </div>
              </div>
              <!-- / cart box -->
              <!-- search box -->
              <div class="aa-search-box">
                <form action="">
                  <input type="text" name="" id="searchtext" placeholder="Search here ex. 'man' ">
                  <button type="submit"><span class="fa fa-search"></span></button>
                </form>
              </div>
              <!-- / search box -->             
            </div>
          </div>
        </div>
      </div>
    </div>	
</template>

<script>
  export default{

    computed:{
      cartSize(){
        return this.$store.getters.getCart.length;
      }
    },

    methods:{
      removeFromCart(product){
        this.$store.dispatch('removeProductFromCart',product);
      },
    }
  }
</script>
