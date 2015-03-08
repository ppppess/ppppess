
[pppp]: http://purecss.io/

# PPPP

Welcome hackers! 

If you just want to test the app, the easiest way is to
[follow this video]()

<<<<<<< HEAD
**If you want to hack however**, you are in the right place! The repo includes: 

* *client:* the Chrome app.
=======
* **servers:** that's the pppp ecosystem. It is divided into 2 parts:
..* the *hackable* part: Just run it on your own server, and you can operate all services yourself (DNS, kanb, signal, store, apps).
..* the *root* part: This part is operated by PPPP, but we include the code so that you can run it yourself too.
>>>>>>> 6dc602583b7e59aba6e2e46cc111776de78f83aa

* *servers:*  the [PPPP][pppp] ecosystem.







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

If tests went OK, now you can:

* [Hack the client]()

* [Hack the servers]()




## Issues ?

Well, there might be many:weary:, especially at the beginning...

First read the 
[FAQ](https://github.com/ppppess/ppppess/blob/master/faq.md)
, I will try to keep it updated regularly.

Then check the 
[wiki](https://github.com/ppppess/ppppess/wiki).

If you still can't find the issue, 
[just file a bug](https://github.com/ppppess/ppppess/issues).








## Hackers please help !

We can use any help (testing, translating, auditing, redesiging, whatever you might think about)

Fork the project, hack it, test it.

If you find any security issue, 
[please file a security bug](https://github.com/ppppess/ppppess/issues)






License
-------

[MIT](https://github.com/ppppess/ppppess/blob/master/LICENCE)


