"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
var tslib_1 = require("tslib");
require("reflect-metadata");
var cookie_parser_1 = tslib_1.__importDefault(require("cookie-parser"));
var morgan_1 = tslib_1.__importDefault(require("morgan"));
var express_1 = tslib_1.__importDefault(require("express"));
var config_1 = tslib_1.__importDefault(require("./db/config"));
var body_parser_1 = tslib_1.__importDefault(require("body-parser"));
var helmet_1 = tslib_1.__importDefault(require("helmet"));
var stream_1 = tslib_1.__importDefault(require("stream"));
var cors_1 = tslib_1.__importDefault(require("cors"));
var hpp_1 = tslib_1.__importDefault(require("hpp"));
var compression_1 = tslib_1.__importDefault(require("compression"));
var App = /** @class */ (function () {
    function App(routes) {
        this.app = (0, express_1.default)();
        this.port = 3010;
        // this.connectToDatabase();
        this.initializeRoutes(routes);
        this.initializeMiddlewares();
    }
    App.prototype.listen = function () {
        var _this = this;
        this.app.listen(this.port, function () {
            console.log("=================================");
            console.log(" --> \uD83D\uDE80 App listening on the port ".concat(_this.port));
            console.log("=================================");
        });
    };
    App.prototype.getServer = function () {
        return this.app;
    };
    App.prototype.connectToDatabase = function () {
        var _this = this;
        config_1.default.initialize().then(function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                console.log("Data Source has been initialized!");
                return [2 /*return*/];
            });
        }); })
            .catch(function (error) { return console.log(error); });
    };
    App.prototype.initializeRoutes = function (routes) {
        var _this = this;
        routes.forEach(function (route) {
            _this.app.use('/', route.router);
        });
    };
    App.prototype.initializeMiddlewares = function () {
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use(body_parser_1.default.json());
        this.app.use(body_parser_1.default.urlencoded({ extended: true }));
        this.app.use((0, cookie_parser_1.default)());
        this.app.use((0, morgan_1.default)("dev", { stream: stream_1.default }));
        this.app.use((0, cors_1.default)({ origin: "*", credentials: true }));
        this.app.use((0, hpp_1.default)());
        this.app.use((0, helmet_1.default)());
        this.app.use((0, compression_1.default)());
    };
    return App;
}());
exports.App = App;
//# sourceMappingURL=app.js.map