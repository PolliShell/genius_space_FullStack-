const mongoose = require("mongoose");
const dotenv = require("dotenv")
const express = require("express");
const cors = require("cors");

const app = express();

const productsRouter = require("./routes/api/products");

app.use(cors());
app.use(express.json());
app.use("/api/products", productsRouter);
dotenv.config();

const {DB_HOST, PORT = 3000} = process.env;

mongoose.connect(DB_HOST)
    .then(() => app.listen(PORT))
    .catch(error => {
        console.log(error.message);
        process.exit(1);
    });