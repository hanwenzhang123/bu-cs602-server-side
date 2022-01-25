const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// setup handlebars view engine
const handlebars = require("express-handlebars");

app.engine("handlebars", handlebars({ defaultLayout: "main" }));

app.set("view engine", "handlebars");

// static resources
app.use(express.static(__dirname + "/public"));

// Use the zipCode module
const cities = require("./zipCodeModule_v2");

// GET request to the homepage

app.get("/", (req, res) => {
  res.render("homeView");
});

app.get("/zip", (req, res) => {
  res.render("lookupByZipForm");
});

app.post("/zip", (req, res) => {
  const input = req.body.id;
  const result = cities.lookupByZipCode(input);
  if (result) {
    res.render("lookupByZipView", result);
  } else {
    res.status(404);
    res.render("404");
  }
});

// Implement the JSON, XML, & HTML formats

app.get("/zip/:id", (req, res) => {
  let id = req.params.id;
  res.format({
    "application/json": () => {
      res.json(cities.lookupByZipCode(id));
    },

    "text/html": () => {
      let result = cities.lookupByZipCode(id);
      res.type("text/html");
      res.render("lookupByZipView", result);
    },

    "application/xml": () => {
      let result = cities.lookupByZipCode(id);
      let resultXML =
        '<?xml version="1.0"?>\n' +
        '<zipCode id="' +
        result._id +
        '">\n' +
        ' <state>"' +
        result.state +
        '"</state>\n' +
        ' <pop>"' +
        result.pop +
        '"</pop>\n' +
        "</zipCode>\n";
      res.type("application/xml");
      res.send(resultXML);
    },
  });
});

app.get("/city", (req, res) => {
  res.render("lookupByCityStateForm");
});

app.post("/city", (req, res) => {
  const city = req.body.city.toUpperCase();
  const state = req.body.state.toUpperCase();
  const result = cities.lookupByCityState(city, state);
  if (result.data.length > 0) {
    res.redirect(`/city/${result.city}/state/${result.state}`);
  } else {
    res.status(404);
    res.render("404");
  }
});

// Implement the JSON, XML, & HTML formats

app.get("/city/:city/state/:state", (req, res) => {
  let city = req.params.city;
  let state = req.params.state;
  res.format({
    "application/json": () => {
      res.json(cities.lookupByCityState(city, state));
    },

    "text/html": () => {
      const result = cities.lookupByCityState(city, state);
      res.type("text/html");
      res.render("lookupByCityStateView", result);
    },

    "application/xml": () => {
      const result = cities.lookupByCityState(city, state);
      let resultXML =
        '<?xml version="1.0"?>\n' +
        '<city-state city="' +
        result.city +
        '" state=" ' +
        result.state +
        ">\n" +
        '<data>"' +
        result.data.map((each) => each.zip, each.pop) +
        '"</data>\n' +
        "</city-state>\n";
      res.type("application/xml");
      res.send(resultXML);
    },
  });
});

app.get("/pop", (req, res) => {
  res.render("populationForm");
});

// Implement the JSON, XML, & HTML formats

app.get("/pop/:state", (req, res) => {
  let state = req.params.state;
  res.format({
    "application/json": () => {
      res.json(cities.getPopulationByState(state));
    },

    "text/html": () => {
      let result = cities.getPopulationByState(state);
      res.type("text/html");
      res.render("populationView", result);
    },

    "application/xml": () => {
      const result = cities.getPopulationByState(state);
      let resultXML =
        '<?xml version="1.0"?>\n' +
        "<response>\n" +
        ' <state>"' +
        result.state +
        '"</state>\n' +
        ' <pop>"' +
        result.pop +
        '"</pop>\n' +
        "</response\n";
      res.type("application/xml");
      res.send(resultXML);
    },
  });
});

app.use((req, res) => {
  res.status(404);
  res.render("404");
});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
