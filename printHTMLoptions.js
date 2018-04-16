var https = require('https');

function getAndPrintHTML(options) {

  var output = '';

https.get(options, function (response) {


  response.setEncoding('utf8');


  response.on('data', function (data) {
    console.log('Chunk Recieved. Length:', data.length)
    output += data;
  });

  response.on('end' , function() {
    console.log('Response stream complete.');
    console.log(output);
  });


});

}

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

getAndPrintHTML(requestOptions);