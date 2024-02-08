const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const fs = require("fs/promises");
const { v4 } = require("uuid");

const app = express();
app.use(cors());
app.use(express.json());

const tempDir = path.join(__dirname, "temp");
const productsDir = path.join(__dirname, "public", "products");

const multerConfig = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, tempDir);
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
    limits: {
        fileSize: 2048
    }
});

const upload = multer({
    storage: multerConfig
});

const products = [];
app.post("/api/products", upload.single("image"), async (req, res) => {
    const { path: tempUpload, originalname } = req.file;
    const resultUpload = path.join(productsDir, originalname);

    try {
        await fs.rename(tempUpload, resultUpload);
        const image = path.join("public", "products", originalname);
        const newProduct = {
            name: req.body.name,
            id: v4(),
            image
        };
        products.push(newProduct);

        // Отправляем ответ об успешном создании продукта
        res.status(201).json({ message: "Product created successfully", product: newProduct });
    } catch (error) {
        await fs.unlink(tempUpload);
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
});

const { PORT = 3000 } = process.env;
app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});
