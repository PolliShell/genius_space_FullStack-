const express = require('express');
const app = express();
const mongoose = require("mongoose");
const authRouter = require("./routes/authRouter");

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/auth",authRouter);

const start = async () => {
    try {
        await mongoose.connect("mongodb+srv://polliandfibi:fibi2017@cluster0.fxfgjgt.mongodb.net/first_auth_roles?retryWrites=true&w=majority")
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}
start();