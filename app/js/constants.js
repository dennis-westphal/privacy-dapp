// Network ids
const truffleNet = 4447
const liveNet = 1
const ropstenNet = 3
const rinkebyNet = 4

// Determine which network we're running on
export const networkId = ropstenNet

// Define if we are running in test mode => split local accounts between chrome and firefox
export const accountTestMode = networkId === truffleNet

// Define the server address
export const websocketAddress = 'wss://YOUR_DOMAIN' // Websocket address to use for network connection
export const useInjectedWeb3 = networkId !== truffleNet // Don't use the injected web3 if we're running in test network; use websockets instead

export const ipfsHost = {'host': 'YOUR_DOMAIN', 'port': 443, 'protocol': 'https'}
export const ipfsGatewayUrl = '/ipfs/'
export const ipnsResolveTimeout = '1s' // Timeout when resolving IPNS addresses. Setting this too high might cause the app to freeze for a long time.

// If this is specified, a custom ipfs name service is used instead of ipfs
// The node.js server has to be run from ipfsNs.js
export const useIpfsNs = true
export const ipfsNsPath = 'https://YOUR_DOMAIN/ipfsns/'

// Constants used for google api requests (maps, places, geocoding)
export const googleApiProject = 'API_PROJECT_ID'
export const pullInterval = 2000 // Pull every X milliseconds

export const googlePubSubScopes = [
	'https://www.googleapis.com/auth/cloud-platform',
	'https://www.googleapis.com/auth/pubsub'
]

// Options for displaying notifications
export const defaultToastOptions = {
	duration: 5000
}

// Options for loading screens
export const hideLoadingDelay = 500
export const loadingTransitionDuration = 300
