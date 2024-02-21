const { addActivity } = require("./activity.controller");
const express = require("express");
const router = express.Router();
router.post("/", addActivity);
module.exports = router;
//# sourceMappingURL=activity.routes.js.map