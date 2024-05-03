"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBTableDto = exports.columnDatatype = void 0;
var tslib_1 = require("tslib");
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var columnDatatype = /** @class */ (function () {
    function columnDatatype() {
    }
    tslib_1.__decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsNotEmpty)(),
        tslib_1.__metadata("design:type", String)
    ], columnDatatype.prototype, "columnName", void 0);
    tslib_1.__decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsNotEmpty)(),
        tslib_1.__metadata("design:type", String)
    ], columnDatatype.prototype, "dataType", void 0);
    tslib_1.__decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsNotEmpty)(),
        tslib_1.__metadata("design:type", Boolean)
    ], columnDatatype.prototype, "isNullable", void 0);
    tslib_1.__decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsNotEmpty)(),
        tslib_1.__metadata("design:type", Boolean)
    ], columnDatatype.prototype, "isPrimary", void 0);
    tslib_1.__decorate([
        (0, class_validator_1.IsNumber)(),
        tslib_1.__metadata("design:type", Number)
    ], columnDatatype.prototype, "precision", void 0);
    return columnDatatype;
}());
exports.columnDatatype = columnDatatype;
var DBTableDto = /** @class */ (function () {
    function DBTableDto() {
    }
    tslib_1.__decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsNotEmpty)(),
        tslib_1.__metadata("design:type", String)
    ], DBTableDto.prototype, "dbName", void 0);
    tslib_1.__decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsNotEmpty)(),
        tslib_1.__metadata("design:type", String)
    ], DBTableDto.prototype, "schemaName", void 0);
    tslib_1.__decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsNotEmpty)(),
        tslib_1.__metadata("design:type", String)
    ], DBTableDto.prototype, "tableName", void 0);
    tslib_1.__decorate([
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.ValidateNested)({ each: true }),
        (0, class_transformer_1.Type)(function () { return columnDatatype; }),
        tslib_1.__metadata("design:type", Array)
    ], DBTableDto.prototype, "columnTypes", void 0);
    return DBTableDto;
}());
exports.DBTableDto = DBTableDto;
//# sourceMappingURL=dbTable.dto.js.map