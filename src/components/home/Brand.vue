<template>
  <!-- Client Brand -->
  <section id="aa-client-brand">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="aa-client-brand-area">
            <ul class="aa-client-brand-slider">
              <li><a href="#"><img src="src/assets/img/client-brand-java.png" alt="java img"></a></li>
              <li><a href="#"><img src="src/assets/img/client-brand-jquery.png" alt="jquery img"></a></li>
              <li><a href="#"><img src="src/assets/img/client-brand-html5.png" alt="html5 img"></a></li>
              <li><a href="#"><img src="src/assets/img/client-brand-css3.png" alt="css3 img"></a></li>
              <li><a href="#"><img src="src/assets/img/client-brand-wordpress.png" alt="wordPress img"></a></li>
              <li><a href="#"><img src="src/assets/img/client-brand-joomla.png" alt="joomla img"></a></li>
              <li><a href="#"><img src="src/assets/img/client-brand-java.png" alt="java img"></a></li>
              <li><a href="#"><img src="src/assets/img/client-brand-jquery.png" alt="jquery img"></a></li>
              <li><a href="#"><img src="src/assets/img/client-brand-html5.png" alt="html5 img"></a></li>
              <li><a href="#"><img src="src/assets/img/client-brand-css3.png" alt="css3 img"></a></li>
              <li><a href="#"><img src="src/assets/img/client-brand-wordpress.png" alt="wordPress img"></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- / Client Brand -->
</template>  

<script>
  export default{
    mounted(){
      jQuery('.aa-client-brand-slider').slick({
        dots: false,
        infinite: false,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    });
    }
  };
</script>
