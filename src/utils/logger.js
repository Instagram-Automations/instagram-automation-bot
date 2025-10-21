const fs = require('fs');

function logAction(message) {
  const logMessage = `[${new Date().toISOString()}] ${message}\n`;
  fs.appendFileSync('./data/logs/actions.log', logMessage, 'utf-8');
  console.log(message);
}

module.exports = { logAction };
