xml - human readable text file
json - native to javascript, object literal, data exchange with web services

json php
json_encode() -> will output json
json_decode() -> you have json doc, will decode back as php

We catch data between client and server through ajax


web services are everywhere, every webside uses web services, mostly json


soap - no more used, secure data between client and server

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
  
  
  
