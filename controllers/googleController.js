// this is where I will need to make the api call
// need to get string from req.body

// I don't remember how to do this
// installed node-fetch to allow for fetch from node.js
const fetch = require("node-fetch");

module.exports = {
    find: async (req, res) => {
        try {
            const queryString = req.body.queryString;
            const url = "https://www.googleapis.com/books/v1/volume?q=" + queryString + "&key=AIzaSyCSN4MrPL6cftiYJv9BiP4KOk4kbbFoCws"

            const result = await fetch(url);
            return res.json(result);
        } catch (err) {
            console.log(err)
        };
    }
};