var getHTML = require('../http-functions')

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step1.html'
};

function obfuscate (html) {
  var substr    = ["a", "e", "o", "l", "s", "t", "ck", "er", "you"];
  var newsubstr = ["4", "3", "0", "1", "5", "7", "x",  "0r", "j00"];

  for (var i = 0; i < substr.length; i++) {
    html = html.replace(/substr[i]/g, newsubstr[i]);
  }
  console.log(html);
}

getHTML(requestOptions,obfuscate)



