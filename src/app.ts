import express from 'express';
import bodyParser from "body-parser";
import {rootRouter} from "./routes";
import {SERVER_PORT} from "./constants/environment.constant";
import cors from 'cors';


const app = express();
app.use(bodyParser.json({limit: "50mb"}));
app.use(cors())
app.use("/", rootRouter)
app.listen(SERVER_PORT, () => console.log(`Running on port ${SERVER_PORT}`));
