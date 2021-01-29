const router = require("express").Router();
const axios = require("axios");
const Book = require("../models/book");

// API Key environment variable setup
require('dotenv').config();
const apiKey = process.env.API_KEY;

// search for books with the Google Books API
router.get("/search", (req, res) => {
    console.log(req.query.q);
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${req.query.q}&maxResults=20&key=${apiKey}`)
        .then(books => {
            res.json(books.data.items);
        })
});

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
