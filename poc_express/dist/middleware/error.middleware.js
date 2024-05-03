"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorMiddleware = void 0;
var logger_1 = require("@/utils/logger");
var ErrorMiddleware = function (error, req, res, next) {
    try {
        var status_1 = error.status || 500;
        var message = error.message || 'Something went wrong';
        logger_1.logger.error("[".concat(req.method, "] ").concat(req.path, " >> StatusCode:: ").concat(status_1, ", Message:: ").concat(message));
        res.status(status_1).json({ message: message });
    }
    catch (error) {
        next(error);
    }
};
exports.ErrorMiddleware = ErrorMiddleware;
//# sourceMappingURL=error.middleware.js.map