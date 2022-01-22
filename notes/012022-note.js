net – for creating TCP based server and clients 
dgram – for creating UDP/Datagram sockets 
http – for creating HTTP based web applications 
https – for creating TLS/SSL clients and servers

Event-Driven

One of Node core strengths: Faster processing

Rather than waiting for an operation to finish, create a callback that will be invoked when the operation ends (asynchonous, non-blocking)

sharp - high performance node.js image processing library

small and multiple more threads via non-blocking api

non blocking is faster than blocking

Express use event emitter class

stream - server side javascript

middleware - stuff that build up your application
morgan - error handler

net module - tie in the web server

socket.io - connection

setting the content-tyle is important when writing out the responses

handling POST request
- query string - encrypted

when do not use HTTP module much, instead, express is used popularly


express - creating web server for js
defining the route, for route handling, handling all request to like localhost 3000
app.send() - how express writes
app.use to build up a web server (building up the middleware)
app.use(()=>{res.status(404);res.render("404")}) - has to be the last thing in the express file, order matters
apple.use(express.bodyParser()) - body-parser is built in function in Express now
app.set() method of the Express enhanced response object like refresh the page every 5 seconds


restful end point, restful url
