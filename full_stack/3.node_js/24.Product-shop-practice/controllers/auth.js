const {User}= require("../models/user");
const HttpError = require("../helpers/HttpError");
const jwt= require("jsonwebtoken");
const accessTokenSecret = "secret";
const bcrypt = require("bcryptjs");


const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });

        if (!user) {
            const error = new HttpError(401, "Неправильное имя пользователя или пароль");
            return res.status(error.status).json({ error: error.message });
        }

        const comparePassword = bcrypt.compareSync(password, user.password);

        if (!comparePassword) {
            const error = new HttpError(401, "Неправильное имя пользователя или пароль");
            return res.status(error.status).json({ error: error.message });
        }

        const accessToken = jwt.sign({ username: user.username }, accessTokenSecret);

        res.json({
            accessToken
        });
    } catch (error) {
        console.error("Ошибка входа:", error);
        res.status(500).json({ error: "Внутренняя ошибка сервера" });
    }
};


const register = async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await User.findOne({ username });

        if (user) {
            throw new HttpError(409, "Email already in use");
        }

        const hashPassword = bcrypt.hashSync(password, 10);

        const newUser = await User.create({ username, password: hashPassword });

        res.status(201).json(newUser);
    } catch (error) {
        console.error("Registration error:", error);
        res.status(error.status || 500).json({ error: error.message || "Internal Server Error" });
    }
};
module.exports = {
    login,
    register };