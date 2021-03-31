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