<template>

  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Carousel from './components/Carousel.vue'
export default {
  name: 'app',
  components:{'navbar':Navbar,'carousel':Carousel},
}
</script>