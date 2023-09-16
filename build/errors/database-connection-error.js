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
exports.DatabaseConnectionError = void 0;
var custom_error_1 = require("./custom-error");
var DatabaseConnectionError = /** @class */ (function (_super) {
    __extends(DatabaseConnectionError, _super);
    function DatabaseConnectionError() {
        var _this = _super.call(this, 'Erreur de connexion à la base de données') || this;
        _this.statusCode = 500;
        _this.reason = 'Erreur de connexion à la base de données';
        Object.setPrototypeOf(_this, DatabaseConnectionError.prototype);
        return _this;
    }
    DatabaseConnectionError.prototype.serializeErrors = function () {
        return [{ message: this.reason }];
    };
    return DatabaseConnectionError;
}(custom_error_1.CustomError));
exports.DatabaseConnectionError = DatabaseConnectionError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YWJhc2UtY29ubmVjdGlvbi1lcnJvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lcnJvcnMvZGF0YWJhc2UtY29ubmVjdGlvbi1lcnJvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBNkM7QUFDN0M7SUFBNkMsMkNBQVc7SUFJcEQ7UUFBQSxZQUNJLGtCQUFNLDBDQUEwQyxDQUFDLFNBR3BEO1FBUEQsZ0JBQVUsR0FBRyxHQUFHLENBQUM7UUFDakIsWUFBTSxHQUFHLDBDQUEwQyxDQUFDO1FBS2hELE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSSxFQUFFLHVCQUF1QixDQUFDLFNBQVMsQ0FBQyxDQUFDOztJQUNuRSxDQUFDO0lBRUQsaURBQWUsR0FBZjtRQUNJLE9BQU8sQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBQ0wsOEJBQUM7QUFBRCxDQUFDLEFBYkQsQ0FBNkMsMEJBQVcsR0FhdkQ7QUFiWSwwREFBdUIifQ==