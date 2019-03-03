var MiLeregistration = artifacts.require("./MiLeregistration.sol");

module.exports = function(deployer) {
  // deployment steps
  deployer.deploy(MiLeregistration);
};