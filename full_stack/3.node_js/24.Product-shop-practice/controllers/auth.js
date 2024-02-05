const {User} = require("../models/user");
const HttpError = require("../helpers/HttpError");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const {accessTokenSecret} = process.env;
const bcrypt = require("bcryptjs");


const login = async (req, res) => {
    const {username, password} = req.body;

    try {
        const user = await User.findOne({username});

        if (!user) {
            const error = new HttpError(401, "Неправильное имя пользователя или пароль");
            return res.status(error.status).json({error: error.message});
        }

        const comparePassword = bcrypt.compareSync(password, user.password);

        if (!comparePassword) {
            const error = new HttpError(401, "Неправильное имя пользователя или пароль");
            return res.status(error.status).json({error: error.message});
        }

        const token = jwt.sign({username: user.username}, accessTokenSecret, {expiresIn: "23h"});

        await User.findByIdAndUpdate(user._id, {token});
        res.json({
            token
        });
    } catch (error) {
        console.error("Ошибка входа:", error);
        res.status(500).json({error: "Внутренняя ошибка сервера"});
    }
};


const register = async (req, res) => {
    try {
        const {username, password} = req.body;

        const user = await User.findOne({username});

        if (user) {
            throw new HttpError(409, "Email already in use");
        }

        const hashPassword = bcrypt.hashSync(password, 10);

        const newUser = await User.create({username, password: hashPassword});

        res.status(201).json(newUser);
    } catch (error) {
        console.error("Registration error:", error);
        res.status(error.status || 500).json({error: error.message || "Internal Server Error"});
    }
};

const logout = async (req, res) => {
    const { username } = req.body;

    try {
        // Assuming you have a User model with a `findByUsername` method
        const user = await User.findOne({username});

        if (!user) {

            return res.status(404);
        }

        // Clear the token in the user document
        await User.findByIdAndUpdate(user._id, { token: null });

        res.json({
            message: "Вы успешно вышли из системы",
        });
    } catch (error) {
        console.error("Ошибка выхода:", error);
        res.status(500).json({ error: "Внутренняя ошибка сервера" });
    }
};

module.exports = {
    login,
    register,
    logout
};