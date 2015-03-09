
# Localize tool

Rationale :

* write your html or ejs files in your native language

* just run the tools and your app is localized ... (well, if it was so easy...)


## Usage

Make sure you have everything you need (redis, nodemon)
```shell
$ node tools.js -t localize
```

## Options

located in "localize.json", change as see fit



## What does it do ?

* takes all html and ejs files in the "views" directory

* extracts all elements containing text

* assigns a key to all texts, and creates a js file containing the translations

example : the "/views/pages/index.ejs" will create a "/views/pages/index.ejs.en.js"




License
-------
[MIT](https://github.com/ppppess/ppppess/blob/master/LICENCE)


