var express = require("express");
var router = express.Router();
const {
  getAllUsers,
  getAllPhotosForAUser,
  createUser
} = require("../db/queries/usersQueries.js");

/* GET users listing. */
router.get("/", getAllUsers);
router.get("/:id/photos", getAllPhotosForAUser);
router.post("/", createUser)

module.exports = router;
