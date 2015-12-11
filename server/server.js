// REQUIRES
var http = require("http");
var express = require("express");
var bodyParser = require("body-parser");
var GoogleMapsAPI = require("googlemaps");
var config = require("./config/config.js");

// APP INIT AND CONFIGS
var app = express();
app.use(bodyParser.json());

// GOOGLE MAPS
var gmAPI = new GoogleMapsAPI(config.publicConfig);

var geocodeParams = {
  "address":    "121, Curtain Road, EC2A 3AD, London UK",
  "components": "components=country:GB",
  "bounds":     "55,-1|54,1",
  "language":   "en",
  "region":     "uk"
};

gmAPI.geocode(geocodeParams, function(err, result){
  if (err) {
    console.log(err);
  } else {
    console.log(result);
  }
});

// SERVER INIT AND CONFIGS
var server = http.createServer(app);

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Server listening at", addr.address + ":" + addr.port);
});