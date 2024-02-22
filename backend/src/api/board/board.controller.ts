import { IBoard } from "../../interfaces/IBoard"

import { Request, Response } from "express"

const boardService = require("./board.service")
const logger = require("../../services/logger.service")

async function getBoards(_req: Request, res: Response) {
  try {
    const boards: IBoard[] = await boardService.query()
    res.json(boards)
  } catch (err) {
    logger.error("Failed to get boards", err)
    res.status(500).send({ err: "Failed to get boards" })
  }
}

module.exports = {
  getBoards,
}
