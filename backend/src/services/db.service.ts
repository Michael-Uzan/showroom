import { MongoClient, Db, Collection } from "mongodb"

const logger = require("./logger.service")
const config = require("../config")

let dbConn: Db = null

export async function getCollection(
  collectionName: string
): Promise<Collection> {
  try {
    const db = await connect()
    const collection = db.collection(collectionName)
    return collection
  } catch (err) {
    logger.error("Failed to get Mongo collection", err)
    throw err
  }
}

async function connect(): Promise<Db> {
  if (dbConn) {
    return dbConn
  }

  try {
    const client: MongoClient = await MongoClient.connect(config.dbUrl)
    const db: Db = client.db(config.dbName)
    dbConn = db
    return db
  } catch (err) {
    logger.error("Cannot Connect to DB", err)
    throw err
  }
}
