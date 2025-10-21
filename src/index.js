const InstagramBot = require('./instagramBot');
const botConfig = require('../config/appilotConfig.json');

// Initialize the bot with configuration details
const bot = new InstagramBot(botConfig);

// Start the Instagram automation process
bot.start().then(() => {
  console.log('Instagram Automation Bot started successfully.');
}).catch((err) => {
  console.error('Error starting the bot:', err);
});
