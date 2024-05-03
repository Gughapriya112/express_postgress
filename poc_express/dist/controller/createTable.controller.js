"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTableController = void 0;
var tslib_1 = require("tslib");
var createTable_service_1 = require("../services/createTable.service");
var typedi_1 = require("typedi");
var CreateTableController = /** @class */ (function () {
    function CreateTableController() {
        var _this = this;
        this.create = typedi_1.Container.get(createTable_service_1.CreateTable);
        this.createTable = function (req, res, next) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var temp, tableData, e_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        temp = req;
                        console.log("temp", req.body);
                        return [4 /*yield*/, this.create.createTable(req.body)];
                    case 1:
                        tableData = _a.sent();
                        res.setHeader('Set-Cookie', ['Authorization=; Max-age=0']);
                        res.status(200).json({ data: tableData, message: 'tableData' });
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        console.log("error", e_1);
                        next(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
    }
    return CreateTableController;
}());
exports.CreateTableController = CreateTableController;
//# sourceMappingURL=createTable.controller.js.map