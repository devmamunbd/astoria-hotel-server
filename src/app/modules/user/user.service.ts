import { IUser, IUserMethods } from "./user.interface"
import { User } from "./user.model"





// create user
const createUser = async(user: IUser)=> {
    const result = await User.create(user);
    //Check if the user already exists
    // const existingUser = await User.findOne({ email: user.email });
    // if (existingUser) {
    //     throw new Error("Email already in use. Please use a different email.");
    // }
    return result
};


// login user
const loginUser = async (user: IUser) => {
    // Find user by email
    const existingUser = await User.findOne({ email: user.email});

    if (!existingUser) {
        throw new Error("User Not Found: Please Provide a Valid Email and Email");
    }

    // Check password
    const isMatch = await (existingUser as unknown as IUser & IUserMethods).comparePassword(user.password);
    if (!isMatch) {
        throw new Error("Invalid Password");
    }

    return existingUser;
};



export const UserService = {
    createUser,
    loginUser
}
