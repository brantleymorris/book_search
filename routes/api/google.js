const router = require("express").Router();
const googleController = require("../../controllers/googleController");

router.route("/")
    .get(googleController.find);

module.exports = router;