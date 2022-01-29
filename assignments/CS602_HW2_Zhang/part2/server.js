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
  if (req.query.id) {
    let id = req.query.id;
    let result = cities.lookupByZipCode(id);
    if (result) {
      res.render("lookupByZipView", result);
    } else {
      res.status(404);
      res.render("404");
    }
  } else {
    res.render("lookupByZipForm");
  }
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
  let result = cities.lookupByZipCode(id);

  res.format({
    "application/json": () => {
      res.json(result);
    },

    "text/html": () => {
      res.type("text/html");
      res.render("lookupByZipView", result);
    },

    "application/xml": () => {
      let resultXML =
        '<?xml version="1.0"?>\n' +
        '<zipCode id="' +
        result._id +
        '">\n' +
        "   <city>" +
        result.city +
        "</city>\n" +
        "   <state>" +
        result.state +
        "</state>\n" +
        "   <pop>" +
        result.pop +
        "</pop>\n" +
        "</zipCode>\n";
      res.type("application/xml");
      res.send(resultXML);
    },
  });
});

app.get("/city", (req, res) => {
  const city = req.query.city;
  const state = req.query.state;
  if (city && state) {
    const result = cities.lookupByCityState(city, state);
    if (result.data.length > 0) {
      res.render("lookupByCityStateView", result);
    } else {
      res.status(404);
      res.render("404");
    }
  } else {
    res.render("lookupByCityStateForm");
  }
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
        result.data +
        '"</data>\n' +
        "</city-state>\n";
      res.type("application/xml");
      res.send(resultXML);
    },
  });
});

app.get("/pop", (req, res) => {
  if (req.query.state) {
    let state = req.query.state;
    let result = cities.getPopulationByState(state);
    if (result) {
      res.render("populationView", result);
    } else {
      res.status(404);
      res.render("404");
    }
  } else {
    res.render("populationForm");
  }
});

// Implement the JSON, XML, & HTML formats

app.get("/pop/:state", async function (req, res) {
  let state = req.params.state;
  let result = await cities.getPopulationByState(state);
  res.format({
    "application/json": () => {
      res.json(result);
    },

    "text/html": () => {
      res.type("text/html");
      res.render("populationView", result);
    },

    "application/xml": () => {
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
