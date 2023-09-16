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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_typescript_1 = require("sequelize-typescript");
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, sequelize_typescript_1.Column)({
            primaryKey: true,
            type: sequelize_typescript_1.DataType.UUID,
            autoIncrement: true,
            allowNull: false,
            defaultValue: sequelize_typescript_1.DataType.UUIDV4
        }),
        __metadata("design:type", Number)
    ], User.prototype, "id", void 0);
    __decorate([
        (0, sequelize_typescript_1.Column)({
            type: sequelize_typescript_1.DataType.STRING,
            allowNull: false
        }),
        __metadata("design:type", String)
    ], User.prototype, "username", void 0);
    __decorate([
        (0, sequelize_typescript_1.Column)({
            type: sequelize_typescript_1.DataType.STRING,
            allowNull: false
        }),
        __metadata("design:type", String)
    ], User.prototype, "email", void 0);
    __decorate([
        (0, sequelize_typescript_1.Column)({
            type: sequelize_typescript_1.DataType.STRING,
            allowNull: false
        }),
        __metadata("design:type", String)
    ], User.prototype, "password", void 0);
    __decorate([
        (0, sequelize_typescript_1.Column)({
            type: sequelize_typescript_1.DataType.STRING,
            allowNull: false
        }),
        __metadata("design:type", String)
    ], User.prototype, "role", void 0);
    __decorate([
        (0, sequelize_typescript_1.Column)({
            type: sequelize_typescript_1.DataType.BOOLEAN,
            allowNull: false
        }),
        __metadata("design:type", Boolean)
    ], User.prototype, "is_premium", void 0);
    __decorate([
        (0, sequelize_typescript_1.Column)({
            type: sequelize_typescript_1.DataType.BOOLEAN,
            allowNull: false
        }),
        __metadata("design:type", Boolean)
    ], User.prototype, "is_admin", void 0);
    __decorate([
        sequelize_typescript_1.CreatedAt,
        __metadata("design:type", Date)
    ], User.prototype, "created_at", void 0);
    __decorate([
        sequelize_typescript_1.UpdatedAt,
        __metadata("design:type", Date)
    ], User.prototype, "updated_at", void 0);
    User = __decorate([
        (0, sequelize_typescript_1.Table)({
            timestamps: true,
            tableName: 'users',
            modelName: 'User'
        })
    ], User);
    return User;
}(sequelize_typescript_1.Model));
exports.default = User;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvdXNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZEQUE0RjtBQVE1RjtJQUFtQix3QkFBSztJQUF4Qjs7SUFtREEsQ0FBQztJQTNDRztRQVBDLElBQUEsNkJBQU0sRUFBQztZQUNKLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLElBQUksRUFBRSwrQkFBUSxDQUFDLElBQUk7WUFDbkIsYUFBYSxFQUFFLElBQUk7WUFDbkIsU0FBUyxFQUFFLEtBQUs7WUFDaEIsWUFBWSxFQUFFLCtCQUFRLENBQUMsTUFBTTtTQUNoQyxDQUFDOztvQ0FDVTtJQU1aO1FBSkMsSUFBQSw2QkFBTSxFQUFDO1lBQ0osSUFBSSxFQUFFLCtCQUFRLENBQUMsTUFBTTtZQUNyQixTQUFTLEVBQUUsS0FBSztTQUNuQixDQUFDOzswQ0FDZ0I7SUFNbEI7UUFKQyxJQUFBLDZCQUFNLEVBQUM7WUFDSixJQUFJLEVBQUUsK0JBQVEsQ0FBQyxNQUFNO1lBQ3JCLFNBQVMsRUFBRSxLQUFLO1NBQ25CLENBQUM7O3VDQUNhO0lBTWY7UUFKQyxJQUFBLDZCQUFNLEVBQUM7WUFDSixJQUFJLEVBQUUsK0JBQVEsQ0FBQyxNQUFNO1lBQ3JCLFNBQVMsRUFBRSxLQUFLO1NBQ25CLENBQUM7OzBDQUNnQjtJQU1sQjtRQUpDLElBQUEsNkJBQU0sRUFBQztZQUNKLElBQUksRUFBRSwrQkFBUSxDQUFDLE1BQU07WUFDckIsU0FBUyxFQUFFLEtBQUs7U0FDbkIsQ0FBQzs7c0NBQ1k7SUFNZDtRQUpDLElBQUEsNkJBQU0sRUFBQztZQUNKLElBQUksRUFBRSwrQkFBUSxDQUFDLE9BQU87WUFDdEIsU0FBUyxFQUFFLEtBQUs7U0FDbkIsQ0FBQzs7NENBQ21CO0lBTXJCO1FBSkMsSUFBQSw2QkFBTSxFQUFDO1lBQ0osSUFBSSxFQUFFLCtCQUFRLENBQUMsT0FBTztZQUN0QixTQUFTLEVBQUUsS0FBSztTQUNuQixDQUFDOzswQ0FDaUI7SUFHbkI7UUFEQyxnQ0FBUztrQ0FDRyxJQUFJOzRDQUFDO0lBR2xCO1FBREMsZ0NBQVM7a0NBQ0csSUFBSTs0Q0FBQztJQWxEaEIsSUFBSTtRQU5ULElBQUEsNEJBQUssRUFBQztZQUNILFVBQVUsRUFBRSxJQUFJO1lBQ2hCLFNBQVMsRUFBRSxPQUFPO1lBQ2xCLFNBQVMsRUFBRSxNQUFNO1NBQ3BCLENBQUM7T0FFSSxJQUFJLENBbURUO0lBQUQsV0FBQztDQUFBLEFBbkRELENBQW1CLDRCQUFLLEdBbUR2QjtBQUVELGtCQUFlLElBQUksQ0FBQyJ9