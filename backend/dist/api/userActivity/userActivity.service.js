"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const config = require("../../config");
const dbService = require("../../services/db.service");
const logger = require("../../services/logger.service");
function save(userActivity) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const collection = yield dbService.getCollection(config.userActivityCollectionName);
            const { insertedId, acknowledged } = yield collection.insertOne(userActivity);
            if (acknowledged) {
                logger.info(`User Activity: ${userActivity.event_type}, at ${userActivity.page}`);
                return insertedId;
            }
            else {
                throw new Error("write concern was disabled");
            }
        }
        catch (err) {
            logger.error("cannot add activity", err);
            throw err;
        }
    });
}
module.exports = {
    save,
};
//# sourceMappingURL=userActivity.service.js.map