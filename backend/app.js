const express = require("express");
const app = express();

app.use(express.json());

// Route imoports
const product = require("./routes/ProductRoute");

app.use("/api/v2", product);

module.exports = app;
