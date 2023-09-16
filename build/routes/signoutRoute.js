"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signoutRouter = void 0;
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
exports.signoutRouter = router;
router.post("/api/users/signout", function (req, res) {
    res.send("Hi there!");
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbm91dFJvdXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3JvdXRlcy9zaWdub3V0Um91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsb0RBQThCO0FBRTlCLElBQU0sTUFBTSxHQUFHLGlCQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7QUFNYiwrQkFBYTtBQUpoQyxNQUFNLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLFVBQUMsR0FBRyxFQUFFLEdBQUc7SUFDdkMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUMxQixDQUFDLENBQUMsQ0FBQyJ9