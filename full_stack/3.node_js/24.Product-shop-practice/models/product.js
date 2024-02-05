const mongoose = require("mongoose");

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
    token:{
        type: String,
        default: ""
    }
})

const Product = mongoose.model("Product", productSchema);

module.exports = {
    Product
};