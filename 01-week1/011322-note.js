web port 80 for http and 443 for https (encrypt data from point A to point B)

request response cycle
client (web broswer) - http request -> server (application server, web server => html file) -> http response (with html) -> client (web broswer)

html css javascript (reachable files)
bring up contents as small as possible (single page application frameworks)

locking down your server!!! -> no open door due to web security

you can connect to many servers

client (web browser) - web server - application server (application script) - database server

- web server - firewall right before the web server needs a software/hardware solution to guide incoming request to inner system (whether block or pass)
- needs specialized account in application server to do certain things like read or write
- client is everywhere, privacy is a concern


server-side language
- php 
- asp.net
- python
- perl
- jsp
- ruby on rails
- javascript


Module
- function, object, variables in the global level
- modules are js files contains encapsulation (private to local)

design pattern - facade - only export the data we need

modules are like pattern

require - global function //require("./nameOfTheFile") - implies it is js file 

you can not mix and match commonJS and ES6 //es6 is async, commonJS runs sync
//commonjs - default
const express = require('express');
module.exports = Task;

//es6
import process from "process";
export default App;

you can create alias to hide the name

3 tiers - client, server, database


global objects like fs (with sync and async functions)
by default, the data read is returned as a Buffer object (big binary data like images video photoes)

path module - global - server side object can not be used in client side
os module - like showing total memory, the number of cpu, the state of the system
util, print formatted strings like time stamp


npm - open source modules (good weekly download, strong version)
express - node build up web server




