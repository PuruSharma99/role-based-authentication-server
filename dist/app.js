"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const routes_1 = require("./routes");
const environment_constant_1 = require("./constants/environment.constant");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json({ limit: "50mb" }));
app.use((0, cors_1.default)());
app.use("/", routes_1.rootRouter);
app.listen(environment_constant_1.SERVER_PORT, () => console.log(`Running on port ${environment_constant_1.SERVER_PORT}`));
//# sourceMappingURL=app.js.map