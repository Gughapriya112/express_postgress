"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDBTable = void 0;
var tslib_1 = require("tslib");
var typedi_1 = require("typedi");
var db_1 = tslib_1.__importDefault(require("../db/db"));
var CreateDBTable = /** @class */ (function () {
    function CreateDBTable() {
    }
    CreateDBTable.prototype.createDBTable = function (reqdata) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var isDbQuery, isDBResponse, createDbQuery, createDbResponse, isSchemaQuery, isSchemaResponse, createSchemaQuery, createSchemaResponse, fields_1, createTableQuery, table, e_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 10, , 11]);
                        isDbQuery = "SELECT datname FROM pg_catalog.pg_database WHERE datname = '".concat(reqdata.dbName, "'");
                        return [4 /*yield*/, (0, db_1.default)(null, isDbQuery)];
                    case 1:
                        isDBResponse = _a.sent();
                        if (!(isDBResponse.rowCount === 0)) return [3 /*break*/, 3];
                        createDbQuery = "CREATE DATABASE \"".concat(reqdata.dbName, "\";");
                        return [4 /*yield*/, (0, db_1.default)('', createDbQuery)];
                    case 2:
                        createDbResponse = _a.sent();
                        console.log("created database ".concat(reqdata.dbName, "."));
                        return [3 /*break*/, 4];
                    case 3:
                        console.log("".concat(reqdata.dbName, " database already exists."));
                        _a.label = 4;
                    case 4:
                        isSchemaQuery = "select exists (select * from pg_catalog.pg_namespace where nspname = '".concat(reqdata.schemaName, "');");
                        return [4 /*yield*/, (0, db_1.default)(reqdata.dbName, isSchemaQuery)];
                    case 5:
                        isSchemaResponse = _a.sent();
                        if (!(isSchemaResponse.rowCount === 0)) return [3 /*break*/, 7];
                        createSchemaQuery = "CREATE SCHEMA \"".concat(reqdata.schemaName, "\";");
                        return [4 /*yield*/, (0, db_1.default)(reqdata.dbName, createSchemaQuery)];
                    case 6:
                        createSchemaResponse = _a.sent();
                        console.log("created schema ".concat(reqdata.schemaName, "."));
                        return [3 /*break*/, 8];
                    case 7:
                        console.log("".concat(reqdata.schemaName, " Schema already exists."));
                        _a.label = 8;
                    case 8:
                        fields_1 = '';
                        reqdata.columnTypes.map(function (column) {
                            var temp = '';
                            var prim = '';
                            if (column.isNullable == true) {
                                temp = "NULL";
                            }
                            else if (column.isPrimary == true && column.isNullable == false) {
                                temp = "PRIMARY KEY NOT NULL";
                            }
                            else {
                                temp = "NOT NULL";
                            }
                            if (column.precision) {
                                prim = "(".concat(column.precision, ")");
                            }
                            fields_1 += column.columnName + ' ' + column.dataType + prim + ' ' + temp + ',';
                        });
                        fields_1 = fields_1.substring(0, fields_1.length - 1);
                        createTableQuery = "CREATE TABLE   \"".concat(reqdata.schemaName, "\".").concat(reqdata.tableName, "(").concat(fields_1, ");");
                        return [4 /*yield*/, (0, db_1.default)(reqdata.dbName, createTableQuery)];
                    case 9:
                        table = _a.sent();
                        if (table.rowCount == null) {
                            console.log("created table ".concat(reqdata.tableName, "."));
                        }
                        else {
                            console.log("".concat(reqdata.tableName, " table already exists."));
                        }
                        return [2 /*return*/, "Created"];
                    case 10:
                        e_1 = _a.sent();
                        console.log(e_1);
                        return [3 /*break*/, 11];
                    case 11: return [2 /*return*/];
                }
            });
        });
    };
    CreateDBTable = tslib_1.__decorate([
        (0, typedi_1.Service)()
    ], CreateDBTable);
    return CreateDBTable;
}());
exports.CreateDBTable = CreateDBTable;
//# sourceMappingURL=createDBTable.service.js.map