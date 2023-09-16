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
exports.deleteOne = exports.updateOne = exports.createOne = exports.getOne = exports.getAll = void 0;
// import { Request, Response} from "express";
var user_1 = __importDefault(require("../models/user"));
console.log(user_1.default);
var getAll = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var allUsers, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!user_1.default) {
                    return [2 /*return*/, res.status(500).json({ message: "Le modèle User n'est pas défini" })];
                }
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, user_1.default.findAll()];
            case 2:
                allUsers = _a.sent();
                return [2 /*return*/, res.status(200).json({ message: "Liste des utilisateurs", data: allUsers })];
            case 3:
                error_1 = _a.sent();
                console.error(error_1);
                return [2 /*return*/, res.status(500).json({ message: "Une erreur est survenue" })];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.getAll = getAll;
var getOne = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, oneUser;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                return [4 /*yield*/, user_1.default.findByPk(id)];
            case 1:
                oneUser = _a.sent();
                return [2 /*return*/, res
                        .status(200)
                        .json({ message: "Utilisateur", data: oneUser })];
        }
    });
}); };
exports.getOne = getOne;
var createOne = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var createdUser;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, user_1.default.create(req.body)];
            case 1:
                createdUser = _a.sent();
                return [2 /*return*/, res
                        .status(201)
                        .json({ message: "Utilisateur céé avec succès !", data: createdUser })];
        }
    });
}); };
exports.createOne = createOne;
var updateOne = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, updatedUser;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                return [4 /*yield*/, user_1.default.update(req.body, { where: { id: id } })];
            case 1:
                updatedUser = _a.sent();
                return [2 /*return*/, res
                        .status(200)
                        .json({ message: "Utilisateur modifié avec succès !", data: updatedUser })];
        }
    });
}); };
exports.updateOne = updateOne;
var deleteOne = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var deletedUser;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, user_1.default.destroy({ where: { id: req.params.id } })];
            case 1:
                deletedUser = _a.sent();
                return [2 /*return*/, res
                        .status(200)
                        .json({ message: "Utilisateur supprimé avec succès !", data: deletedUser })];
        }
    });
}); };
exports.deleteOne = deleteOne;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlckNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29udHJvbGxlcnMvdXNlckNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsOENBQThDO0FBQzlDLHdEQUFrQztBQUVsQyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQUksQ0FBQyxDQUFDO0FBRWxCLElBQU0sTUFBTSxHQUFvQixVQUFPLEdBQUcsRUFBRSxHQUFHOzs7OztnQkFDM0MsSUFBSSxDQUFDLGNBQUksRUFBRTtvQkFDUCxzQkFBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxDQUFDLEVBQUM7aUJBQy9FOzs7O2dCQUdvQixxQkFBTSxjQUFJLENBQUMsT0FBTyxFQUFFLEVBQUE7O2dCQUEvQixRQUFRLEdBQUcsU0FBb0I7Z0JBQ3JDLHNCQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFDOzs7Z0JBRW5GLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBSyxDQUFDLENBQUM7Z0JBQ3JCLHNCQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLENBQUMsRUFBQzs7OztLQUUzRSxDQUFDO0FBbUNPLHdCQUFNO0FBakNmLElBQU0sTUFBTSxHQUFvQixVQUFPLEdBQUcsRUFBRSxHQUFHOzs7OztnQkFDcEMsRUFBRSxHQUFLLEdBQUcsQ0FBQyxNQUFNLEdBQWYsQ0FBZ0I7Z0JBQ1QscUJBQU0sY0FBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsRUFBQTs7Z0JBQWpDLE9BQU8sR0FBRyxTQUF1QjtnQkFDdkMsc0JBQU8sR0FBRzt5QkFDTCxNQUFNLENBQUMsR0FBRyxDQUFDO3lCQUNYLElBQUksQ0FBQyxFQUFDLE9BQU8sRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBQyxDQUFDLEVBQUM7OztLQUN0RCxDQUFDO0FBMkJlLHdCQUFNO0FBekJ2QixJQUFNLFNBQVMsR0FBb0IsVUFBTyxHQUFHLEVBQUUsR0FBRzs7OztvQkFDMUIscUJBQU0sY0FBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUE7O2dCQUF6QyxXQUFXLEdBQUcsU0FBMkI7Z0JBQy9DLHNCQUFPLEdBQUc7eUJBQ0wsTUFBTSxDQUFDLEdBQUcsQ0FBQzt5QkFDWCxJQUFJLENBQUMsRUFBQyxPQUFPLEVBQUUsK0JBQStCLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBQyxDQUFDLEVBQUM7OztLQUM1RSxDQUFDO0FBb0J1Qiw4QkFBUztBQWxCbEMsSUFBTSxTQUFTLEdBQW9CLFVBQU8sR0FBRyxFQUFFLEdBQUc7Ozs7O2dCQUN2QyxFQUFFLEdBQUssR0FBRyxDQUFDLE1BQU0sR0FBZixDQUFnQjtnQkFDTCxxQkFBTSxjQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBQyxLQUFLLEVBQUUsRUFBQyxFQUFFLElBQUEsRUFBQyxFQUFDLENBQUMsRUFBQTs7Z0JBQXhELFdBQVcsR0FBRyxTQUEwQztnQkFDOUQsc0JBQU8sR0FBRzt5QkFDTCxNQUFNLENBQUMsR0FBRyxDQUFDO3lCQUNYLElBQUksQ0FBQyxFQUFDLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFDLENBQUMsRUFBQzs7O0tBQ2hGLENBQUM7QUFZa0MsOEJBQVM7QUFWN0MsSUFBTSxTQUFTLEdBQW9CLFVBQU8sR0FBRyxFQUFFLEdBQUc7Ozs7b0JBSTFCLHFCQUFNLGNBQUksQ0FBQyxPQUFPLENBQUMsRUFBQyxLQUFLLEVBQUUsRUFBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUMsRUFBQyxDQUFDLEVBQUE7O2dCQUE5RCxXQUFXLEdBQUcsU0FBZ0Q7Z0JBQ3BFLHNCQUFPLEdBQUc7eUJBQ0wsTUFBTSxDQUFDLEdBQUcsQ0FBQzt5QkFDWCxJQUFJLENBQUMsRUFBQyxPQUFPLEVBQUUsb0NBQW9DLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBQyxDQUFDLEVBQUM7OztLQUNqRixDQUFDO0FBRTZDLDhCQUFTIn0=