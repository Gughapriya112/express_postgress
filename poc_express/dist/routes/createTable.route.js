"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTableRoute = void 0;
var tslib_1 = require("tslib");
var express_1 = require("express");
var createTable_controller_1 = require("../controller/createTable.controller");
var body_parser_1 = tslib_1.__importDefault(require("body-parser"));
var jsonParser = body_parser_1.default.json();
var CreateTableRoute = /** @class */ (function () {
    function CreateTableRoute() {
        this.router = (0, express_1.Router)();
        this.path = '/createTable';
        this.create = new createTable_controller_1.CreateTableController();
        this.initializeRoutes();
    }
    CreateTableRoute.prototype.initializeRoutes = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                this.router.post("".concat(this.path), jsonParser, this.create.createTable);
                return [2 /*return*/];
            });
        });
    };
    return CreateTableRoute;
}());
exports.CreateTableRoute = CreateTableRoute;
//# sourceMappingURL=createTable.route.js.map