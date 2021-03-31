import axios from "axios";

export default {

    // api route for external api,
    googleSearch: function(str) {
        const queryString = str.split(" ").join("+");
        return axios.get(`/api/google?title=${queryString}`);
    },

    // api route to get saved books
    getBooks: function() {
        return axios.get("/api/books");
    },

    // I don't think I need this one
    getBook: function(id) {
        return axios.get("/api/books/" + id);
    },

    // api route to save book
    saveBook: function (bookData) {
        return axios.post("/api/books", bookData);
    },

    // api route to delete book from saved list
    deleteBook: function(id) {
        return axios.delete("/api/books/" + id);
    }

};