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


Node Module
- modules are js files with function, object, variables available in the global level
- modules also contains encapsulation (private to local scope)
- modules are like pattern

design pattern - facade - only export the data we need
3 tiers - client, server, database

require - global function //require("./nameOfTheFile") - implies it is js file 
- you can not mix and match commonJS and ES6 
- es6 is async, commonJS runs sync
- you can create alias to hide the name 
//commonjs - default
const express = require('express');
module.exports = Task;
//es6
import process from "process";
export default App;

Modules are global objects like fs (with sync and async functions) 
  - server side object can not be used in client side
  - by default, the data read is returned as a Buffer object (big binary data like images video photoes
fs module - file system, read and write files
path module - interact with path easily, provides a way of working with directories and file paths
os module - like showing total memory, the number of cpu, the state of the system
util module, print formatted strings like time stamp


npm - open source modules (good weekly download, strong version)
express - node build up web server


Node Event
- a signal that something has happened
- node js is an event driven system that operates asynchronously so that it just takes requests one by one and processes those requests 
- some require operation to happen like database, lookup file system operation that get put on a queue to off and execute 
- and once execute and complete, it let anyone who cares about the operation know that it completes that it can go to do whatever processing it

HTTP to build web server, listen on a given port
everytime we receive a request on that port, that http class raise an event
- reading request and returning the right response

//EventEmitter
const EventEmitter = require("event")   //Class - container for properties and methods
const emitter = new EventEmitter(); //create the new instance

//register a listen - order important
emitter.on("messageLogged", function(){})  //name of the event and a callback function or actual listener

//raise an event
emitter.emit(messageLogged)  //raise an event, make a noise, produce something, signaling something is going to happen


Node Stream
Buffers:
  - temporary storage spot for a chunk of data that is being transferred from one place to another
  - the buffer is filled with data, then passed along
  - transfer small chunks of data at a time
Stream:
  - a stream of data that flows overtime from one place to another
  - can create streams in Node.js to transfer data
  - increase performance
data from data source -> buffer (collect small chunk of data) -> (when the buffer is full) data passed on and processed -> data send to client

A stream is an abstract interface, Streams can be readable, writable, or both (duplex).
Things happen in small chunks and able to receive in small chunks (improve performance in async)

source.pipe(destination)
readable stream: act as the source (receive)
writable stream: act as the destination (send)
duplex stream: both readable and writable (like telephone)
transform stream: special kind of duplex - source.pipe(transform).pipe(destination)

scalibility
- writable streams must send a signal back to readable streams that they are ready for more data (configurable)
  
