"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
var custom_error_1 = require("../errors/custom-error");
var errorHandler = function (err, req, res, next) {
    if (err instanceof custom_error_1.CustomError) {
        return res.status(err.statusCode).send({ errors: err.serializeErrors() });
    }
    res.status(400).send({
        errors: [{ message: 'Quelque chose n\'a pas fonctionné' }]
    });
};
exports.errorHandler = errorHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3ItaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taWRkbGV3YXJlcy9lcnJvci1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHVEQUFxRDtBQUU5QyxJQUFNLFlBQVksR0FBRyxVQUN4QixHQUFVLEVBQ1YsR0FBWSxFQUNaLEdBQWEsRUFDYixJQUFtQjtJQUVuQixJQUFJLEdBQUcsWUFBWSwwQkFBVyxFQUFFO1FBQzVCLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLEdBQUcsQ0FBQyxlQUFlLEVBQUUsRUFBRSxDQUFDLENBQUM7S0FDN0U7SUFFRCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNqQixNQUFNLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxtQ0FBbUMsRUFBQyxDQUFDO0tBQzVELENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQTtBQWJZLFFBQUEsWUFBWSxnQkFheEIifQ==