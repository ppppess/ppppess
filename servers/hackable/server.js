// CAREFULL !!!!! YOU NEED TO RUN  "sudo node app.js" IF YOU CHOOSE PORT 80 or 443 !!!!!
// CAREFULL !!!!! the server must be built: tools/nodejs trs.js build server
var
   config = require("./config")(process.argv),
   port = 8081,
   fs = require('fs'),
   app = require('express')(),
   http = require('http').createServer(app),
   wsp = require('ws').Server,
   wss = new wsp({
      server: http
   }),
   ws = null,
   window = global;

http.listen(config.port, function() {
   console.log("Started " + config.env.toUpperCase() + " server, listening on port " + config.port);
});