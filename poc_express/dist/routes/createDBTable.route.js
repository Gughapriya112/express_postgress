"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDBTableRoute = void 0;
var tslib_1 = require("tslib");
var express_1 = require("express");
var createDBTable_controller_1 = require("../controller/createDBTable.controller");
var body_parser_1 = tslib_1.__importDefault(require("body-parser"));
var jsonParser = body_parser_1.default.json();
var CreateDBTableRoute = /** @class */ (function () {
    function CreateDBTableRoute() {
        this.router = (0, express_1.Router)();
        this.path = '/createDBTable';
        this.create = new createDBTable_controller_1.CreateDBTableController();
        this.initializeRoutes();
    }
    CreateDBTableRoute.prototype.initializeRoutes = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                this.router.post("".concat(this.path), jsonParser, this.create.createDBTable);
                return [2 /*return*/];
            });
        });
    };
    return CreateDBTableRoute;
}());
exports.CreateDBTableRoute = CreateDBTableRoute;
//# sourceMappingURL=createDBTable.route.js.map