import { IUserActivity } from "../../interfaces/IUserActivity"

import { Request, Response } from "express"

const userActivityService = require("./userActivity.service")
const logger = require("../../services/logger.service")

async function addUserActivity(req: Request, res: Response) {
  try {
    const userActivity: IUserActivity = req.body
    const addedUserActivity = await userActivityService.save(userActivity)
    res.send(addedUserActivity)
  } catch (err) {
    logger.error("Failed to add user activity", err)
    res.status(500).send({ err: "Failed to add user activity" })
  }
}

module.exports = {
  addUserActivity,
}
