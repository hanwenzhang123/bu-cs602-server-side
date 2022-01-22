const EventEmitter = require("events").EventEmitter;
const data = require("./zips.json");

// Custom class
class ZipCodeEmitter extends EventEmitter {
  // member functions
  lookupByZipCode(zip) {
    const result = data.find((each) => each["_id"] == zip);
    this.emit("lookupByZipCode", result);
  }

  lookupByCityState(city, state) {
    const returnData = [];

    for (let each of data) {
      if (each["city"] === city && each["state"] === state) {
        let tempData = { zip: each["_id"], pop: each["pop"] };
        returnData.push(tempData);
      }
    }
    this.emit("lookupByCityState", { city, state, data: returnData });
  }

  getPopulationByState(state) {
    let totalPopulation = 0;
    for (let each of data) {
      if (each["state"] === state) {
        totalPopulation += each["pop"];
      }
    }
    this.emit("getPopulationByState", { state, pop: totalPopulation });
  }
}

module.exports.ZipCodeEmitter = ZipCodeEmitter;
