<template>

  <div id="app">
    <navbar></navbar>
    <carousel></carousel>
    <router-view></router-view>
    <!-- <div>

      {{$store.getters.isAuth}}

      <div v-if="!$store.getters.isAuth">
          <input type="text" name="email" v-model="auth.username">
          <input type="text" name="password" v-model="auth.password">
          <button @click="login">Login</button>
      </div>
          
      <div v-if="$store.getters.isAuth">
        {{$store.getters.getAuthUser}}
        <button @click="logout">Logout</button>
      </div>  
   -->
  </div>

</template>

<script>
  
import Navbar from './Components/Navbar.vue'
import Carousel from './Components/Carousel.vue'
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