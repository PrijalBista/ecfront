import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex);

export const store = new Vuex.Store({
	state:{
		isAuth: false,
		authUser:{},
		cart:[],
		prodCount:0,
		wishlist:[{}]
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
			Vue.axios.get('/api/logout', {
				headers:{
					'Authorization': 'Bearer ' + Vue.auth.getToken()
				}
			}).then(res=>{
				context.commit('unsetAuthUser');
			}, err=>{
				console.log(err);
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
	}

});
