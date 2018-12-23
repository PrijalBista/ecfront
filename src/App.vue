<template>

  <div id="app">
    <app-header/>
    <app-menu/>
    <router-view></router-view>
	<app-footer/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Carousel from './components/Carousel.vue'

import Menu from './components/Menu.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components:{
    appMenu: Menu,
    appHeader: Header,
	  appFooter: Footer
  },
};
</script>
