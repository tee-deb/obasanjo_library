const asyncHandler = require("express-async-handler");
const Book = require("../models/bookModel");

const getBooks = asyncHandler(async (req, res) => {
  const books = await Book.find();
  res.status(200).json(books);
});

const getBook = asyncHandler(async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (!book) {
    res.status(404);
    throw new Error("Book Not Found");
  }
  res.status(200).json(book);
});


const saveBook = async(req,res)=> {
    try {
        const { name, author, quantity } = req.body;

        const newBook = await Book({
            name,
            author,
            quantity,
        })

        await newBook.save();

        return res.status(200).json({ message: 'Books Created'})

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Books Not Created'})

    }
 }

 const deleteBook = async (req, res) => {
  try {
      const bookId = req.params.id;
      const book = await Book.findById(bookId);

      if (!book) {
          return res.status(404).json({ message: 'Book not found' });
      }

      await book.delete();

      return res.status(200).json({ message: 'Book deleted successfully' });
  } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Internal Server Error' });
  }
};


module.exports = {
  getBook,
  getBooks,
  saveBook,
  deleteBook,
};
