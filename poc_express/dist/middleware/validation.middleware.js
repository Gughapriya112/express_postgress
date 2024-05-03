"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationMiddleware = void 0;
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var http_exception_1 = require("../exceptions/http-exception");
/**
 * @name ValidationMiddleware
 * @description Allows use of decorator and non-decorator based validation
 * @param type dto
 * @param skipMissingProperties When skipping missing properties
 * @param whitelist Even if your object is an instance of a validation class it can contain additional properties that are not defined
 * @param forbidNonWhitelisted If you would rather to have an error thrown when any non-whitelisted properties are present
 */
var ValidationMiddleware = function (type, skipMissingProperties, whitelist, forbidNonWhitelisted) {
    if (skipMissingProperties === void 0) { skipMissingProperties = false; }
    if (whitelist === void 0) { whitelist = false; }
    if (forbidNonWhitelisted === void 0) { forbidNonWhitelisted = false; }
    return function (req, res, next) {
        var dto = (0, class_transformer_1.plainToInstance)(type, req.body);
        console.log(dto, "dto...");
        (0, class_validator_1.validateOrReject)(dto, { skipMissingProperties: skipMissingProperties, whitelist: whitelist, forbidNonWhitelisted: forbidNonWhitelisted })
            .then(function () {
            req.body = dto;
            next();
        })
            .catch(function (errors) {
            var message = errors.map(function (error) { return Object.values(error.constraints); }).join(', ');
            next(new http_exception_1.HttpException(400, message));
        });
    };
};
exports.ValidationMiddleware = ValidationMiddleware;
//# sourceMappingURL=validation.middleware.js.map