const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const postRoutes = require('./routes/post_routes');
const contactRoutes = require('./routes/contact-routes')
const createPath = require('./helpers/create-path');

const app = express();

app.set('view engine', 'ejs');

const PORT = 3000;
const db = 'mongodb+srv://PolliShell:fibi2017@cluster0.7ooe4hd.mongodb.net/node-blog?retryWrites=true&w=majority';

mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('Подключено к MongoDB');
        // Дальнейшие операции с базой данных
    })
    .catch(error => console.error('Ошибка подключения к MongoDB:', error));

app.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`listening port ${PORT}`);
});

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.use(express.urlencoded({extended: false}));

app.use(express.static('styles'));
app.use(methodOverride('_method'));

app.get('/', (req, res) => {
    const title = 'Home';
    res.render(createPath('index'), {title});
});

app.use(postRoutes);

app.use(contactRoutes);

app.use((req, res) => {
    const title = 'Error Page';
    res
        .status(404)
        .render(createPath('error'), {title});
});