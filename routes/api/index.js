const router = require("express").Router();
const googleRoutes = require("./google");
const bookRoutes = require ("./books");

router.use("/google", googleRoutes);
router.use("/books", bookRoutes);

module.exports = router;