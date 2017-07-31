function getAndPrintHTML () {

  var https = require('https');

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };


  var html = ''

  https.get(requestOptions, function (response) {

    response.setEncoding('utf8')

    response.on('data',function(data) {
      html += data
    })

    response.on('end',function() {
      console.log(html)
    })

  });


}

getAndPrintHTML()