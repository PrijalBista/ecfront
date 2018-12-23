<template>
  <!-- Products section -->
  <section id="aa-product">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="row">
            <div class="aa-product-area">
              <div class="aa-product-inner">
                <!-- start prduct navigation -->
                 <ul class="nav nav-tabs aa-products-tab">
                    <li class="active"><a href="#men" data-toggle="tab">Men</a></li>
                    <li><a href="#women" data-toggle="tab">Women</a></li>
                    <li><a href="#sports" data-toggle="tab">Sports</a></li>
                    <li><a href="#electronics" data-toggle="tab">Electronics</a></li>
                  </ul>
                  <!-- Tab panes -->
                  <div class="tab-content">
                    <!-- Start men product category -->
                    <div class="tab-pane fade in active" id="men">
                      <ul class="aa-product-catg">
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
                      <a class="aa-browse-btn" href="#">Browse all Product <span class="fa fa-long-arrow-right"></span></a>
                    </div>
                    <!-- / men product category -->
                    <!-- start women product category -->
                    <div class="tab-pane fade" id="women">
                      <ul class="aa-product-catg">
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
                      <a class="aa-browse-btn" href="#">Browse all Product <span class="fa fa-long-arrow-right"></span></a>
                    </div>
                    <!-- / women product category -->
                    <!-- start sports product category -->
                    <div class="tab-pane fade" id="sports">
                      <ul class="aa-product-catg">
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
                    </div>
                    <!-- / sports product category -->
                    <!-- start electronic product category -->
                    <div class="tab-pane fade" id="electronics">
                       <ul class="aa-product-catg">
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
                      <a class="aa-browse-btn" href="#">Browse all Product <span class="fa fa-long-arrow-right"></span></a>
                    </div>
                    <!-- / electronic product category -->
                  </div>      
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- / Products section -->
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
            appProduct : Product,
        }
    };
</script>
