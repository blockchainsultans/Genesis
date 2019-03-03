var Master = artifacts.require("./master.sol");

module.exports = function(deployer) {
  // deployment steps
  deployer.deploy(Master);
};