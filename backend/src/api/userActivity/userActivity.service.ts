import { IUserActivity } from "../../interfaces/IUserActivity"

const config = require("../../config")
const dbService = require("../../services/db.service")
const logger = require("../../services/logger.service")

async function save(userActivity: IUserActivity) {
  try {
    const collection = await dbService.getCollection(
      config.userActivityCollectionName
    )
    const { insertedId, acknowledged } = await collection.insertOne(
      userActivity
    )
    if (acknowledged) {
      logger.info(
        `User Activity: ${userActivity.event_type}, at ${userActivity.page}`
      )
      return insertedId
    } else {
      throw new Error("write concern was disabled")
    }
  } catch (err) {
    logger.error("cannot add activity", err)
    throw err
  }
}

module.exports = {
  save,
}
