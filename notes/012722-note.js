MongoDB & MySQL

npm install --save mysql

you have to connect to your database

tabel - real object to be model used by your system

winston - a logger for just about everything (npm)

connection pooling 
connection pool is a cache of database connections maintained so that the connections can be reused when future requests to the database are required. 
If frequent connections are required to the database, creating a database connection pool is more efficient.
const pool = mysql.createPool();

warp connection with a timeout
close it after use it
always try catch, catch your error

placeholder using :
scape %20 as blank space

next() => middleware, a callback function, the next thing to do, to go to next callback function

use singleton across all the class
