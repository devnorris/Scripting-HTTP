var https = require('https');


var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

function printHTML (html) {
  console.log(html);
}

function getHTML(options, callback) {

  var output = '';

https.get(options, function (response) {


  response.setEncoding('utf8');


  response.on('data', function (data) {
    console.log('Chunk Recieved. Length:', data.length)
    output += data;
  });

  response.on('end' , function() {
    printHTML(output);
  });


});

}



getHTML(requestOptions);