const express = require("express");
const router = express.Router();
const {Product} = require("../models/product");

const {
    add,
    getAll,
    getById,
    updateById
} = require("../controllers/product");

const auth = require("../middlewares/auth");


// Get all products
router.get("/products",auth, getAll);

// Get a product by ID
router.get("/products/:id", getById);

// Add a new product
router.post("/products", add);

// Update a product by ID (using PUT instead of POST)
router.put("/products/:id", updateById);

module.exports = router;
