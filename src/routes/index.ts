import express from "express";
import {authRouter} from "./auth.router";
import {userRouter} from "./user.router";

export const rootRouter = express.Router();

rootRouter.use('/auth', authRouter);
rootRouter.use('/users', userRouter);
