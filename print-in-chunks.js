var https = require('https');

function getAndPrintHTMLChuncks() {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

https.get(requestOptions, function (response) {


  response.setEncoding('utf8');

  response.on('data', function (data) {
    console.log('Chunk Recieved. Length:', data.length + '\n')
  });

  response.on('end' , function(data) {
    console.log('Response stream complete.');
  });


});


}