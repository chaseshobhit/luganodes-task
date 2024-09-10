const Web3 = require('web3');

// Use your Infura or Alchemy URL (replace YOUR_INFURA_PROJECT_ID)
const providerUrl = 'https://mainnet.infura.io/v3/8fda9a33ad4441558e1e2afcb8b618a6';

// Initialize web3 with the provider URL
const web3 = new Web3(providerUrl);

// Check if the connection is successful
web3.eth.net.isListening()
   .then(() => console.log('Successfully connected to Ethereum Mainnet'))
   .catch(e => console.log('Connection error', e));

module.exports = web3;
