const { Product } = require("../models/product");

const HttpError = require("../helpers/HttpError"); // Import the HttpError function

const add = async (req, res) => {
    try {
        const { title, price, quantity } = req.body;
        const { _id: owner } = req.user;

        const product = new Product({ title, price, quantity, owner });
        const savedProduct = await product.save();

        res.status(201).json({ id: savedProduct._id, message: "Product added successfully" });
    } catch (error) {
        console.error("Error adding product:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// const add = async (req, res) => {
//     try {
//         const {_id: owner} = req.user;
//         // const { title, price, quantity } = req.body;
//         // const product = new Product({ title, price, quantity,owner });
//         // const savedProduct = await product.save();
//
//         const result = await Product.create({...req.body, owner});
//         // Instead of sending the entire saved product, you might want to send a simplified response.
//         // For example, you can send only the product ID and a success message.
//         res.status(201).json(result);
//     } catch (error) {
//         console.error("Error adding product:", error);
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// };



const getAll = async (req, res) => {
    const result = await Product.find({});
    res.status(200).json(result); // Corrected status code to 200 for success
};

const getById = async (req, res) => {
    const { id } = req.params;
    const result = await Product.findById(id);
    if (!result) {
        throw new HttpError(404, "Not found"); // Instantiate HttpError with 'new'
    }
    res.status(200).json(result); // Corrected status code to 200 for success
};

const updateById = async (req, res) => {
    const { id } = req.params;
    const result = await Product.findByIdAndUpdate(id, req.body, { new: true });
    if (!result) {
        throw new HttpError(404, "Not found");
    }
    res.status(200).json(result); // Corrected status code to 200 for success
};

module.exports = {
    add,
    getAll,
    getById,
    updateById
};
