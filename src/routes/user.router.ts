import express from "express";
import {authMiddleware} from "../middlewares/auth.middleware";
import {me} from "../controllers/user.controller";

export const userRouter = express.Router();

userRouter.use("*", [authMiddleware]);

userRouter.get("/me", me);
