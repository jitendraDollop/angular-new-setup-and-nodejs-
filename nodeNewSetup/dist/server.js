"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// eslint-disable @typescript-eslint/no-var-requires 
const dotenv_1 = require("dotenv");
const path_1 = __importDefault(require("path"));
const ENV_FILE = path_1.default.join(__dirname, ".env");
(0, dotenv_1.config)({ path: ENV_FILE });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const utils_1 = require("./database/utils");
const loggerMiddleware_1 = __importDefault(require("./middleware/loggerMiddleware"));
const useragent = require("express-useragent");
const cors = require("cors");
(0, utils_1.dbConnection)();
const app = (0, express_1.default)();
app.use(cors());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(useragent.express());
/**
 * ----------------------------- Start of V2 APIs ------------------------
 */
fs_1.default.readdirSync(path_1.default.resolve(__dirname, "routes")).forEach((file) => {
    if (file.includes(".js") && !file.includes(".js.")) {
        console.log(file);
        const { router, basePath } = require(`./routes/${file}`);
        app.use(basePath, loggerMiddleware_1.default, router);
    }
});
/**
 * ----------------------------- End of V2 APIs ------------------------
 */
app.get("/", (req, res) => {
    return res.status(200).send({ message: "Hello world" });
});
app.get("*", function (req, res) {
    return res.status(404).send({ message: "APIs route not found" });
});
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
    console.info(`Server listening on port ${PORT}`);
});
//This function need to have 4 parameters to work properly limitation from Express
app.use(function (err, req, res, next) {
    console.error(`Something went wrong ${err.message}, Errors : ${err}`);
    return err;
});
//# sourceMappingURL=server.js.map