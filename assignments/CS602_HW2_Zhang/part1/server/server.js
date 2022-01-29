const net = require("net");

const colors = require("colors");

const cities = require("./zipCodeModule_v2");

const server = net.createServer((socket) => {
  console.log("Client connection...".red);

  socket.on("end", () => {
    console.log("Client disconnected...".red);
  });

  // HW Code - Write the following code to process data from client
  //process data from client
  socket.on("data", (data) => {
    let input = data.toString();
    console.log(colors.blue("...Received %s"), input);

    // Fill in the rest
    let argument = input.split(",");
    let method = argument.shift();
    let result;

    switch (method) {
      case "lookupByZipCode":
        result = cities.lookupByZipCode(argument[0] || undefined);
        break;

      case "lookupByCityState":
        result = cities.lookupByCityState(...argument);
        break;

      case "getPopulationByState":
        result = cities.getPopulationByState(...argument);
        break;

      default:
        result = "Invalid Request";
    }

    socket.write(JSON.stringify(result));
  });

  //client close the window
  socket.on("error", () => {
    console.log("Client closed...".red);
  });
});

// listen for client connections
server.listen(3000, () => {
  console.log("Listening for connections on port 3000");
});
