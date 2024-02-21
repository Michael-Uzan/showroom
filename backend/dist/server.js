"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const logger = require("./services/logger.service");
const dotenv = require("dotenv");
const boardRoutes = require("./api/board/board.routes");
const cors = require("cors");
dotenv.config();
const app = (0, express_1.default)();
app.use(express_1.default.json({ limit: "50mb" }));
app.use(express_1.default.static("public"));
app.use(cors({
    origin: ["http://127.0.0.1:5173", "http://localhost:5173"],
}));
app.use("/api/boards", boardRoutes);
app.listen(process.env.BACK_PORT, () => {
    logger.info(`server running : http://${process.env.BACK_HOST}:${process.env.BACK_PORT}`);
});
//# sourceMappingURL=server.js.map