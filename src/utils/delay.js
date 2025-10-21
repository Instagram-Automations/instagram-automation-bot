function randomDelay(min = 1000, max = 3000) {
  const delayTime = Math.floor(Math.random() * (max - min + 1)) + min;
  return new Promise(resolve => setTimeout(resolve, delayTime));
}

module.exports = { randomDelay };
