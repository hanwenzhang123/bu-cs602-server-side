const credentials = require("./credentials.js");
const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let connection = null;
let model = null;

//mongodb altas
const dbUrl =
  " mongodb+srv://" +
  credentials.username +
  ":" +
  credentials.password +
  "@" +
  credentials.altasDB +
  "/" +
  credentials.database;

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

// Step 1. Fill in the schema definition
// Step 2. For collection, replace lastName below with your lastName

let employeeSchema = new Schema(
  {
    firstName: String,
    lastName: String,
  },
  {
    collection: "employees_Zhang",
  }
);

module.exports = {
  getModel: () => {
    if (connection == null) {
      console.log("Creating connection and model...");
      connection = mongoose.createConnection(dbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      model = connection.model("EmployeeModel", employeeSchema);
    }
    return model;
  },
};
