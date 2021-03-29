const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// TODO - update to match data from GoogleBooks API
//      - I think this is everything I need
const bookSchema = new Schema({
    title: {type: String, required: true},
    author: {type: String, required: true},
    description: {type: String, required: true},
    date: {type: Date, default: Date.now}
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;