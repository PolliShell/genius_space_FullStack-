const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const productRouter = require("./routes/product");

// Load environment variables from .env file
dotenv.config();
const { DB_HOST, PORT } = process.env;

mongoose.set('strictQuery', true);

mongoose.connect(DB_HOST, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.use("/api", productRouter); // Adjust the route path if needed

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch(error => {
        console.log(error.message);
        process.exit(1);
    });
