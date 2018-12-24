<template>
	<div v-if="$store.getters.isAuth">
		<h2>Logout.vue</h2>
    	{{$store.getters.getAuthUser}}
      	<button @click="logout">Logout</button>
	</div>
</template>

<script>
	export default{
		methods:{
			logout(){
            	this.$store.dispatch('asyncUnsetAuthUser');
        	}
		}
	};
</script>
