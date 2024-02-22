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
const userActivityService = require("./userActivity.service");
const logger = require("../../services/logger.service");
function addUserActivity(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const userActivity = req.body;
            const addedUserActivity = yield userActivityService.save(userActivity);
            res.send(addedUserActivity);
        }
        catch (err) {
            logger.error("Failed to add user activity", err);
            res.status(500).send({ err: "Failed to add user activity" });
        }
    });
}
module.exports = {
    addUserActivity,
};
//# sourceMappingURL=userActivity.controller.js.map