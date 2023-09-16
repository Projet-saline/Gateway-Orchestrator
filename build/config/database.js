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
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_typescript_1 = require("sequelize-typescript");
var dotenv = __importStar(require("dotenv"));
dotenv.config();
// Config base de données distante :
// const sequelize = new Sequelize({
//     database: process.env.DB_NAME,
//     dialect: 'mysql',
//     username: process.env.DB_USER,
//     password: process.env.DB_PASS,
//     host: process.env.DB_HOST,
//     port: Number(process.env.DB_PORT) || 3306,
//     models: [__dirname + '/models']
// });
// console.log({
//     database: process.env.DB_NAME,
//     username: process.env.DB_USER,
//     password: process.env.DB_PASS,
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT
// })
// Config base de données locale :
var sequelize = new sequelize_typescript_1.Sequelize({
    database: process.env.DB_LOCAL_NAME,
    dialect: 'mysql',
    username: process.env.DB_LOCAL_USER,
    password: process.env.DB_LOCAL_PASS,
    host: process.env.DB_LOCAL_HOST,
    port: Number(process.env.DB_LOCAL_PORT) || 8889,
    models: [__dirname + '/models']
});
// console.log({
//     database: process.env.DB_LOCAL_NAME,
//     username: process.env.DB_LOCAL_USER,
//     password: process.env.DB_LOCAL_PASS,
//     host: process.env.DB_LOCAL_HOST,
//     port: process.env.DB_LOCAL_PORT
// })
exports.default = sequelize;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YWJhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29uZmlnL2RhdGFiYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2REFBaUQ7QUFDakQsNkNBQWlDO0FBRWpDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUVoQixvQ0FBb0M7QUFDcEMsb0NBQW9DO0FBQ3BDLHFDQUFxQztBQUNyQyx3QkFBd0I7QUFDeEIscUNBQXFDO0FBQ3JDLHFDQUFxQztBQUNyQyxpQ0FBaUM7QUFDakMsaURBQWlEO0FBQ2pELHNDQUFzQztBQUN0QyxNQUFNO0FBRU4sZ0JBQWdCO0FBQ2hCLHFDQUFxQztBQUNyQyxxQ0FBcUM7QUFDckMscUNBQXFDO0FBQ3JDLGlDQUFpQztBQUNqQyxnQ0FBZ0M7QUFDaEMsS0FBSztBQUVMLGtDQUFrQztBQUNsQyxJQUFNLFNBQVMsR0FBRyxJQUFJLGdDQUFTLENBQUM7SUFDNUIsUUFBUSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYTtJQUNuQyxPQUFPLEVBQUUsT0FBTztJQUNoQixRQUFRLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhO0lBQ25DLFFBQVEsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWE7SUFDbkMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYTtJQUMvQixJQUFJLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLElBQUksSUFBSTtJQUMvQyxNQUFNLEVBQUUsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0NBQ2xDLENBQUMsQ0FBQztBQUVILGdCQUFnQjtBQUNoQiwyQ0FBMkM7QUFDM0MsMkNBQTJDO0FBQzNDLDJDQUEyQztBQUMzQyx1Q0FBdUM7QUFDdkMsc0NBQXNDO0FBQ3RDLEtBQUs7QUFFTCxrQkFBZSxTQUFTLENBQUMifQ==