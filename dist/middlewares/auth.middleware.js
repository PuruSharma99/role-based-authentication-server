"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const environment_constant_1 = require("../constants/environment.constant");
const user_db_1 = require("../db/user.db");
const authMiddleware = (req, res, next) => {
    const authToken = req.headers["authorization"];
    if (!authToken) {
        return res.status(401).json({
            message: 'Auth token not sent'
        });
    }
    let userId;
    try {
        const decodedToken = jsonwebtoken_1.default.verify(String(authToken), environment_constant_1.APP_SECRET);
        userId = decodedToken.userId;
    }
    catch (error) {
        return res.status(401).json({
            message: 'Invalid auth token'
        });
    }
    const user = user_db_1.USERS.find((user) => user.id === userId);
    if (!user) {
        return res.status(401).json({
            message: 'User not found'
        });
    }
    req.user = user;
    next();
};
exports.authMiddleware = authMiddleware;
//# sourceMappingURL=auth.middleware.js.map