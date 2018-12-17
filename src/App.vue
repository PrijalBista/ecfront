<template>
  <div id="app">
    <navbar></navbar>
    <carousel></carousel>
    <router-view></router-view>
  </div>
</template>

<script>
 import Navbar from './Components/Navbar.vue'
 import Carousel from './Components/Carousel.vue'
export default {
  name: 'app',
  components:{'navbar':Navbar,'carousel':Carousel},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>