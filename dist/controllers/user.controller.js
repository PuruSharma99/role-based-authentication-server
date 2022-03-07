"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.me = void 0;
const me = (req, res) => {
    return res.json({
        user: req.user
    });
};
exports.me = me;
//# sourceMappingURL=user.controller.js.map