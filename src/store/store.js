import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex);

export const store = new Vuex.Store({
	state:{
		isAuth: false,
		authUser:{}
	},

	plugins: [new VuexPersistence().plugin],

	getters:{
		getAuthUser: (state)=>{
			return state.authUser;
		},

		isAuth: (state)=>{
			return state.isAuth;
		}
	},

	mutations:{
		setAuthUser(state, payload){
			state.authUser = payload;
			state.isAuth = true;
		},

		unsetAuthUser(state){
			Vue.auth.destroyToken();
			state.authUser = {};
			state.isAuth = false;
		}
	},

	actions:{
		asyncSetAuthUser(context, payload){
			Vue.axios.post('oauth/token', payload).
		        then(res=>{
		            Vue.auth.setToken(res.data.access_token, res.data.expires_in);

		            Vue.axios.get('api/user', {
						headers:{
							'Authorization': 'Bearer ' + Vue.auth.getToken()
						}
					}).then(res=>{
						context.commit('setAuthUser', res.data);
					}, err=>{
						console.log(err);
					});

		        }, err=>{
		            console.log(err);
	        	});
		},

		asyncUnsetAuthUser(context){
			Vue.axios.get('api/logout', {
				headers:{
					'Authorization': 'Bearer ' + Vue.auth.getToken()
				}
			}).then(res=>{
				context.commit('unsetAuthUser');
			}, err=>{
				console.log(err);
			})
		}
	}

});
