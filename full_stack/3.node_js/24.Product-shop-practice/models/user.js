const {Schema, model} = require("mongoose");

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        minlength: 6,
        required: true,
    },
    // token: {
    //     type: String,
    //     default: ""
    // }
}, {versionKey: false, timestamps: true});

const User = model("user", userSchema);

module.exports = {
    User,
}