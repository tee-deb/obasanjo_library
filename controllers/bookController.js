const asyncHandler = require("express-async-handler");
const Book = require("../models/bookModel");



const getBooks = asyncHandler(async(req, res) => {
    const books = await Book.find();
    res.status(200).json(books);

});

const getBook = asyncHandler(async(req, res) => {
    const book = await Book.findById(req.params.id);
    if(!book) {
        res.status(404);
        throw new Error("Book Not Found");
    }
    res.status(200).json(book);

});

const saveBook = asyncHandler(async(req, res) => {
    console.log("The request body is :", req.body);
    const { name, author, quantity } = req.body;
    if (!name || !author || !quantity) {
        res.status(400);
        throw new Error('All fields are mandatory');
    }
    const book = await Book.create({
        name,
        author,
        quantity,

    });
    res.status(201).json(book);

});

const deleteBook = asyncHandler(async(req, res) => {
    const book = await Book.findById(req.params.id);
    if(!book) {
        res.status(404);
        throw new Error("Cannot Find Book");
        await Book.remove();
    }
    res.status(200).json(book);

});

module.exports = {

     getBook,
     getBooks, 
     saveBook, 
     deleteBook
};