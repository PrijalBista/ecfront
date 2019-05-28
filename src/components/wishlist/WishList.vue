<template>
	 <!-- Cart view section -->
 <section id="cart-view">
   <div class="container">
     <div class="row">
       <div class="col-md-12">
         <div class="cart-view-area">
           <div class="cart-view-table aa-wishlist-table">
             <form action="">
               <div class="table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th></th>
                        <th></th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Stock Status</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <app-row/>
                      <app-row/>
                      <app-row/>                  
                    </tbody>
                  </table>
                </div>
             </form>             
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
  import TableRow from './TableRow.vue'

  export default{
    components:{
      appRow: TableRow
    }
  };
</script>
