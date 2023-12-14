const express = require('express');
const books = require("./public/books.json");
const moment = require("moment");
const fs = require("fs");
const cors = require("cors");
const app = express();

const corsMiddleware = cors();

// app.use(corsMiddleware);
app.use(cors());
app.use(async (req, res, next) => {
    const {method, url} = req;
    const date = moment().format("DD-MM-YYYY_hh:mm:ss");
    await fs.appendFile("./public/server.log", `\n${method} ${url} ${date}`, (err) => {
        if (err) {
            console.error(err);
        }
        next();
    });
});


app.get("/products", async (req, res) => {
    res.json([]);
})

app.get("/books", async (req, res) => {
    res.json(books);
})

app.use((req,res)=>{
    res.status().json({
        message:"Not found"
    })
})

app.listen(4000, () => console.log('Server running'));
