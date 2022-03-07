"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const user_db_1 = require("../db/user.db");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const environment_constant_1 = require("../constants/environment.constant");
const login = (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(422).json({
            message: 'Either email or password is missing'
        });
    }
    const user = user_db_1.USERS.find((user) => user.email === email && user.password === password);
    if (!user) {
        return res.status(404).json({
            message: 'Email or password is wrong'
        });
    }
    const authToken = jsonwebtoken_1.default.sign({ userId: user.id }, environment_constant_1.APP_SECRET, { expiresIn: 60 * 60 * 24 * 7 });
    return res.json({
        auth_token: authToken,
        user
    });
};
exports.login = login;
//# sourceMappingURL=auth.controller.js.map