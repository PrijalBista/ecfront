<template>
<!-- menu -->
  <section id="menu">
    <div class="container">
      <div class="menu-area">
        <!-- Navbar -->
        <div class="navbar navbar-default" role="navigation">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>          
          </div>
          <div class="navbar-collapse collapse">
            <!-- Left nav -->
            <ul class="nav navbar-nav">
              <li><a href="index.html">Home</a></li>
              <!-- show all categories and subcategories -->
              <li v-for="cat in this.$store.getters.getCategory" :key="cat.id"><a href="#">{{cat.category}}<span class="caret"></span></a>
                <ul class="dropdown-menu">                
                  <li v-for="sub in cat.subcategory" :key="sub.id"><a href="#">{{sub.sub_category}}</a></li>
                  <li><a href="#">And more.. <span class="caret"></span></a>
                    <ul class="dropdown-menu">
                      <li><a href="#">...</a></li>                                      
                    </ul>
                  </li>
                </ul>
              </li>
              <!-- end of categories -->
              <li><a href="blog-archive.html">Blog <span class="caret"></span></a>
                <ul class="dropdown-menu">                
                  <li><a href="blog-archive.html">Blog Style 1</a></li>
                  <li><a href="blog-archive-2.html">Blog Style 2</a></li>
                  <li><a href="blog-single.html">Blog Single</a></li>                
                </ul>
              </li>
              <li><a href="contact.html">Contact</a></li>
              <li><a href="#">Pages <span class="caret"></span></a>
                <ul class="dropdown-menu">                
                  <li><a href="product.html">Shop Page</a></li>
                  <li><a href="product-detail.html">Shop Single</a></li>                
                  <li><a href="404.html">404 Page</a></li>                
                </ul>
              </li>
            </ul>
          </div><!--/.nav-collapse -->
        </div>
      </div>       
    </div>
  </section>
  <!-- / menu -->
</template>

<script>
  export default{
    created(){
      this.$store.dispatch('fetchCategory');
    }
  }
</script>