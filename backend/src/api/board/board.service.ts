const config = require("../../config")

const dbService = require("../../services/db.service")
const logger = require("../../services/logger.service")

async function query() {
  try {
    const collection = await dbService.getCollection(config.boardCollectionName)
    const boards = await collection.find().toArray()
    logger.info("Client request boards")
    return boards
  } catch (err) {
    logger.error("cannot find boards", err)
    throw err
  }
}

module.exports = {
  query,
}
