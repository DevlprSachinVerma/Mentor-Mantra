const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

// middleware
const corsOptions = {
    origin: "http://localhost:3000" // frontend URI (ReactJS)
}
app.use(express.json());
app.use(cors(corsOptions));

// route
app.get("/", (req, res) => {
    res.status(201).json({message: "Connected to Backend!"});
});