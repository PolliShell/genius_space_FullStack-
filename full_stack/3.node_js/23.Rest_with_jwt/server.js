const mongoose = require("mongoose");

const app = require('./app')

const DB_HOST = "mongodb+srv://polliandfibi:fibi2017@cluster0.qiz7kvy.mongodb.net/books-reader?retryWrites=true&w=majority";

const PORT = 3000;
mongoose.set('strictQuery', true);

mongoose.connect(DB_HOST)
  .then(() => {
    app.listen(PORT)
  })
  .catch(error => {
    console.log(error.message);
    process.exit(1);
  })