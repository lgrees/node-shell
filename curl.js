const req = require('request');
module.exports = function(url) {
  req(url, function(error, response, body) {
    if (error) {
      throw error;
    }
    // console.dir(response.headers);
    process.stdout.write(response.statusCode.toString());
    // process.stdout.write(JSON.stringify(response.headers));

    process.stdout.write(body.toString());
    process.stdout.write('\nprompt > ');
  });
};
