import axios from 'axios'

export default function(Vue){
    Vue.axios = axios.create({
        baseURL: `http://127.0.0.1:8000/`,
        withCredentials: false,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });


	Object.defineProperties(Vue.prototype,{
		$axios: {
			get(){
				return Vue.axios;
			}
		}
	});
}
