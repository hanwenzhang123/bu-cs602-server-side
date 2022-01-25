// Copy your solution from Assignment1

const data = require("./zips.json");

module.exports.lookupByZipCode = (zip) => {
  const result = data.find((each) => each["_id"] === zip);
  return result ? result : undefined;
};

module.exports.lookupByCityState = (city, state) => {
  const result = data
    .filter((each) => each["city"] === city && each["state"] === state)
    .map((data) => {
      return { zip: data["_id"], pop: data["pop"] };
    });
  return { city, state, data: result };
};

module.exports.getPopulationByState = (state) => {
  let totalPopulation = data.reduce((acc, cur) => {
    if (cur["state"] === state) {
      acc += cur["pop"];
    }
    return acc;
  }, 0);

  return { state, pop: totalPopulation };
};
