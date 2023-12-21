const express = require("express");
const app = express();
const mongoose = require("mongoose");
const taskRoutes = require("./routes/task-routes");
const bodyParser = require('body-parser');
const path = require('path');

const DB_HOST = "mongodb+srv://PolliShell:fibi2017@cluster0.1p8tflp.mongodb.net/task-manager?retryWrites=true&w=majority";

mongoose.connect(DB_HOST)
    .then(()=>app.listen(5000))
    .catch(error => {
        console.log(error.message);
        process.exit(1);
    });

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'ejs-views'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(taskRoutes);

