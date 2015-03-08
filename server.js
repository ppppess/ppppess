// CAREFULL !!!!! YOU NEED TO RUN  "sudo node app.js" IF YOU CHOOSE PORT 80 or 443 !!!!!
// CAREFULL !!!!! the server must be built: tools/nodejs trs.js build server

// to monitor: run from the root pppp folder:
// nodemon -V -e "*.js|*.json" --ignore client/ --ignore .git/ server.js [options]

global.$ = require("./shared/merge")([
   "shared/base"
   ]);

var
   config = require("./shared/config")("config.default", process.argv),
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