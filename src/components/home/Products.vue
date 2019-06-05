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
                    <li v-for="cat in this.$store.getters.getCategory" :key="cat.id" :class="(cat.id==1)?'active':''"><a :href="'#'+  cat.category" data-toggle="tab">{{cat.category}}</a></li>
                   <!--  <li class="active"><a href="#men" data-toggle="tab">Men</a></li>
                    <li><a href="#women" data-toggle="tab">Women</a></li>
                    <li><a href="#sports" data-toggle="tab">Sports</a></li>
                    <li><a href="#electronics" data-toggle="tab">Electronics</a></li> -->
                  </ul>
                  <!-- Tab panes -->
                  <div class="tab-content">
                    <!-- loop through all  category -->
                    <!-- start  category -->
                    <div v-for="cat in computedProducts" :key="cat.category" class="tab-pane fade in" :id="cat.category" :class="{active: cat==computedProducts[0]}">
                       <ul class="aa-product-catg">
                        <!-- start single product item -->
                        <li v-for="product in cat.products" v-bind:key="product.id">
                          <app-product :item="product"/>
                        </li>
                        
                       </ul>
                      <a class="aa-browse-btn" href="#">Browse all Product <span class="fa fa-long-arrow-right"></span></a>
                    </div>
                    <!-- / end category -->
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
                products:[],
                pagination:{},
                item: {
                    imgSrc : "src/assets/img/man/polo-shirt-2.png",
                    title: "Polo T-Shirt Lorem",
                    price: "$45.50",
                    oldPrice: "$65.50",
                    badge: 'hot'   /*{sale, hot, soldout}*/
                }
            }
        },

        created(){
            this.fetchProducts();
        },

        components:{
            appProduct : Product,
        },  

        methods:{
            fetchProducts(page_url = '/api/products'){//fetching latest products
              let vm = this;
            //   fetch(page_url)
            //     .then(res=>res.json())
            //     .then(res=>{
            //       this.products.push({'category':'latest','products':res.data});
            //       vm.makePagination(res.meta,res.links);
            //     })
            //     .catch(err=>console.log(err));

                this.$store.getters.getCategory.forEach(function(cat,index){  //fetching products for each category
                    // console.log(cat.category + "url : "+ page_url+"?category="+cat.id);
                    vm.$axios.get(page_url+"?category="+cat.id)
                    .then(res=>res.data)
                    .then(res=>{
                      vm.products.push({'category':cat.category, 'products':res.data});
                      //pagination milaunu paryo vane res.meta ra res.links ma xa
                      //for debugging .. product object structure 
                      // [ { category:'', products:[{},{},{}] }, {category:'', products:[{},{}]}, ]
                      //console logging product
                      //if(index==3)console.log("\n PRODUCTS OBJECT: \n"+JSON.stringify(vm.products));
                    })
                    .catch(err=>console.log(err)); 
                });
            },
            makePagination(meta,links){
              let pagination = {
                current_page: meta.current_page,
                last_page: meta.last_page,
                next_page_url: links.next,
                prev_page_url: links.prev,
              }
              this.pagination = pagination;
            }
        },
        computed:{
          computedProducts(){
            return this.products;
          },          
        }
    };
</script>