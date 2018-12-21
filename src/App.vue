<template>
  <div>

    <h4>isAuth : {{$store.getters.isAuth}}</h4>

    <h4>isLoading : {{isLoading}}</h4>

    <div v-if="!$store.getters.isAuth">
      <app-register/>
      <br>
      <app-forgot-password/>
      <br>
      <app-reset-password/>
    </div>

    <div v-if="!$store.getters.isAuth">
        <app-login/>
    </div>

    <div v-if="$store.getters.isAuth">
        <app-logout/>
    </div>  

  </div>
</template>

<script>
import Register from './components/auth/Register.vue';
import ForgotPassword from './components/auth/ForgotPassword.vue';
import ResetPassword from './components/auth/ResetPassword.vue'
import Login from './components/auth/Login.vue';
import Logout from './components/auth/Logout.vue';

import {eventBus} from './main.js'

export default {

    created(){
        eventBus.$on('showError', (e)=>{
            this.error = e;
        })
    },

    computed: {
        isLoading(){
            return this.$store.getters.isLoading;
        }
    },

    components:{
        appRegister: Register,
        appForgotPassword: ForgotPassword,
        appLogin : Login,
        appLogout : Logout,
        appResetPassword: ResetPassword
    }
};
</script>

