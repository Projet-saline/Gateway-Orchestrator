"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundError = void 0;
var custom_error_1 = require("./custom-error");
var NotFoundError = /** @class */ (function (_super) {
    __extends(NotFoundError, _super);
    function NotFoundError() {
        var _this = _super.call(this, 'Route non trouvée') || this;
        _this.statusCode = 404;
        Object.setPrototypeOf(_this, NotFoundError.prototype);
        return _this;
    }
    NotFoundError.prototype.serializeErrors = function () {
        return [{ message: 'Introuvable' }];
    };
    return NotFoundError;
}(custom_error_1.CustomError));
exports.NotFoundError = NotFoundError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90LWZvdW5kLWVycm9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2Vycm9ycy9ub3QtZm91bmQtZXJyb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQTZDO0FBRTdDO0lBQW1DLGlDQUFXO0lBRzVDO1FBQUEsWUFDRSxrQkFBTSxtQkFBbUIsQ0FBQyxTQUczQjtRQU5DLGdCQUFVLEdBQUcsR0FBRyxDQUFDO1FBS2pCLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSSxFQUFFLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQzs7SUFDdkQsQ0FBQztJQUVELHVDQUFlLEdBQWY7UUFDRSxPQUFPLENBQUMsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQUFDLEFBWkQsQ0FBbUMsMEJBQVcsR0FZN0M7QUFaWSxzQ0FBYSJ9