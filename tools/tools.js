// CAREFULL !!!!! YOU NEED TO RUN  "sudo node app.js" IF YOU CHOOSE PORT 80 or 443 !!!!!
// in dev, run: nodemon -V -e "*.js|*.ejs|*.json" --ignore .git/ --ignore node_modules go.js [options]

// make $ a common shared library, so that we don't have to require it in each module.
global.$ = require("./shared/js/merge")(["shared/js/base"]);

var config = require("./src/config")("config.default", process.argv),
  fs = require("fs"), 
  data = require("./data"),
  app = require('express')();

app.set('view engine', 'ejs');  

app.get('*', function(req, res) {
  var page = __dirname + "/views/pages" + (req.url === "/" ? "/index" : req.url) + ".ejs";
  fs.exists(page, function(exists) {
    return exists ? res.render("pages/"+req.url, data) : res.sendFile(__dirname + "/" + req.url );
  });
});

require('http').createServer(app).listen(config.port, function() {
   console.log("Started server in " + config.env + " mode on port " + config.port);
});

