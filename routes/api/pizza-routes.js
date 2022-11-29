const router = require("express").Router();

// set GET all and POST at /api/pizzas
router.route("/").get().post();

// set up GET one, PUT, and DELETE at /api/pizzas/:id
router.route("/:id").get().put().delete();

module.exports = router;

