<template>
	<div>
		<input type="text" name="name" v-model="registerInfo.name" placeholder="Name">
		<input type="email" name="email" v-model="registerInfo.email" placeholder="example@domain.com">
		<input type="password" name="password" v-model="registerInfo.password" placeholder="Password">
		<input type="password" name="confirmPassword" v-model="registerInfo.password_confirmation" placeholder="Confirm Password">
		<button @click="register">Register</button>
	</div>
</template>

<script>
	export default{

		props:{
			callback: Function
		},

		data(){
			return {
				registerInfo: {
					name: "Lorem Ipsum",
					email: "lorem@ipsum.com",
					password: "loremipsum",
					password_confirmation: "loremipsum"
				}
			}
		},

		methods:{
			register(){
				this.$axios.post("api/register", this.registerInfo)
					.then(res=>{
						if(res.data.message == 'success'){
							this.callback(this.registerInfo);
						}
					}, err=>{
						console.log(err);
					})
			}
		}
	};
</script>

