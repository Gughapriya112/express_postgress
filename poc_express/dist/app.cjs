"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var config_1 = tslib_1.__importDefault(require("./db/config"));
// import { Request, Response, NextFunction } from "express";
var express_1 = tslib_1.__importDefault(require("express"));
// let createError = require('http-errors');
// let express = require('express');
var path = require('path');
// let cookieParser = require('cookie-parser');
// let logger = require('morgan');
var app = (0, express_1.default)();
var port = 2008;
// app.get('*', (req: any, res: any) => {
//   res.send('Hello World!')
// })
app.get("/", function (req, res) {
    res.sendFile(path.resolve(__dirname, "index.html"), function (err) {
        if (err) {
            res.status(404).send(err);
        }
        else {
            res.status(500).send(err);
        }
    });
});
app.listen(port, function () {
    console.log("Example app listening on port ".concat(port));
});
config_1.default.initialize().then(function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    return tslib_1.__generator(this, function (_a) {
        app.listen(port, function () {
            console.log("Server is running on http://localhost:" + port);
        });
        console.log("Data Source has been initialized!");
        return [2 /*return*/];
    });
}); })
    .catch(function (error) { return console.log(error); });
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
// app.use(logger('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express_1.default.static(path.join(__dirname, 'public')));
// // catch 404 and forward to error handler
// app.use(function(req: any, res: any, next: (arg0: any) => void) {
//   next(createError(404));
// });
// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});
module.exports = app;
//# sourceMappingURL=app.js.map