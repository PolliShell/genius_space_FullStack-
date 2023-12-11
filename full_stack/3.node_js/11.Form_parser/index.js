const express = require('express');  // Используйте 'express' вместо 'express'
const path = require("path");
const app = express();  // Создайте объект приложения express

const PORT = 3000;

app.use(express.urlencoded({ extended: false }));

const createPath = (page) => path.resolve( `${page}.html`);

app.use(express.urlencoded({ extended: false }));
app.get('/login', (req, res) => {  // Поменяйте местами req и res
    res.sendFile(createPath('index'));  // Используйте 'sendFile' вместо 'sendfile', и передайте строку 'index' вместо неопределенной переменной index
});

app.post('/login', (req, res, next) => {
    const { email, password } = req.body;
    console.log({ email, password });
});

app.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`Listening on port ${PORT}`);  // Исправьте строку вывода порта
});
