import axios from 'axios'

export default function(Vue){

    let baseurl =`http://127.0.0.1:8000/`;
    
    Vue.axios = axios.create({
        baseURL: baseurl,
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
