import { accountTestMode, networkId, useInjectedWeb3, websocketAddress } from '../constants'
import { default as Web3 } from 'web3'
import { Notifications } from './Notifications'
import contractArtifacts from '../../../build/contracts/YourContract'

class Web3UtilClass {
	constructor () {
		// Check if we can use an injected web3
		if (typeof window.web3 !== 'undefined' && useInjectedWeb3) {
			// Use Mist/MetaMask's provider
			this.web3 = new Web3(window.web3.currentProvider)
		} else {
			console.warn(
				'No web3 detected. Falling back to ' + websocketAddress +
				'. You should remove this fallback when you deploy live, as it\'s inherently insecure. ' +
				'Consider switching to Metamask for development. More info here: http://truffleframework.com/tutorials/truffle-and-metamask')
			// Connect via websocket for test purposes
			this.web3 = new Web3(websocketAddress)
		}

		this.accounts = []
		this.contract = new this.web3.eth.Contract(contractArtifacts.abi, contractArtifacts.networks[networkId].address)
	}

	/**
	 * Fetch the accounts from web3
	 *
	 * @returns {Promise<*>}
	 */
	async fetchAccounts () {
		return new Promise((resolve, reject) => {
			this.web3.eth.getAccounts(async (error, bcAddresses) => {
				if (error) {
					Notifications.show('There was an error fetching your blockchain accounts')
					console.error(error)
					reject()
				}

				if (bcAddresses.length === 0) {
					Notifications.show('Couldn\'t get any blockchain accounts! Make sure your Ethereum client is configured correctly.')
					reject()
				}

				resolve(bcAddresses)
			})
		})
	}
}

export const Web3Util = new Web3UtilClass()
