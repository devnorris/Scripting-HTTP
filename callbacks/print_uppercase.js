var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function allCaps(html) {
  console.log(html.toUpperCase());
}

getHTML(requestOptions, allCaps);