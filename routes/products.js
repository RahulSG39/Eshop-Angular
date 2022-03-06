const express = require("express");
const router = express.Router();
const { Product } = require("../models/products");

//Fetches content at route '/' and receives a callback
router.get(`/`, async (req, res) => {
  const productList = await Product.find();
  res.send(productList);
});

router.post(`/`, (req, res) => {
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

module.exports = router; //this syntax because we are exporting a module
