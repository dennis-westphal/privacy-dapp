var Library = artifacts.require('./Library.sol')
var Verifier = artifacts.require('./Verifier.sol')
var YourContract = artifacts.require('./YourContract.sol')

module.exports = function (deployer) {
	deployer.deploy(Library)
	deployer.deploy(Verifier)

	deployer.link(Library, YourContract)
	deployer.link(Verifier, YourContract)
	deployer.deploy(YourContract)
}
