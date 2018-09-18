const fs = require('fs');

module.exports = function(file) {
  fs.readFile([__dirname, file].join('/'), (err, data) => {
    if (err){
      throw err;
    }
    process.stdout.write(data);
    process.stdout.write('\nprompt > ');
  }
)}
