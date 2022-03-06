const mongoose = require("mongoose");

//A schema is basically like model in angular
const productSchema = mongoose.Schema({
  name: String,
  image: String,
  countInStock: {
    type: Number,
    required: true,
  },
});

exports.Product = mongoose.model("Product", productSchema); //this syntax because we are exporting a module
