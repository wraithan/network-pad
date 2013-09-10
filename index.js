var api = require('etherpad-lite-client')
  , os = require('os')

var ep = api.connect({
  apikey: process.argv[2]
, host: 'pad.wraithan.net'
, port: 80
})

var padName = os.hostname()
var padContents = {
  network: os.networkInterfaces()
, uptime: os.uptime()
, date: Date().toString()
}

ep.setText({padID: padName, text: JSON.stringify(padContents, null, 4)}, function(err, data) {
  if (err) {
    console.error('Error setting text in test: ' + err.message)
    return
  }
  console.log('data: ' + JSON.stringify(data))
})

