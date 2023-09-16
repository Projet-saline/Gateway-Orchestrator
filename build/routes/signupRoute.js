"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signupRouter = void 0;
var express_1 = __importDefault(require("express"));
var express_validator_1 = require("express-validator");
var request_validation_error_1 = require("../errors/request-validation-error");
var router = express_1.default.Router();
exports.signupRouter = router;
router.post('/api/users/signup', [
    (0, express_validator_1.body)('email')
        .isEmail()
        .withMessage('Votre email doit être valide'),
    (0, express_validator_1.body)('password')
        .trim()
        .isLength({ min: 4, max: 20 })
        .withMessage('Votre mot de passe doit être compris entre 4 et 20 caractères')
], function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var errors, email;
    return __generator(this, function (_a) {
        errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            throw new request_validation_error_1.RequestValidationError(errors.array());
        }
        email = req.body.email;
        console.log('Création d\'un utilisateur...');
        res.send({});
        return [2 /*return*/];
    });
}); });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbnVwUm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcm91dGVzL3NpZ251cFJvdXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9EQUFxRDtBQUNyRCx1REFBMkQ7QUFDM0QsK0VBQTRFO0FBRTVFLElBQU0sTUFBTSxHQUFHLGlCQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7QUFrQ2IsOEJBQVk7QUFoQy9CLE1BQU0sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUU7SUFDekIsSUFBQSx3QkFBSSxFQUFDLE9BQU8sQ0FBQztTQUNSLE9BQU8sRUFBRTtTQUNULFdBQVcsQ0FBQyw4QkFBOEIsQ0FBQztJQUNoRCxJQUFBLHdCQUFJLEVBQUMsVUFBVSxDQUFDO1NBQ1gsSUFBSSxFQUFFO1NBQ04sUUFBUSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUM7U0FDN0IsV0FBVyxDQUFDLCtEQUErRCxDQUFDO0NBQ3BGLEVBQ0QsVUFBTyxHQUFhLEVBQUUsR0FBYTs7O1FBQ3pCLE1BQU0sR0FBRyxJQUFBLG9DQUFnQixFQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRXJDLElBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDbEIsTUFBTSxJQUFJLGlEQUFzQixDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1NBQ3BEO1FBRU8sS0FBSyxHQUFLLEdBQUcsQ0FBQyxJQUFJLE1BQWIsQ0FBYztRQUUzQixPQUFPLENBQUMsR0FBRyxDQUFDLCtCQUErQixDQUFDLENBQUM7UUFDN0MsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQzs7O0tBQ2hCLENBQUMsQ0FBQyJ9