const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/product");
const { Product } = require("../models/product");

// Get all products
router.get("/products", ctrl.getAll);

// Get a product by ID
router.get("/products/:id", ctrl.getById);

// Add a new product
router.post("/products", ctrl.add);

// Update a product by ID (using PUT instead of POST)
router.put("/products/:id", ctrl.updateById);

module.exports = router;
