// this is where I will need to make the api call
// need to get string from req.body

// I don't remember how to do this
// installed node-fetch to allow for fetch from node.js
// Calvin note: lets use axios. I think its so much easier
const axios = require("axios");

module.exports = {
    find: async (req, res) => {
        try {
            const title = req.query.title;
            const url = "https://www.googleapis.com/books/v1/volumes?q=" + title;
            console.log(url);
            const result = await axios.get(url);
            console.log(result.data);
            return res.json(result.data);
        } catch (err) {
            console.log(err)
        };
    }
};