const {User}= require("../models/user")
const HttpError = require("../helpers/HttpError");
const jwt= require("jsonwebtoken");
const {accessTokenSecret} = process.env;
const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });

        if (!user) {
            const error = new HttpError(401, "Wrong username or password");
            return res.status(error.status).json({ error: error.message });
        }

        const accessToken = jwt.sign({ username: user.name }, accessTokenSecret);

        res.json({
            accessToken
        });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { login };