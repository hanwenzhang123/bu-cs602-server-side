const cities = require("./zipCodeModule_v1");
const colors = require("colors");

console.log(colors.inverse("lookupByZipCode"));
console.log(cities.lookupByZipCode("02215"));
console.log(cities.lookupByZipCode("99999"));

console.log(colors.inverse("lookupByCityState"));
console.log(cities.lookupByCityState("BOSTON", "MA"));
console.log(cities.lookupByCityState("BOSTON", "TX"));
console.log(cities.lookupByCityState("BOSTON", "AK"));

console.log(colors.inverse("getPopulationByState"));
console.log(cities.getPopulationByState("MA"));
console.log(cities.getPopulationByState("TX"));
console.log(cities.getPopulationByState("AA"));
