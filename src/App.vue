<template>
    <div id="app">
      <!-- wpf loader Two -->
      <div id="wpf-loader-two" v-if="isLoading">          
        <div class="wpf-loader-two-inner">
          <span>Loading</span>
        </div>
      </div> 
      <!-- / wpf loader Two -->       

      <!-- SCROLL TOP BUTTON -->
      <a class="scrollToTop" href="#"><i class="fa fa-chevron-up"></i></a>
      <!-- END SCROLL TOP BUTTON -->

        <app-header/>
        <app-menu/>
        <router-view></router-view>
        <app-footer/>
        <app-quick-view/>
    </div>
</template>

<script>
import Menu from './components/Menu.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import QuickView from './components/QuickView.vue'

export default {
  name: 'app',
  computed:{
    isLoading(){
      return this.$store.getters.isLoading
    }
  },
  components:{
    appMenu: Menu,
    appHeader: Header,
	  appFooter: Footer,
    appQuickView: QuickView
  },
};
</script>
