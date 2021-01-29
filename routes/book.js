const router = require("express").Router();
const Book = require("../models/book");


require('dotenv').config();
const apiKey = process.env.API_KEY;


// get - return all saved books 
router.get("/api/books", (req, res) => {
    Book.find({})
        .then(books => {
            res.json(books);
        })
});


// post - save a new book to the db
router.post("/api/books", (req, res) => {
    Book.create(req.body)
        .then(() => {
            res.end();
        })
});


// delete - delete a book from the db
router.delete("/api/books/:id", (req, res) => {
    Book.findByIdAndDelete(req.params.id)
        .then(() => {
            res.end();
        })
});


module.exports = router;
