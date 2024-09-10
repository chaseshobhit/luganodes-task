// tracker.js

const web3 = require('./rpc');
const logger = require('./logging');
const { sendTelegramNotification } = require('./notifications');

// Function to start tracking deposits
const trackDeposits = async () => {
    const contractAddress = '0x00000000219ab540356cBB839Cbe05303d7705Fa';
    
    // Subscribe to the logs for the deposit contract
    web3.eth.subscribe('logs', { address: contractAddress }, (error, result) => {
        if (error) {
            logger.error('Error tracking deposit:', error);
        } else {
            console.log('New deposit detected:', result);
            logger.info('New deposit detected:', result);
            
            // Send Telegram notification
            sendTelegramNotification('New ETH deposit detected on Beacon Chain.');
            
            // Further processing of deposit details like blockNumber, fee, etc.
            processDeposit(result);
        }
    });
};

// Function to process and save deposit details
const processDeposit = async (result) => {
    const tx = await web3.eth.getTransaction(result.transactionHash);
    const receipt = await web3.eth.getTransactionReceipt(result.transactionHash);

    const deposit = {
        blockNumber: receipt.blockNumber,
        blockTimestamp: new Date(await web3.eth.getBlock(receipt.blockNumber).timestamp * 1000),
        fee: web3.utils.fromWei(receipt.gasUsed.toString(), 'ether'),
        hash: tx.hash,
        pubkey: result.topics[1] // Just an example, actual deposit details need to be parsed from the log
    };

    console.log('Processed deposit:', deposit);
    logger.info('Processed deposit:', deposit);
};

module.exports = { trackDeposits };
