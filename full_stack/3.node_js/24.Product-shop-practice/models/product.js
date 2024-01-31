const { Schema, model } = require("mongoose");

const productSchema = Schema({
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
    }
})

const Product = model("product",productSchema);

module.exports=Product;
