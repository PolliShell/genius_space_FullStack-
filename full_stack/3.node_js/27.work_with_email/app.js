const nodemailer = require('nodemailer');

// require('dotenv').config();

const config = {
    host: 'smtp.meta.ua',
    port: 465,
    secure: true,
    auth: {
        user: 'polinasheleheda@meta.ua',
        pass: "Fibi2017",
    },
};

const transporter = nodemailer.createTransport(config);
const emailOptions = {
    from: 'polinasheleheda@meta.ua',
    to: 'gleb147258369@gmail.com',
    subject: 'Nodemailer test',
    text: 'Привіт. Ми тестуємо надсилання листів!',
};

transporter
    .sendMail(emailOptions)
    .then(info => console.log(info))
    .catch(err => console.log(err));
