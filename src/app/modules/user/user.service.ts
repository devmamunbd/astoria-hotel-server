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

// get all user
const getAllUser = async ()=> {
    const result = await User.find({}, 'id username email role');
    return result
}

// delete a user
const deleteUser = async(id: string)=> {
    const result = await User.findByIdAndDelete(id);
    return result
}

// update user role
const updateUserRole = async(id: string, role: string)=> {
    const result = await User.findByIdAndUpdate(id, {role}, {new: true});
    return result
}




// log out
const logOutUser = async(user: string)=> {
    const result = await User.logOut(user);
    return result
}


export const UserService = {
    createUser,
    loginUser,
    logOutUser,
    getAllUser,
    deleteUser,
    updateUserRole
}
