"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("../helper/logger");
exports.default = (req, res, next) => {
    (0, logger_1.logger)(`DOMAIN=${process.env.DOMAIN}: ${req.method}: ${req.protocol}://${req.headers.host}${req.url}`);
    (0, logger_1.logger)(`req body: ${JSON.stringify(req.body)}`);
    (0, logger_1.logger)(`req query: ${JSON.stringify(req.query)}`);
    (0, logger_1.logger)(`req params: ${JSON.stringify(req.params)}`);
    next();
};
//# sourceMappingURL=loggerMiddleware.js.map