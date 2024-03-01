const express = require('express');
const connectDb = require("./config/dbConnection");
const dotenv = require('dotenv').config();
const errorHandler = require("./middleware/errorHandler");

connectDb();
const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/books", require("./routes/bookRoutes"));
app.use("/api/admins", require("./routes/adminRoutes"));
app.use(errorHandler);

app.listen(port, () => {

    console.log(`server running on port ${port}`);
});
