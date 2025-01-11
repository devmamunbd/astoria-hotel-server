import { Request, Response } from "express";
import { UserService } from "./user.service";



// Create Users
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

// Login users
const loginUsers = async (req: Request, res: Response) => {
    try {
        const user = req.body;

        // Validate request body
        if (!user.email || !user.password) {
            return res.status(400).send({
                message: "Email and Password are required",
                success: false,
            });
        }

        // Authenticate user
        const result = await UserService.loginUser(user);

        // Respond with success message
        res.status(200).send({
            message: "User Login Successfully",
            success: true,
            user: {
                _id: result._id,
                role: result.role,
                username: result.username,
                email: result.email,
            },
        });
    } catch (error: any) {
        res.status(401).send({
            message: error.message || "Authentication failed",
            success: false,
        });
    }
};



export const UserController = {
    createUsers,
    loginUsers
}
