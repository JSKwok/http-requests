var https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

function getHTML (options, callback) {

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

;

getHTML(requestOptions, printHTML);

