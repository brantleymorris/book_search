const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/books"
// selects funciton based on method
router.route("/")
    .get(booksController.findAll)
    .post(booksController.create);

// Matches with "/api/books/:id"
// selects function based on method
router.route("/:id")
    .get(booksController.findById)
    .delete(booksController.remove);

module.exports = router;