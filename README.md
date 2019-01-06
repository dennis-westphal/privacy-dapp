# privacy-dapp
Privacy-Preserving Boilerplate Dapp for the Ethereum Blockchain

WARNING: This boilerplate has not been tested properly and is thus only in an alpha state

## Requirements
* An IPFS server
* npm
* node.js to run IPFS NS
* Truffle or another test network with support for web3 1.0
* A Google Cloud Pub/Sub project
* An infura account for test network deployment

## Installation
* Create topics on Google Cloud Pub/Sub as needed
* Adjust constants in the js/constants.js file
* Adjust credentials in the js/credentials.js file
* Adjust configuration and details in package.json
* Run "npm install" in your application folder
* For local test network, run the following in the application folder:
  * truffle develop
  * migrate --reset
  * (In a second console window) node/modules/.bin/webpack
* For ropsten network:
  * Set your wallet seed in wallet.js
  * Adjust the infura project in truffle.js
  * run "truffle deploy --network ropsten"
* Run the IPFS NS server with "node ipfsNs.js"