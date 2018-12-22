<template>

  <div id="app">
    <navbar></navbar>
    <carousel></carousel>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Carousel from './components/Carousel.vue'
export default {
  name: 'app',
  components:{'navbar':Navbar,'carousel':Carousel},
  data() {
    return {
        auth:{
            client_id: 2,
            client_secret: 'lfSNsQpVDMcf5sugWkG6GaINVTZ3M7PsxiAQhhcY',
            grant_type: 'password',
            username: "judah05@example.net",
            password: "secret",
            scope: "place-orders"
        }
    }
  },

  methods:{
    login(){
        this.$store.dispatch('asyncSetAuthUser', this.auth);
    },

    logout(){
        this.$store.dispatch('asyncUnsetAuthUser');
    }
  }
}
</script>