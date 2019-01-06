import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state:     {
		googleMapsGeocoder: null,

		/* Place your store data elements here */
	},
	mutations: {
		/* Place your mutations here */
	},
	getters:   {
		googleMapsGeocoder: state => {
			return state.googleMapsGeocoder
		}

		/* Place your getters here */
	}
})
