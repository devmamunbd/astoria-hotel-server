import { Model } from "mongoose"



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


export const userModel = Model<IUser>
