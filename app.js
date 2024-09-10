// app.js

const { trackDeposits } = require('./tracker');
const logger = require('./logging');

// Start tracking Ethereum deposits
trackDeposits();

// Example log to indicate that the tracker has started
logger.info('ETH Deposit Tracker started');
