const fs = require('fs');

class ProxyManager {
  constructor(proxyListPath) {
    this.proxyList = JSON.parse(fs.readFileSync(proxyListPath, 'utf-8')).proxies;
    this.currentProxyIndex = 0;
  }

  getNextProxy() {
    if (this.currentProxyIndex >= this.proxyList.length) {
      this.currentProxyIndex = 0; // Reset index if all proxies are used
    }
    return this.proxyList[this.currentProxyIndex++];
  }
}

module.exports = ProxyManager;
