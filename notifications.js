// notifications.js

const axios = require('axios');

// Function to send a notification to a Telegram bot
const sendTelegramNotification = (message) => {
    const url = `https://api.telegram.org/bot<YOUR_BOT_TOKEN>/sendMessage?chat_id=<CHAT_ID>&text=${message}`;
    axios.get(url)
        .then(response => {
            console.log('Notification sent:', response.data);
        })
        .catch(error => {
            console.error('Error sending notification:', error);
        });
};

module.exports = { sendTelegramNotification };
