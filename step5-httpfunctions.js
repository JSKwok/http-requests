module.exports = function getHTML (options, callback) {
  var https = require('https');
  https.get(options, function (response) {

    response.setEncoding('utf8');
    var output_data = "";

    response.on('data', function (data) {
      output_data+= data;
      console.log('Chunk received. Length:', data.length);
    });

    response.on('end', function () {
      callback(output_data);
      console.log('Response stream complete');
    });
  });
};