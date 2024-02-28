const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = ('body-parser');
const dotenv = require('dotenv');



const port = process.env.PORT || 5000



const app = express();
app.use(express.json());
app.use(morgan("dev"));
dotenv.config();

app.get('/', (req, res) => {
res.send('This Is A Library API');
});

app.post('/admin', (req, res) => {
    res.send('this is another library api');
});


app.listen(port, () => {
    console.log(`Server Is Running On Port: ${port}`);
})