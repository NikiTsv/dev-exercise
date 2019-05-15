const fs = require('fs');
const path = require('path');

const readCSV = (filename) => {
  const res = fs.readFileSync(path.join(__dirname, filename), 'utf8');
  return res.split('\n').map(row => Object.assign({}, row.split(',').map(str=>str.replace(/"/g, ''))));
}


module.exports = readCSV;