import { Model } from "mongoose"



export type IUser = {
    username: string;
    email: string;
    password: string;
    role: string;
}


export const userModel = Model<IUser>
