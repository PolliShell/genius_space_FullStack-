const mongoose = require("mongoose");

const URI = "mongodb+srv://polliandfibi:fibi2017@cluster0.zpebdj8.mongodb.net/tasks-manager?retryWrites=true&w=majority";

mongoose.connect(URI).then(()=>{
    console.log("Connected");
}).catch(()=>{
    console.error(e);
});

