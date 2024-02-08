const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const productSchema = new mongoose.Schema({
    title: {
       type:String,
        required:true
    },
    price:{
        type:String,
        required: true
    },
    quantity:{
        type:String,
        required: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true,
    }
})

const Product = mongoose.model("Product", productSchema);

module.exports = {
    Product
};