"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthMiddleware = void 0;
var tslib_1 = require("tslib");
var jsonwebtoken_1 = require("jsonwebtoken");
var config_1 = require("@/config");
var user_entity_1 = require("@/entities/user.entity");
var http_exception_1 = require("@/exceptions/http-exception");
var getAuthorization = function (req) {
    var coockie = req.cookies['Authorization'];
    if (coockie)
        return coockie;
    var header = req.header('Authorization');
    if (header)
        return header.split('Bearer ')[1];
    return null;
};
var AuthMiddleware = function (req, res, next) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var Authorization, id, findUser, error_1;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 5, , 6]);
                Authorization = getAuthorization(req);
                if (!Authorization) return [3 /*break*/, 3];
                return [4 /*yield*/, (0, jsonwebtoken_1.verify)(Authorization, config_1.SECRET_KEY)];
            case 1:
                id = (_a.sent()).id;
                return [4 /*yield*/, user_entity_1.UserEntity.findOne(id, { select: ['id', 'email', 'password'] })];
            case 2:
                findUser = _a.sent();
                if (findUser) {
                    req.user = findUser;
                    next();
                }
                else {
                    next(new http_exception_1.HttpException(401, 'Wrong authentication token'));
                }
                return [3 /*break*/, 4];
            case 3:
                next(new http_exception_1.HttpException(404, 'Authentication token missing'));
                _a.label = 4;
            case 4: return [3 /*break*/, 6];
            case 5:
                error_1 = _a.sent();
                next(new http_exception_1.HttpException(401, 'Wrong authentication token'));
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.AuthMiddleware = AuthMiddleware;
//# sourceMappingURL=auth.middleware.js.map