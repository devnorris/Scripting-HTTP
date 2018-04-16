var https = require('https');

function getAndPrintHTMLChunks() {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  var output = '';

https.get(requestOptions, function (response) {


  response.setEncoding('utf8');


  response.on('data', function (data) {
    console.log('Chunk Recieved. Length:', data.length)
    output += data.length;
  });

  response.on('end' , function() {
    console.log('Response stream complete.');
  });

});


}

getAndPrintHTMLChunks();