import mongoose, { model, Schema, Model } from "mongoose";
const bcrypt = require('bcrypt');


export const userSchema = new Schema({
    username: {
        type: String,
        require: true,
        unique: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
        unique: true
    },
    role: {
        type: String,
        require: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }


});

// password hashing
userSchema.pre('save', async function(next){
    const user = this;
    if (!user.isModified('password')) {
        return next()
    };
    const hashedPassword = await bcrypt.hash(user.password, 10);
    user.password = hashedPassword;
    next()
});

// password compare when someone login
interface IUser {
    username: string;
    email: string;
    password: string;
    role: string;
}

// Password comparison method
userSchema.methods.comparePassword = async function (candidatePassword: string) {
    return await bcrypt.compare(candidatePassword, this.password);

};

// Method to log out user

userSchema.statics.logOut = async function (userId: string) {

    // Implement your log out logic here

    return { message: 'User logged out successfully' };

};


// Define the User model with IUser and IUserMethods types
export const User = mongoose.model<IUser & Document>('User', userSchema);
