
[pppp]: http://purecss.io/

# PPPP

the repo includes: 

* **client:** that's the Chrome app. You can install it in 5 seconds on your pc, tablet or smartphone.

* **servers:** that's the pppp ecosystem. It is divided into 2 parts:

..* the *hackable* part: 

Just run it on your own server, and you can operate all services yourself (DNS, kanb, signal, store, apps).

See child folders for details about each service11.


..* the *root* part: 

This part is operated by PPPP, but we include the code so that you can run it yourself too.








## Installation

Make sure you have everything you need (redis, nodemon)
```shell
$ tools/install.sh
```

Build the servers and client
```shell
$ npm install
$ grunt build
```

Test the server
```shell
$ grunt tests
```

now you can:

* Intall the client

* Run the servers




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




