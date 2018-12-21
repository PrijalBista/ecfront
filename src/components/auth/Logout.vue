<template>
	<div>
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
