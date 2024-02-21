import express from "express"

const { getBoards } = require("./board.controller")

const router = express.Router()

router.get("/", getBoards)

module.exports = router
