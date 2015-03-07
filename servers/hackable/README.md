
[pppp]: http://purecss.io/

# Hackable

**The server part of the [PPPP][pppp] ecosystem.**

Just run it on your own server, and you can operate all services yourself (DNS, kanb, signal, store, apps).

See child folders for details about each service.



## Installation

Make sure you have everything you need (redis, nodemon)
```shell
$ tools/install.sh
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




## Usage

To run the server with the default arguments contained in 
[config.default.json](https://github.com/ppppess/ppppess/blob/master/servers/hackable/config.default.json)
:
```shell
$ node server.js
```

When hacking, I use 
[nodemon](http://nodemon.io/)
to avoid relaunching after each change. Run (from the root folder):
```shell
$ nodemon -V -e "*.js|*.json" --ignore client/ --ignore .git/ servers/hackable/server.js
```

#### Options

Command line arguments always overwrite the defaults of 
[config.default.json](https://github.com/ppppess/ppppess/blob/master/servers/hackable/config.default.json)

* **-env**: environment: choice of "dev" or "prod" (defaults to dev)
* **-port**: port number (defaults to 8080)
* **-services**: choice of dns, kanb, signal, store, apps (defaults to dns&kanb&signal&store&apps)

*example:*  
to run the server on port 8080 in production with only the services "store" and "signal":
```shell
$ node server.js -env prod -port 8080 -services store&signal
```






## Issues ?

Well, there might be many, especially at the beginning...

First read the 
[FAQ](https://github.com/ppppess/ppppess/blob/master/servers/hackable/faq.md)
, I will try to keep it updated regularly.

Then check the 
[wiki](https://github.com/ppppess/ppppess/wiki)

If you still can't find the issue, 
[just file a bug](https://github.com/ppppess/ppppess/issues)








## Hackers please help !

We can use any help (testing, translating, auditing, redesiging, whatever you might think about)

Fork the project, hack it, test it.

If you find any security issue, 
[please file a security bug](https://github.com/ppppess/ppppess/issues)






License
-------

[MIT](https://github.com/ppppess/ppppess/blob/master/LICENCE)




