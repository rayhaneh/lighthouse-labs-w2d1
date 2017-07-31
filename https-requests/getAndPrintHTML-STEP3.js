function getAndPrintHTML (options) {

  var https = require('https');

  var html = ''

  https.get(options, function (response) {

    response.setEncoding('utf8')

    response.on('data',function(data) {
      html += data
    })

    response.on('end',function() {
      console.log(html)
    })

  });


}


  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

getAndPrintHTML(requestOptions)