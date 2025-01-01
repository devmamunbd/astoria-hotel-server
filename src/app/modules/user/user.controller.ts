import { Request, Response } from "express";
import { UserService } from "./user.service";



const createUsers = async(req: Request, res: Response)=> {
    const {email, password, username} = req.body;
    const result = await UserService.createUser({
        email, password, username,
        role: "" // or any default role
    })

    res.status(200).send({
        message: 'User Create SuccessFully',
        success: true,
        data: result
    })
}



export const UserController = {
    createUsers
}
