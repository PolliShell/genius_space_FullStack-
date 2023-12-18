const {Schema,model}=require("mongoose");

const productSchema = Schema({
    name:String,
    price:Number,
    location:String
});

const Product = model("product",productSchema);

module.exports=Product;