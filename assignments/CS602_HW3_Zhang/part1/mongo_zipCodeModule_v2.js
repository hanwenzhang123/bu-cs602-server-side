const MongoClient = require("mongodb").MongoClient;
const credentials = require("./credentials.js");

//local
// const dbUrl =
//   "mongodb://" +
//   credentials.username +
//   ":" +
//   credentials.password +
//   "@" +
//   credentials.host +
//   ":" +
//   credentials.port +
//   "/" +
//   credentials.database;

//mongodb altas
const dbUrl =
  " mongodb+srv://" +
  credentials.username +
  ":" +
  credentials.password +
  "@" +
  credentials.altas +
  "/" +
  credentials.database;

let client = null;

const getConnection = async () => {
  if (client == null)
    client = await MongoClient.connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  return client;
};

module.exports.lookupByZipCode = async (zip) => {
  let client = await getConnection();
  let collection = client.db(credentials.database).collection("zipcodes");

  let result = await collection.find({ _id: zip }).toArray();

  if (result.length > 0) return result[0];
  else return undefined;
};

// Complete the code for the following

module.exports.lookupByCityState = async (city, state) => {
  let client = await getConnection();
  let collection = client.db(credentials.database).collection("zipcodes");

  // Fill in the rest
  let data = await collection.find({ city: city, state: state }).toArray();
  const result = data
    .filter((each) => each["city"] === city && each["state"] === state)
    .map((data) => {
      return { zip: data["_id"], pop: data["pop"] };
    });
  return { city, state, data: result };
};

module.exports.getPopulationByState = async (state) => {
  let client = await getConnection();
  let collection = client.db(credentials.database).collection("zipcodes");

  // Fill in the rest
  let data = await collection.find({ state: state }).toArray();
  let totalPopulation = data.reduce((acc, cur) => {
    if (cur["state"] === state) {
      acc += cur["pop"];
    }
    return acc;
  }, 0);

  return { state, pop: totalPopulation };
};
