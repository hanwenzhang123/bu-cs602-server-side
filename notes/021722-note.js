xml json ajax
  - data format (xml or json)
  - used to transmit data back and forth
  - talk to client and server, comminucate between each other
xml - convey stored information in human readable text file with customized tags
json - native to javascript, object literal, data exchange with web services

08:00, final exam using xml or json, either or, not both

json php
json_encode() -> will output json
json_decode() -> you have json doc, will decode back as php

We catch data between client and server through ajax


web services are everywhere, every webside uses web services, mostly json

soap api - no more used, old api, secure data between client and server

restful api - newer web services, url is indicative of the request itself.


sql injection - frontend does not validate the backend
- a type of attack where malicious user can inject (insert) SQL commands into existing SQL statement via their input to a web form or other method to send data to database

- You have a front end that does not validate the data that is going to your back end 
so malicious users will put in SQL query language, it would throw it towards your back end 
hoping that you do not check it and then you know does harm to your database

In the front end there is really never a need for any sequel statements to be used in your text fields or in your text areas.
You should have validation on your front end that does not allow sequel to be to be typed in.


session hijacking
- your session becomes their session
- need to expires
- solution: encryption, JWT (encrypted)


captchas
- ways to make sure if a user is an actual human


xml - old

fetch (2 steps process with 2 .then())
fetch(url).then((res) => res.json()).then(data) => console.log(data))

axios (only 1 .then() needed)


interview question
what is www-form-urlencoded?
  The application/x-www-form-urlencoded content type describes form data that is sent in a single block in the HTTP message body.
  
promise.all, one fail all fail?
- Promise.all is rejected if any of the elements are rejected. 
  
