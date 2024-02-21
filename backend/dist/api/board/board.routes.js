const { getBoards } = require("./board.controller");
const express = require("express");
const router = express.Router();
router.get("/", getBoards);
module.exports = router;
//# sourceMappingURL=board.routes.js.map