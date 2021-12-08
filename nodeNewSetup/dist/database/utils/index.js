"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnection = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const logger_1 = require("../../helper/logger");
async function dbConnection() {
    try {
        mongoose_1.default.set("debug", true);
        await mongoose_1.default.connect(process.env.DB_URL || "mongodb://localhost:27017/StudentDb");
        (0, logger_1.logger)("database connected  process chatbot");
    }
    catch (error) {
        (0, logger_1.logger)(`database error:${error}`);
        console.log(error);
        throw new Error(error.message);
    }
}
exports.dbConnection = dbConnection;
module.exports.close = async () => {
    await mongoose_1.default.disconnect();
    console.log("Database disconnected");
};
//# sourceMappingURL=index.js.map