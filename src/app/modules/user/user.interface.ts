import { NextFunction } from "express";
import mongoose, { Model } from "mongoose"



export type IUser = {
    username: string;
    email: string;
    password: string;
    role: string;
}

// IUserMethods interface with the comparePassword method
export interface IUserMethods {
    comparePassword(givenPassword: string): Promise<boolean>;
}

// Extend the Request interface to include userId and role
// export interface CustomRequest extends Request {
//     userId?: string;
//     role?: string;
// }



export const userModel = mongoose.model<IUser>('User', new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    role: String
}));
