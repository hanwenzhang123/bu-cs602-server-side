const colors = require("colors");

const ZipCodeEmitter = require("./zipCodeEmitter").ZipCodeEmitter;

const cities = new ZipCodeEmitter();

cities.on("lookupByZipCode", (data) => {
  console.log("Event LookupByZipCode Raised", data);
});

cities.on("lookupByCityState", (data) => {
  console.log("Event lookupByCityState Raised (Handler 1)", data);
});

cities.on("lookupByCityState", (data) => {
  let statement = [];
  statement.push("City: " + data.city + ", State: " + data.state);
  for (let i = 0; i < data.data.length; i++) {
    let temp = data.data[i].zip + " has population of " + data.data[i].pop;
    statement.push(temp);
  }
  console.log("Event lookupByCityState Raised (Handler 2)", statement);
});

cities.on("getPopulationByState", (data) => {
  console.log("Event getPopulationByState Raised", data);
});

console.log(colors.inverse("Lookup by zip code: 02215."));
cities.lookupByZipCode("02215");

console.log(colors.inverse("Lookup by city, state: BOSTON, MA."));
cities.lookupByCityState("BOSTON", "MA");

console.log(colors.inverse("Get population by state: MA."));
cities.getPopulationByState("MA");
