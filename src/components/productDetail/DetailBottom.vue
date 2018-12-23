<template>
	<div class="aa-product-details-bottom">
      <ul class="nav nav-tabs" id="myTab2">
        <li><a href="#description" data-toggle="tab">Description</a></li>
        <li><a href="#review" data-toggle="tab">Reviews</a></li>                
      </ul>

      <!-- Tab panes -->
      <div class="tab-content">
        <div class="tab-pane fade in active" id="description">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <ul>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, culpa!</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor qui eius esse!</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, modi!</li>
          </ul>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, iusto earum voluptates autem esse molestiae ipsam, atque quam amet similique ducimus aliquid voluptate perferendis, distinctio!</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis ea, voluptas! Aliquam facere quas cumque rerum dolore impedit, dicta ducimus repellat dignissimos, fugiat, minima quaerat necessitatibus? Optio adipisci ab, obcaecati, porro unde accusantium facilis repudiandae.</p>
        </div>
        <div class="tab-pane fade " id="review">
         <div class="aa-product-review-area">
           <h4>2 Reviews for T-Shirt</h4> 
           <ul class="aa-review-nav">
             <li>
                <div class="media">
                  <div class="media-left">
                    <a href="#">
                      <img class="media-object" src="img/testimonial-img-3.jpg" alt="girl image">
                    </a>
                  </div>
                  <div class="media-body">
                    <h4 class="media-heading"><strong>Marla Jobs</strong> - <span>March 26, 2016</span></h4>
                    <div class="aa-product-rating">
                      <span class="fa fa-star"></span>
                      <span class="fa fa-star"></span>
                      <span class="fa fa-star"></span>
                      <span class="fa fa-star"></span>
                      <span class="fa fa-star-o"></span>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="media">
                  <div class="media-left">
                    <a href="#">
                      <img class="media-object" src="img/testimonial-img-3.jpg" alt="girl image">
                    </a>
                  </div>
                  <div class="media-body">
                    <h4 class="media-heading"><strong>Marla Jobs</strong> - <span>March 26, 2016</span></h4>
                    <div class="aa-product-rating">
                      <span class="fa fa-star"></span>
                      <span class="fa fa-star"></span>
                      <span class="fa fa-star"></span>
                      <span class="fa fa-star"></span>
                      <span class="fa fa-star-o"></span>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  </div>
                </div>
              </li>
           </ul>
           <h4>Add a review</h4>
           <div class="aa-your-rating">
             <p>Your Rating</p>
             <a href="#"><span class="fa fa-star-o"></span></a>
             <a href="#"><span class="fa fa-star-o"></span></a>
             <a href="#"><span class="fa fa-star-o"></span></a>
             <a href="#"><span class="fa fa-star-o"></span></a>
             <a href="#"><span class="fa fa-star-o"></span></a>
           </div>
           <!-- review form -->
           <form action="" class="aa-review-form">
              <div class="form-group">
                <label for="message">Your Review</label>
                <textarea class="form-control" rows="3" id="message"></textarea>
              </div>
              <div class="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" id="name" placeholder="Name">
              </div>  
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" id="email" placeholder="example@gmail.com">
              </div>

              <button type="submit" class="btn btn-default aa-review-submit">Submit</button>
           </form>
         </div>
        </div>            
      </div>
    </div>
</template>
