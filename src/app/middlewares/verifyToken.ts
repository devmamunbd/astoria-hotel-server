const jwt = require('jsonwebtoken')
import { Request, Response, NextFunction } from "express"
import config from "../config/config"

interface CustomRequest extends Request {
    userId?: string;
    role?: string;
}
export const verifyToken=(req: CustomRequest, res: Response, next: NextFunction): void | Response => {

    try {
        // const token = req.cookies.token;
        const token = req.headers.authorization?.split(' ')[1] //Bearer Token
        if (!token) {
            return res.status(401).send({message: "Token not found"})
        }

        const decoded = jwt.verify(token, config.secret_key);
        if (!decoded.userId) {
            return res.status(401).send({message: "User ID not found"})
        }

        req.userId = decoded.userId;
        req.role = decoded.role;
        next()

    } catch (error) {
        console.log("Error Verify Token", error)
        res.status(401).send({message: "Invalid Token"})
    }
}
