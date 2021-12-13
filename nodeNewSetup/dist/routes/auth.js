"use strict";
"use-strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authController_1 = __importDefault(require("../controller/authController"));
const authController = new authController_1.default();
const router = express_1.default.Router();
router.post("/login", (...args) => authController.login(...args));
module.exports = { router, basePath: "/api/v1/auth" };
//# sourceMappingURL=auth.js.map