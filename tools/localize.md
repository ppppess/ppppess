
# Localize tool

Rationale :

* write your html or ejs files in your native language

* just run this tool and your app is localized ... (well, if it was so easy...:smile:)


## Usage

In this directory: 
```shell
$ node tools.js -t localize
```

## Options

see "localize.json", change as see fit



## What does it do ?

* takes all raw html and ejs files in the "views" directory

* extracts all elements containing text

* assigns a unique key to all texts

* creates a js file containing the translation.
Example : the "/views/pages/index.ejs" will create a "/views/pages/index.ejs.en.js"

* modifies the html or ejs file by assigning the attribute data-lg=unique_key to each element.





License
-------
[MIT](https://github.com/ppppess/ppppess/blob/master/LICENCE)


