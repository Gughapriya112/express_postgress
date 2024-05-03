"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var pg_1 = tslib_1.__importDefault(require("pg"));
var Client = pg_1.default.Client;
var client = new Client();
function dbConfig(dbName, query) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var client, res;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    client = new Client({
                        host: "localhost",
                        user: "postgres",
                        password: "password",
                        port: 5432,
                        database: dbName ? dbName : ''
                    });
                    return [4 /*yield*/, client.connect()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, client.query(query)];
                case 2:
                    res = _a.sent();
                    client.end();
                    return [2 /*return*/, res];
            }
        });
    });
}
exports.default = dbConfig;
//# sourceMappingURL=db.js.map