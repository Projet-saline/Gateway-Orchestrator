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
exports.RequestValidationError = void 0;
var custom_error_1 = require("./custom-error");
var RequestValidationError = /** @class */ (function (_super) {
    __extends(RequestValidationError, _super);
    function RequestValidationError(errors) {
        var _this = _super.call(this, 'Erreur de validation de la requête') || this;
        _this.errors = errors;
        _this.statusCode = 400;
        Object.setPrototypeOf(_this, RequestValidationError.prototype);
        return _this;
    }
    RequestValidationError.prototype.serializeErrors = function () {
        return this.errors.map(function (err) {
            if (err.type === 'field') {
                return { message: err.msg, field: err.path };
            }
            return { message: err.msg };
        });
    };
    return RequestValidationError;
}(custom_error_1.CustomError));
exports.RequestValidationError = RequestValidationError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC12YWxpZGF0aW9uLWVycm9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2Vycm9ycy9yZXF1ZXN0LXZhbGlkYXRpb24tZXJyb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsK0NBQTZDO0FBRTdDO0lBQTRDLDBDQUFXO0lBR25ELGdDQUFtQixNQUF5QjtRQUE1QyxZQUNJLGtCQUFNLG9DQUFvQyxDQUFDLFNBRzlDO1FBSmtCLFlBQU0sR0FBTixNQUFNLENBQW1CO1FBRjVDLGdCQUFVLEdBQUcsR0FBRyxDQUFDO1FBS2IsTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUFJLEVBQUUsc0JBQXNCLENBQUMsU0FBUyxDQUFDLENBQUM7O0lBQ2xFLENBQUM7SUFFRCxnREFBZSxHQUFmO1FBQ0ksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFDLEdBQUc7WUFDdkIsSUFBSSxHQUFHLENBQUMsSUFBSSxLQUFLLE9BQU8sRUFBRTtnQkFDdEIsT0FBTyxFQUFFLE9BQU8sRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDaEQ7WUFDRCxPQUFPLEVBQUUsT0FBTyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNoQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDTCw2QkFBQztBQUFELENBQUMsQUFqQkQsQ0FBNEMsMEJBQVcsR0FpQnREO0FBakJZLHdEQUFzQiJ9