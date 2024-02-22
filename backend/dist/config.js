const dotenv = require("dotenv");
dotenv.config();
module.exports = {
    dbUrl: `mongodb+srv://looply:${process.env.DB_PASSWORD}@cluster0.vdh6cgt.mongodb.net/?retryWrites=true&w=majority`,
    dbName: process.env.DB_NAME,
    boardCollectionName: process.env.BOARD_COLLECTION_NAME,
    userActivityCollectionName: process.env.USER_ACTIVITY_COLLECTION_NAME,
};
//# sourceMappingURL=config.js.map