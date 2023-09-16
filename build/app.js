"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
var express_1 = __importDefault(require("express"));
require("express-async-errors");
var body_parser_1 = require("body-parser");
var dotenv = __importStar(require("dotenv"));
var current_userRoute_1 = require("./routes/current-userRoute");
var signinRoute_1 = require("./routes/signinRoute");
var signoutRoute_1 = require("./routes/signoutRoute");
var signupRoute_1 = require("./routes/signupRoute");
var userRoute_1 = require("./routes/userRoute");
var error_handler_1 = require("./middlewares/error-handler");
var not_found_error_1 = require("./errors/not-found-error");
var database_1 = __importDefault(require("./config/database"));
var app = (0, express_1.default)();
app.use((0, body_parser_1.json)());
app.use((0, body_parser_1.urlencoded)({ extended: true }));
app.use(current_userRoute_1.currentUserRouter);
app.use(signinRoute_1.signinRouter);
app.use(signoutRoute_1.signoutRouter);
app.use(signupRoute_1.signupRouter);
app.use(userRoute_1.userRouter);
app.all('*', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        throw new not_found_error_1.NotFoundError();
    });
}); });
app.use(error_handler_1.errorHandler);
dotenv.config();
database_1.default
    .sync()
    .then(function () { return console.log("Base de données connectée !!"); })
    .catch(function (error) { return console.log(error); });
app.listen(process.env.APP_PORT, function () {
    console.log("Server Gateway listen on port : ".concat(process.env.APP_PORT, " !!"));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0RBQXFEO0FBQ3JELGdDQUE4QjtBQUM5QiwyQ0FBK0M7QUFDL0MsNkNBQWlDO0FBRWpDLGdFQUErRDtBQUMvRCxvREFBb0Q7QUFDcEQsc0RBQXNEO0FBQ3RELG9EQUFvRDtBQUNwRCxnREFBZ0Q7QUFFaEQsNkRBQTJEO0FBQzNELDREQUF5RDtBQUV6RCwrREFBeUM7QUFFekMsSUFBTSxHQUFHLEdBQUcsSUFBQSxpQkFBTyxHQUFFLENBQUM7QUFDdEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFBLGtCQUFJLEdBQUUsQ0FBQyxDQUFDO0FBRWhCLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBQSx3QkFBVSxFQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztBQUV4QyxHQUFHLENBQUMsR0FBRyxDQUFDLHFDQUFpQixDQUFDLENBQUM7QUFDM0IsR0FBRyxDQUFDLEdBQUcsQ0FBQywwQkFBWSxDQUFDLENBQUM7QUFDdEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyw0QkFBYSxDQUFDLENBQUM7QUFDdkIsR0FBRyxDQUFDLEdBQUcsQ0FBQywwQkFBWSxDQUFDLENBQUM7QUFDdEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxzQkFBVSxDQUFDLENBQUM7QUFFcEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsVUFBTyxHQUFZLEVBQUUsR0FBYTs7UUFDM0MsTUFBTSxJQUFJLCtCQUFhLEVBQUUsQ0FBQzs7S0FDN0IsQ0FBQyxDQUFDO0FBRUgsR0FBRyxDQUFDLEdBQUcsQ0FBQyw0QkFBWSxDQUFDLENBQUM7QUFFdEIsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRWhCLGtCQUFRO0tBQ0gsSUFBSSxFQUFFO0tBQ04sSUFBSSxDQUFDLGNBQU0sT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLDhCQUE4QixDQUFDLEVBQTNDLENBQTJDLENBQUM7S0FDdkQsS0FBSyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDO0FBRXhDLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUU7SUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQ0FBbUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLFFBQUssQ0FBQyxDQUFDO0FBQzlFLENBQUMsQ0FBQyxDQUFDIn0=