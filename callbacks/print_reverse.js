var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function reverse(html) {
  var arr = html.split(' ');
  arr.reverse();
  console.log(arr.join(" "));
}

getHTML(requestOptions, reverse);