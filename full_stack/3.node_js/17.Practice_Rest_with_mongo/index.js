const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const ejs = require('ejs');
const todoRoutes = require('./routes/todos');

const DB_HOST = "mongodb+srv://PolliShell:fibi2017@cluster0.32exsin.mongodb.net/todos";
const PORT = 3000;

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));

// Указываем путь к статическим файлам
app.use(express.static(path.join(__dirname, 'public')));

// Добавляем middleware для обработки маршрутов из todoRoutes
app.use(todoRoutes);

mongoose.connect(DB_HOST)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch(error => {
        console.log(error.message);
        process.exit(1);
    });
