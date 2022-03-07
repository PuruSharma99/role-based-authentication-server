import {NextFunction} from "express";
import jwt from "jsonwebtoken";
import {APP_SECRET} from "../constants/environment.constant";
import {USERS} from "../db/user.db";
import {User} from "../models/user.model";

export const authMiddleware = (req: any, res: any, next: NextFunction) => {
    const authToken = req.headers["authorization"];

    if (!authToken) {
        return res.status(401).json({
            message: 'Auth token not sent'
        });
    }

    let userId: number;

    try {
        const decodedToken = jwt.verify(String(authToken), APP_SECRET) as { userId: number };
        userId = decodedToken.userId;
    } catch (error) {
        return res.status(401).json({
            message: 'Invalid auth token'
        });
    }

    const user = USERS.find((user: User) =>  user.id === userId);
    if (!user) {
        return res.status(401).json({
            message: 'User not found'
        });
    }

    (req as any).user = user;
    next();
}
