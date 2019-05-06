var https = require('https');

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, function (response) {

    response.setEncoding('utf8');
    var output_data = "";
    response.on('data', function (data) {
      output_data+= data;
      console.log('Chunk received.', output_data ,'Length:', data.length);
    });

    response.on('end', function () {
      console.log('Response stream complete');
    });
  });
}

getAndPrintHTML();