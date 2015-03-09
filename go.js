// CAREFULL !!!!! YOU NEED TO RUN  "sudo node app.js" IF YOU CHOOSE PORT 80 or 443 !!!!!
// in dev, run from the root pppp folder: nodemon -V -e "*.js|*.ejs|*.json" --ignore .git/ --ignore node_modules go.js [options]

// small hack to normalize the paths
// will enable to write shared.require("mymodule") instead of ugly require("./app/src/shared/mymodule")
(function() { 
   var paths = require("./paths"), makeRequire = function(p) {
      return {
         require: function(path) { return require("./" + paths[p] + path); },
         path: function(path) { return paths[p] + path ; }
      };
   };
   for(var p in paths) global[p] = makeRequire(p);
})();

// make $ a common shared library, so that we don't have to require it in each module.
global.$ = shared.require("merge")([
   shared.path("base")
]);

var
   config = src.require("config")("config.default", process.argv),
   app = main.require(config.app+"/server")(config),
   http = require('http').createServer(app);

http.listen(config.port, function() {
   console.log("Started " + config.app.toUpperCase() + " server in " + config.env + " mode on port " + config.port);
});