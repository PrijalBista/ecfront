<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
 import Navbar from './Components/Navbar.vue'
export default {
  name: 'app',
  components:{'navbar':Navbar},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>