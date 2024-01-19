const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require('bcrypt');
const User = require('./models/userModel');
const checkAuth = require("./middleware/checkAuth")
const checkAdmin = require("./middleware/checkAdmin");
require("./config/db");

const app = express();
const port = 7000;

app.use(bodyParser.json());

app.post('/register', async (req, res) => {
    try {
        const {firstName, lastName, email, password: pass, role} = req.body;

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(pass, salt);

        const user = await User.create({
            firstName,
            lastName,
            email,
            password: hash,
            role,
        })

        const {password, ...userData} = user._doc;

        return res.status(201).json(userData);
    } catch (err) {
        console.log(err);
        res.status(500).json({message: err.message});
    }
})

app.post('/login', async (req, res) => {
    try {
        const {email, password: pass} = req.body;
        const user = await User.findOne({email});

        if (!user) {
            return res.status(404).json({
                message: 'User not found'
            });
        }

        const isValid = await bcrypt.compare(pass, user.password);

        if (!isValid) {
            return res.status(404).json({
                message: 'Invalid password or email'
            });
        }
        const {password, ...userData} = user._doc;


        res.status(201).json(userData);
    } catch (err) {
        console.log(err);
        res.status(500).json({message: err.message});
    }
})

app.get("/books", checkAuth, checkAdmin, async (req, res) => {
    return res.send("All books");
});

app.listen(port, () => {
    console.log("Server running");
})