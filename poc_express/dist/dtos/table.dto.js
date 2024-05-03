"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableDto = void 0;
var tslib_1 = require("tslib");
var class_validator_1 = require("class-validator");
var TableDto = /** @class */ (function () {
    function TableDto() {
    }
    tslib_1.__decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsNotEmpty)(),
        tslib_1.__metadata("design:type", String)
    ], TableDto.prototype, "tableName", void 0);
    return TableDto;
}());
exports.TableDto = TableDto;
//# sourceMappingURL=table.dto.js.map