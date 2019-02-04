var express = require("express");
var router = express.Router();
const {getAllComments, createComment} = require('../db/queries/commentQueries.js')

router.get("/", getAllComments)
router.post("/", createComment)

module.exports = router;
