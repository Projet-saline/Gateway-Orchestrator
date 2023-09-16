"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signinRouter = void 0;
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
exports.signinRouter = router;
router.post("/api/users/signin", function (req, res) {
    res.send("Hi there!");
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmluUm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcm91dGVzL3NpZ25pblJvdXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLG9EQUE4QjtBQUU5QixJQUFNLE1BQU0sR0FBRyxpQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBTWIsOEJBQVk7QUFKL0IsTUFBTSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxVQUFDLEdBQUcsRUFBRSxHQUFHO0lBQ3RDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDMUIsQ0FBQyxDQUFDLENBQUMifQ==