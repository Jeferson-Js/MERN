const router = require("express").Router();
const usersController = require("../controller/user.controller");

router.get("/", usersController.getUser);

module.exports = router;
