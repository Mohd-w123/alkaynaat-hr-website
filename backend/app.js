const { config } = require('dotenv');
config();
const express = require('express');
const cors = require('cors');
const AllRoutes = require('./routes/allRoutes');
const app = express();

// middlewares
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

app.use("/api", AllRoutes);


module.exports = app;