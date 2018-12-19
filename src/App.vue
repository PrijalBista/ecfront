<template>
  <div>

    {{$store.getters.isAuth}}

    <div v-if="!$store.getters.isAuth">
      <app-register :callback="login"/>
    </div>

    <br>

    <div v-if="!$store.getters.isAuth">
        <input type="text" name="email" v-model="auth.username">
        <input type="text" name="password" v-model="auth.password">
        <button @click="login(null)">Login</button>
    </div>
    <div v-if="$store.getters.isAuth">
      {{$store.getters.getAuthUser}}
      <button @click="logout">Logout</button>
    </div>  

  </div>
</template>

<script>
import Register from './Register.vue';

export default {

  data() {
    return {
        auth:{
            client_id: 2,
            client_secret: '6qiLMwAqfBZUS4Mo82G7HqUe3fccSXuwUSOVL2RJ',
            grant_type: 'password',
            username: "kuhn.lesly@example.com",
            password: "secret",
        }
    }
  },

  methods:{
    login(registerInfo){
        if(registerInfo !=null){
            this.auth.username = registerInfo.email;
            this.auth.password = registerInfo.password;        
        }
        this.$store.dispatch('asyncSetAuthUser', this.auth);
    },

    logout(){
        this.$store.dispatch('asyncUnsetAuthUser');
    }
  },

  components:{
      appRegister: Register
  }
};
</script>

