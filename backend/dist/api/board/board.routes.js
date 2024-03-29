"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const { getBoards } = require("./board.controller");
const router = express_1.default.Router();
router.get("/", getBoards);
module.exports = router;
//# sourceMappingURL=board.routes.js.map