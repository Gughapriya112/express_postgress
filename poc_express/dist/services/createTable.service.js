"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTable = void 0;
var tslib_1 = require("tslib");
var typedi_1 = require("typedi");
var pg_1 = require("pg");
var CreateTable = /** @class */ (function () {
    function CreateTable() {
    }
    CreateTable.prototype.createTable = function (reqdata) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var client, res, e_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 6, , 7]);
                        client = new pg_1.Client({
                            host: "localhost",
                            user: "postgres",
                            password: "password",
                            port: 5432,
                        });
                        return [4 /*yield*/, client.connect()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, client.query("SELECT datname FROM pg_catalog.pg_database WHERE datname = '".concat(reqdata.tableName, "'"))];
                    case 2:
                        res = _a.sent();
                        if (!(res.rowCount === 0)) return [3 /*break*/, 4];
                        console.log("".concat(reqdata.tableName, " database not found, creating it."));
                        return [4 /*yield*/, client.query("CREATE DATABASE \"".concat(reqdata.tableName, "\";"))];
                    case 3:
                        _a.sent();
                        console.log("created database ".concat(reqdata.tableName, "."));
                        return [3 /*break*/, 5];
                    case 4:
                        console.log("".concat(reqdata.tableName, " database already exists."));
                        _a.label = 5;
                    case 5: return [2 /*return*/, null];
                    case 6:
                        e_1 = _a.sent();
                        console.log(e_1);
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    CreateTable.prototype.createConn = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var client, e_2;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        client = new pg_1.Client({
                            host: "localhost",
                            user: "postgres",
                            password: "password",
                            port: 5432,
                        });
                        return [4 /*yield*/, client.connect()];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        e_2 = _a.sent();
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CreateTable = tslib_1.__decorate([
        (0, typedi_1.Service)()
    ], CreateTable);
    return CreateTable;
}());
exports.CreateTable = CreateTable;
//# sourceMappingURL=createTable.service.js.map