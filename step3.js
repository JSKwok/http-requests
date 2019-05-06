var https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

function getAndPrintHTML (options) {

  https.get(options, function (response) {

    response.setEncoding('utf8');
    var output_data = "";

    response.on('data', function (data) {
      output_data+= data;
      console.log('Chunk received. Length:', data.length);
    });

    response.on('end', function () {
      console.log('Response stream complete');
      console.log(output_data);
    });
  });
};

getAndPrintHTML(requestOptions);
