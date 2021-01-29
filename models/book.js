const mongoose = require("mongoose");

// Create Project schema
const BookSchema = new mongoose.Schema ({
    title: {
        type: String,
        trim: true,
    },
    authors: {
        type: Array,
        trim: true,
    },
    description: {
        type: String,
        trim: true
    },
    image: {
        type: String,
        trim: true
    },
    link: {
        type: String,
        trim: true
    }
});

module.exports = mongoose.model("Book", BookSchema);