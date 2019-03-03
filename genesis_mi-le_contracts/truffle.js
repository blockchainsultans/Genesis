module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8567,
      gas: 14000000,
      network_id: "*" // Match any network id
    
    },
    ropsten: {
      network_id: 3,
      host: "localhost",
      port: 8545,
      gas: 4000000
      
    }
  }
};
