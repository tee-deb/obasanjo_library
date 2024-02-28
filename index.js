const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { connectDB } = require("./config/db");
const adminRouter = require('./routes/admin.routes');


const app = express();
app.use(express.json());
app.use(morgan("dev"));
dotenv.config();




const port = process.env.PORT || 5000


app.listen(port, () => {
    console.log(`Server Is Running On Port: ${port}`);
})