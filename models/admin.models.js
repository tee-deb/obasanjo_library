const mongoose = require('mongoose');


const adminSchema = new mongoose.Schema({

    bookName: {

        type: String,
        required: true,
        unique: true,
    },

    bookAuthor: {

        type: String,
        required: true,
    },

    bookQuantity: {

        type: Number,
        required: true,
        unique: true,
    }





});