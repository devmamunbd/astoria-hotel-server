import mongoose, { model, Schema, Model } from "mongoose";
const bcrypt = require('bcrypt');


export const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
},
{
    timestamps: true,
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
userSchema.statics.logOut = async function (user: string) {
    return { message: `User ${user} logged out successfully` };

};


// Define the User model with IUser and IUserMethods types
export const User = mongoose.model<IUser & Document>('user', userSchema);
