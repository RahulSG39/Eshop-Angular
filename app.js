//npm i nodemon
//npm i express
//npm i dotenv

const express = require("express");
const app = express(); //creates a web server

require("dotenv/config"); //imports package to get access to .env file

const api = process.env.API_URL;

//Fetches content at route '/' and receives a callback
app.get(api + "/products", (req, res) => {
  res.send("Hello API");
});

//Listens to port 3000 and on successful creation of app server it gives a callback
app.listen(3000, () => {
  console.log("server is running at http://localhost:3000");
  console.log(api);
});
