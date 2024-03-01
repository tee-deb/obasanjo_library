const express = require("express");
const router = express.Router();
const { getBook, getBooks, saveBook, deleteBook } = require("../controllers/bookController");



router.route('/').get(getBooks);

router.route('/:id').get(getBook);

router.route('/').post(saveBook);

router.route('/:id').delete(deleteBook);



module.exports = router;