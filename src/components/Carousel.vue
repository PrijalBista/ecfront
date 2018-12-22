<template>
	<div id="carouselExampleIndicators" class="carousel slide container-fluid" data-ride="carousel">
	  <ol class="carousel-indicators">
	    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
	    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
	    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
	  </ol>
	  <div class="carousel-inner">
	    <div class="carousel-item active">
	      <a href="/product/1">
	      	<img class="d-block w-100" src="https://picsum.photos/970/250/?image=1" alt="First slide">
	      	<div class="carousel-caption d-none d-md-block">
	      	    <h3>Amazing Offer</h3>
	      	    <p>Some info about product</p>
	      	</div>
	      </a>
	    </div>
	    <div class="carousel-item">
	    	<a href="">
	      		<img class="d-block w-100" src="https://picsum.photos/970/250/?image=2" alt="Second slide">	
	    	</a>
	    </div>
	    <div class="carousel-item">
	      <img class="d-block w-100" src="https://picsum.photos/970/250?image=3" alt="Third slide">
	      <div class="carousel-caption d-none d-md-block">
	          <h5>New Deal</h5>
	          <p>Some info about product</p>
	      </div>
	    </div>
	  </div>
	  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
	    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
	    <span class="sr-only">Previous</span>
	  </a>
	  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
	    <span class="carousel-control-next-icon" aria-hidden="true"></span>
	    <span class="sr-only">Next</span>
	  </a>
	</div>

</template>

<style>
	.carousel img{
	/*	width:auto;
		height: auto;
		max-width: 80%;
		margin:auto;*/
		max-height:550px;
	}
</style>