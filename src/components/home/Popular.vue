<template>
  <!-- popular section -->
  <section id="aa-popular-category">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="row">
            <div class="aa-popular-category-area">
              <!-- start prduct navigation -->
             <ul class="nav nav-tabs aa-products-tab">
                <li class="active"><a href="#popular" data-toggle="tab">Popular</a></li>
                <li><a href="#featured" data-toggle="tab">Featured</a></li>
                <li><a href="#latest" data-toggle="tab">Latest</a></li>                    
              </ul>
              <!-- Tab panes -->
              <div class="tab-content">
                <!-- Start popular category -->
                <div class="tab-pane fade in active" id="popular">
                    <ul class="aa-product-catg aa-popular-slider">
                        <!-- start single product item -->
                        <li><app-item :item="item"/></li>   
                        <li><app-item :item="item"/></li>
                        <li><app-item :item="item"/></li>
                        <li><app-item :item="item"/></li>
                        <li><app-item :item="item"/></li>
                        <li><app-item :item="item"/></li>
                        <li><app-item :item="item"/></li>
                        <li><app-item :item="item"/></li>
                    </ul>
                  <a class="aa-browse-btn" href="#">Browse all Product <span class="fa fa-long-arrow-right"></span></a>
                </div>
                <!-- / popular product category -->
                
                <!-- start featured product category -->
                <div class="tab-pane fade" id="featured">
                 <ul class="aa-product-catg aa-featured-slider">
                    <!-- start single product item -->
                    <li><app-item :item="item"/></li>
                    <li><app-item :item="item"/></li>
                    <li><app-item :item="item"/></li>
                    <li><app-item :item="item"/></li>
                    <li><app-item :item="item"/></li>
                    <li><app-item :item="item"/></li>
                    <li><app-item :item="item"/></li>
                    <li><app-item :item="item"/></li>                                                     
                  </ul>
                  <a class="aa-browse-btn" href="#">Browse all Product <span class="fa fa-long-arrow-right"></span></a>
                </div>
                <!-- / featured product category -->

                <!-- start latest product category -->
                <div class="tab-pane fade" id="latest">
                  <ul class="aa-product-catg aa-latest-slider">
                    <!-- start single product item -->
                    <li><app-item :item="item"/></li>
                    <li><app-item :item="item"/></li>
                    <li><app-item :item="item"/></li>
                    <li><app-item :item="item"/></li>
                    <li><app-item :item="item"/></li>
                    <li><app-item :item="item"/></li>
                    <li><app-item :item="item"/></li>
                    <li><app-item :item="item"/></li>                                                                
                  </ul>
                   <a class="aa-browse-btn" href="#">Browse all Product <span class="fa fa-long-arrow-right"></span></a>
                </div>
                <!-- / latest product category -->              
              </div>
            </div>
          </div> 
        </div>
      </div>
    </div>
  </section>
  <!-- / popular section -->	
</template>

<script>
    import Item from './item/Item.vue'
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
            appItem : Item,
        }
    };
</script>

