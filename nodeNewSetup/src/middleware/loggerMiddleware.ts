import { NextFunction, Request, Response} from "express";
import {logger } from "../helper/logger";

export default (req: Request, res:Response, next: NextFunction) : void =>{
    logger(
        `DOMAIN=${process.env.DOMAIN}: ${req.method}: ${req.protocol}://${req.headers.host}${req.url}`
    );
    logger(`req body: ${JSON.stringify(req.body)}`);
    logger(`req query: ${JSON.stringify(req.query)}`);
    logger(`req params: ${JSON.stringify(req.params)}`);
    next();
}