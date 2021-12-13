import { Request, Response, NextFunction } from "express";
export default class AuthController {
    constructor();
    login(req: Request, res: Response, next: NextFunction): Promise<void>;
}
