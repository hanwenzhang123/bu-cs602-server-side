const data = require("./zips.json");

module.exports.lookupByZipCode = (zip) => {
  for (let each of data) {
    if (each["_id"] === zip) {
      return each;
    }
  }
  return undefined;
};

module.exports.lookupByCityState = (city, state) => {
  const returnData = {
    city: city,
    state: state,
    data: [],
  };
  for (let each of data) {
    if (each["city"] === city && each["state"] === state) {
      let tempData = { zip: each["_id"], pop: each["pop"] };
      returnData.data = [...returnData.data, tempData]; //we can also use returnData.data.push(tempData)
    }
  }
  return returnData;
};

module.exports.getPopulationByState = (state) => {
  let totalPopulation = 0;
  for (let each of data) {
    if (each["state"] === state) {
      totalPopulation += each["pop"];
    }
  }
  return { state: state, pop: totalPopulation };
};
