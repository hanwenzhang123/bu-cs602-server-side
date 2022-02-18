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

soap - no more used, old api, secure data between client and server

sql injection
- frontend does not validate the backend

session hijacking
- your session becomes their session
- need to expires
- solution: JWT (encrypted)

captchas
- way to make sure if a user is an actual human


xml

fetch (2 steps process with 2 .then())
fetch(url).then((res) => res.json()).then(data) => console.log(data))

axios (only 1 .then() needed)


interview question
what is www-form-urlencoded?

  
promise.all, one fail all fail?
  Promise.all is rejected if any of the elements are rejected. 
  
  
  
