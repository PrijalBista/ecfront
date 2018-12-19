export default function(Vue){

	Vue.auth = {

		setToken(access_token, expires_in){
			localStorage.setItem('access_token', access_token);
			localStorage.setItem('expires_in', expires_in + Date.now());
		},

		getToken(){
			let access_token = localStorage.getItem('access_token');
			let expires_in = localStorage.getItem('expires_in');

			if(!access_token || !expires_in)
				return null;
			if(parseInt(expires_in)<Date.now()){
				this.destroyToken();
				return null;
			}
			return access_token;
		},

		isAuth(){
			if(this.getToken())
				return true;
			return false;
		},

		destroyToken(){
			localStorage.removeItem('access_token');
			localStorage.removeItem('expires_in');
		}
	}

	Object.defineProperties(Vue.prototype,{
		$auth : {
			get(){
				return Vue.auth;
			}
		}
	});

}
