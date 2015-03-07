
[pppp]: http://purecss.io/

# Hackable

**The server part of the [PPPP][pppp] ecosystem.**

Just run it on your own server, and you can operate all services yourself (DNS, kanb, signal, store, apps).

See folders for details about each service.

## Install

Make sure you have everything you need (redis, nodemon)
```shell
$ ./install.sh
```

Build the server
```shell
$ npm install
$ grunt build
```

Test the server
```shell
$ grunt tests
```


## Run

To run the server with the arguments of "config.default.json"
```shell
$ node server.js
```

#### Options

Command line arguments given always overwrite the defaults of "config.default.json"

* -env: environment: choice of "dev" or "prod" (defaults to dev)
* -port: port number (defaults to 8080)
* -services: choice of dns, kanb, signal, store, apps (defaults to dns&kanb&signal&store&apps)

**example**
To run the server on port 8080 (default) in production with only the services "store" and "signal":
```shell
$ node server.js -env prod -port 8080 -services store&signal
```


License
-------

MIT




