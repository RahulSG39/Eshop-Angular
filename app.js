//npm i nodemon
//npm i express
//npm i dotenv
//npm i morgan
//npm i mongoose

const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const app = express(); //creates a web server

require("dotenv/config"); //imports package to get access to .env file

const api = process.env.API_URL;

app.use(express.json()); //Middleware - Used so that the backend understands that frontend is sending json
app.use(morgan("tiny")); //Middleware - Used to log the http requests | tiny - argument to make brief description

//A schema is basically like model in angular
const productSchema = mongoose.Schema({
  name: String,
  image: String,
  countInStock: {
    type: Number,
    required: true,
  },
});

const Product = mongoose.model("Product", productSchema);

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
  const product = new Product({
    name: req.body.name,
    image: req.body.image,
    countInStock: req.body.countInStock,
  });

  //Needed to save data into database. Save returns a promise(the data)
  product
    .save()
    .then((createdProduct) => {
      res.status(201).json(createdProduct);
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
        success: false,
      });
    });
});

mongoose
  .connect(process.env.CONNECTION_STRING)
  .then(() => {
    console.log("Database connection is ready...");
  })
  .catch((err) => {
    console.log(err);
  });

//Listens to port 3000 and on successful creation of app server it gives a callback
app.listen(3000, () => {
  console.log("server is running at http://localhost:3000");
});
