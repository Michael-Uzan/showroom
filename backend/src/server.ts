import express from "express"

const logger = require("./services/logger.service")
const dotenv = require("dotenv")
const boardRoutes = require("./api/board/board.routes")
const cors = require("cors")

dotenv.config()
const app = express()
app.use(express.json({ limit: "50mb" }))
app.use(express.static("public"))
app.use(
  cors({
    origin: ["http://127.0.0.1:5173", "http://localhost:5173"],
  })
)

app.use("/api/boards", boardRoutes)

app.listen(process.env.BACK_PORT, () => {
  logger.info(
    `server running : http://${process.env.BACK_HOST}:${process.env.BACK_PORT}`
  )
})
