const fs = require('fs');

class Database {
  static saveData(filename, data) {
    fs.writeFileSync(`./data/${filename}`, JSON.stringify(data, null, 2), 'utf-8');
  }

  static readData(filename) {
    if (fs.existsSync(`./data/${filename}`)) {
      const rawData = fs.readFileSync(`./data/${filename}`, 'utf-8');
      return JSON.parse(rawData);
    }
    return [];
  }
}

module.exports = Database;
