const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// need to figure out what other data will need to be entered
const bookSchema = new Schema({
    title: {type: String, required: true},
    author: {type: String, required: true},
    body: {type: String, required: true},
    date: {type: Date, default: Date.now}
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;