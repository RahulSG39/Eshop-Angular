//npm i nodemon
//npm i express
//npm i dotenv
//npm i morgan

const express = require("express");
const morgan = require("morgan");
const app = express(); //creates a web server

require("dotenv/config"); //imports package to get access to .env file

const api = process.env.API_URL;

app.use(express.json()); //Middleware - Used so that the backend understands that frontend is sending json
app.use(morgan("tiny")); //Middleware - Used to log the http requests | tiny - argument to make brief description

//Fetches content at route '/' and receives a callback
app.get(`${api}/products`, (req, res) => {
  const product = {
    id: 1,
    name: "hair dresser",
    image: "some_url",
  };
  res.send(product);
});

app.post(`${api}/products`, (req, res) => {
  const newProduct = req.body;
  console.log(newProduct);
  res.send(newProduct);
});

//Listens to port 3000 and on successful creation of app server it gives a callback
app.listen(3000, () => {
  console.log("server is running at http://localhost:3000");
});
