// Import the page's SCSS. Webpack will know what to do with it.
import '../scss/app.scss'

// Import libraries we need.
import { default as $ } from 'jquery'
import Vue from 'vue'

// Vue elements
import Toasted from 'vue-toasted'
import VueFilter from 'vue-filter'
import Nl2br from 'vue-nl2br'
import vSelect from 'vue-select'
import * as VueGoogleMaps from 'vue2-google-maps'
import { VueFlux, FluxPagination, Transitions } from 'vue-flux'
import Datepicker from 'vuejs-datepicker'
import store from './store.js'

// Moment for formatting date
import moment from 'moment'

import { Web3Util } from './utils/Web3Util'
import { PubSub } from './utils/PubSub'
import { MapsUtil } from './utils/MapsUtil'
import { googleApiKey } from './credentials'
import { IpfsUtil } from './utils/IpfsUtil'
import { Notifications } from './utils/Notifications'
import { Conversion } from './utils/Conversion'

// Classes
import { Cryptography } from './utils/Cryptography'

// Blockies for account icons
require('./blockies.min.js')

// Foundation for site style and layout
require('foundation-sites')

// jQuery UI tooltips
require('webpack-jquery-ui/css.js')
require('webpack-jquery-ui/tooltip.js')

// Add date filters
Vue.filter('formatDate', function (date) {
	if (date) {
		// Check if we have a unix day
		if (typeof date === 'number' && date < 99999 && date > 17000) {
			date = Conversion.unixDayToDate(date)
		}

		return moment(date).format('DD.MM.YYYY')
	}
})
Vue.filter('formatDateTime', function (date) {
	if (date) {
		// Check if we have a unix day
		if (typeof date === 'number' && date < 99999 && date > 17000) {
			date = Conversion.unixDayToDate(date)
		}

		return moment(date).format('DD.MM.YYYY hh:mm')
	}
})

// Add vue components and filters
Vue.use(Toasted)
Vue.use(VueFilter)
Vue.use(VueGoogleMaps, {
	load:              {
		key:       googleApiKey,
		libraries: 'places',
		language:  'en'
	},
	installComponents: true
})

let app = new Vue({
	el:         '#app',
	data:       () => ({
		/* Place your data elements your */
	}),
	watch:      {
		/* Place data element watchers here */
	},
	methods:    {
		/**
		 * Get style attributes for a blockie generated from an account address
		 *
		 * @param address
		 * @return {*}
		 */
		getBlockie: address => {
			if (address) {
				return {
					'background-image': 'url(\'' + window.blockies.create({
						seed: address
					}).toDataURL() + '\')'
				}
			}

			return {}
		},

		/**
		 * Get a reandom color to use as background color for an apartment
		 *
		 * @return {string}
		 */
		getRandomColor: () => {
			let oneBlack = Math.random() * 10

			let r = oneBlack <= 0.3333 ? 0 : Math.floor(Math.random() * 255)
			let g = (oneBlack <= 0.6666 && oneBlack > 0.3333) ? 0 : Math.floor(Math.random() * 255)
			let b = oneBlack > 0.6666 ? 0 : Math.floor(Math.random() * 255)

			return 'rgba(' + r + ', ' + g + ', ' + b + ', 0.15'
		},

		/**
		 * Initiate the application
		 */
		start: async () => {
			$(document).foundation()

			// Enable tooltips
			$(document).tooltip({
				selector:  '.tooltip[title]',
				container: 'body'
			})

			app.store.commit('setGoogleMapsGeocoder', new window.google.maps.Geocoder())

			app.accounts = await Web3Util.fetchAccounts()

			app.registerEvents()

			app.registerSubscriptions()
		},

		/**
		 * Register subscription listeners
		 */
		registerSubscriptions: () => {
			// Register topic processors like this
			PubSub.registerTopicProcessor('YOUR TOPIC', (message) => {
				console.log(message)
			})

			PubSub.start()
		},

		/**
		 * Register event listeners
		 */
		registerEvents: () => {
			// Place blockchain event listeners here
		},

		/**
		 * Get the image url for the specified hash
		 *
		 * @param address
		 * @returns {string}
		 */
		getImageUrl: (address) => {
			return IpfsUtil.getImageUrl(address)
		}
	},
	components: {
		'datepicker':      Datepicker,
		'vue-flux':        VueFlux,
		'flux-pagination': FluxPagination,
		'nl2br':           Nl2br,
		'v-select':        vSelect
	}
})

window.addEventListener('load', () => {
	app.start()
})
