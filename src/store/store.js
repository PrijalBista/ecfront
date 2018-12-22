import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist'
import {eventBus} from './../main.js'

Vue.use(Vuex);

export const store = new Vuex.Store({
	state:{
		isAuth: false,
		authUser:{},
		cart:[],
		prodCount:0,
		wishlist:[],
		loading: false
	},

	plugins: [new VuexPersistence().plugin],

	getters:{
		getAuthUser: (state)=>{
			return state.authUser;
		},

		isAuth: (state)=>{
			return state.isAuth;
		},

		getCart:(state)=>{
			return state.cart;
		},

		getwishlist:(state)=>{
			return state.wishlist;
		},

		getprodCount:(state)=>{
			return state.prodCount;
		},

		isLoading: (state)=>{
			return state.loading;
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
		},

		addProductToCart(state,payload){
			let alreadyAdded=false;
			state.cart.forEach((el,i)=>{
				if(el.productId==payload.productId){
					alreadyAdded=true;//user has already added to cart so just increase its quantity
					if(payload.qty>1){ //homepage bata add to cart garda qty 1 aauxa 
						state.cart[i].qty=payload.qty;
					}
				}
			});
			if(!alreadyAdded){
				state.prodCount= state.cart.push(payload);				
			}
		},

		removeProductFromCart(state,payload){
			state.cart.splice(state.cart.indexOf(payload),1);
			state.prodCount--;
		},

		addProductToWishlist(state,payload){
			state.wishlist.push(payload);
		},

		setLoading(state){
			state.loading = true;
		},

		unsetLoading(state){
			state.loading = false;
		}
	},

	actions:{
		asyncSetAuthUser(context, payload){
			context.commit('setLoading');
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
						eventBus.showError(err.response.data);
					});

		        }, err=>{
		            eventBus.showError(err.response.data);
	        	}).then(()=>{
					context.commit('unsetLoading');
				});
		},

		asyncUnsetAuthUser(context){
			context.commit('setLoading');
			Vue.axios.get('api/logout', {
				headers:{
					'Authorization': 'Bearer ' + Vue.auth.getToken()
				}
			}).then(res=>{
				context.commit('unsetAuthUser');
			}, err=>{
				eventBus.showError(err.response.data);
			}).then(()=>{
				context.commit('unsetLoading');
			});
		},

		asyncRegisterUser(context, payload){
			context.commit('setLoading');
			Vue.axios.post("api/register", payload)
			.then(res=>{
				if(res.data.message == 'success'){
					eventBus.loginAfterRegister(payload);
				}
			}, err=>{
				eventBus.showError(err.response.data);
				context.commit('unsetLoading');
			})
		},

		addProductToCart(context,payload){
			context.commit('addProductToCart',payload);
		},

		removeProductFromCart(context,payload){
			context.commit('removeProductFromCart',payload);
		},

		addProductToWishlist(context,payload){
			context.commit('addProductToWishlist',payload);
		},

		asyncSendPasswordResetLink(context, payload){
			context.commit('setLoading');
			Vue.axios.post('api/password/email', payload)
			.then(res=>{
				eventBus.showMessage(res.data.status);
			},err=>{
				eventBus.showError(err.data.status);
			}).then(()=>{
				context.commit('unsetLoading');
			});
		},

		asyncResetPassword(context, payload){
			context.commit('setLoading');
			Vue.axios.post('api/password/reset', payload)
			.then(res=>{
				eventBus.showMessage(res.data.status);
			},err=>{
				eventBus.showError(err.data.status);
			}).then(()=>{
				context.commit('unsetLoading');
			});
		},
	}

});