import { NextFunction, Request, Response } from "express";
interface CustomRequest extends Request {
    userId?: string;
    role?: string;
}

export const isAdmin=(req: CustomRequest, res: Response, next: NextFunction)=> {
    if (req.role !== 'admin') {
        return res.status(403).send({
            success: false,
            message: "Unauthorized Access"
        })
    }
    next()
}
