import axios from "axios";

export default {

    // api route for external api,
    // need to find this info
    googleSearch: function(str) {
        const queryString = str.split(" ").join("+");

        return axios.get(`/api/google?title=${queryString}`);
        
        // moved this to the backend
        // return axios.get(
        //     "https://www.googleapis.com/books/v1/volume?q=" + queryString + "&key=AIzaSyCSN4MrPL6cftiYJv9BiP4KOk4kbbFoCws"
            // need to write function to pass in the query as a string with spaces replaced with + or %20
            // add :keyes&key=AIzaSyCSN4MrPL6cftiYJv9BiP4KOk4kbbFoCws
            // this may have to be moved to the back end and passes forward
        // );
    },

    // api route to get saved books
    getBooks: function() {
        return axios.get("/api/books");
    },

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