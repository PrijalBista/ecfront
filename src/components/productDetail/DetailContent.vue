<template>
<div class="aa-product-details-content">
  <div class="row">
    <!-- Modal view slider -->
    <div class="col-md-5 col-sm-5 col-xs-12">                              
      <div class="aa-product-view-slider">                                
        <div id="demo-1" class="simpleLens-gallery-container">
          <div class="simpleLens-container">
            <div class="simpleLens-big-image-container"><a data-lens-image="src/assets/img/view-slider/large/polo-shirt-1.png" class="simpleLens-lens-image"><img src="src/assets/img/view-slider/medium/polo-shirt-1.png" class="simpleLens-big-image"></a></div>
          </div>
          <div class="simpleLens-thumbnails-container">
              <a data-big-image="src/assets/img/view-slider/medium/polo-shirt-1.png" data-lens-image="src/assets/img/view-slider/large/polo-shirt-1.png" class="simpleLens-thumbnail-wrapper" href="#">
                <img src="src/assets/img/view-slider/thumbnail/polo-shirt-1.png">
              </a>                                    
              <a data-big-image="src/assets/img/view-slider/medium/polo-shirt-3.png" data-lens-image="src/assets/img/view-slider/large/polo-shirt-3.png" class="simpleLens-thumbnail-wrapper" href="#">
                <img src="src/assets/img/view-slider/thumbnail/polo-shirt-3.png">
              </a>
              <a data-big-image="src/assets/img/view-slider/medium/polo-shirt-4.png" data-lens-image="src/assets/img/view-slider/large/polo-shirt-4.png" class="simpleLens-thumbnail-wrapper" href="#">
                <img src="src/assets/img/view-slider/thumbnail/polo-shirt-4.png">
              </a>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal view content -->
    <div class="col-md-7 col-sm-7 col-xs-12">
      <div class="aa-product-view-content">
        <h3>T-Shirt</h3>
        <div class="aa-price-block">
          <span class="aa-product-view-price">$34.99</span>
          <p class="aa-product-avilability">Avilability: <span>In stock</span></p>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis animi, veritatis quae repudiandae quod nulla porro quidem, itaque quis quaerat!</p>
        <h4>Size</h4>
        <div class="aa-prod-view-size">
          <a href="#">S</a>
          <a href="#">M</a>
          <a href="#">L</a>
          <a href="#">XL</a>
        </div>
        <h4>Color</h4>
        <div class="aa-color-tag">
          <a href="#" class="aa-color-green"></a>
          <a href="#" class="aa-color-yellow"></a>
          <a href="#" class="aa-color-pink"></a>                      
          <a href="#" class="aa-color-black"></a>
          <a href="#" class="aa-color-white"></a>                      
        </div>
        <div class="aa-prod-quantity">
          <form action="">
            <select id="" name="">
              <option selected="1" value="0">1</option>
              <option value="1">2</option>
              <option value="2">3</option>
              <option value="3">4</option>
              <option value="4">5</option>
              <option value="5">6</option>
            </select>
          </form>
          <p class="aa-prod-category">
            Category: <a href="#">Polo T-Shirt</a>
          </p>
        </div>
        <div class="aa-prod-view-bottom">
          <a class="aa-add-to-cart-btn" href="#">Add To Cart</a>
          <a class="aa-add-to-cart-btn" href="#">Wishlist</a>
          <a class="aa-add-to-cart-btn" href="#">Compare</a>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
