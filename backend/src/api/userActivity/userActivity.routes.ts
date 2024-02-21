import express from "express"

const { addUserActivity } = require("./userActivity.controller")

const router = express.Router()

router.post("/", addUserActivity)

module.exports = router
