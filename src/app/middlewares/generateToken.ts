import { User } from "../modules/user/user.model";
const jwt = require('jsonwebtoken');
import config from "../config/config";


export const generateToken = async (userId: string) => {
    const user = await User.findById(userId);
    try {
        // console.log('UserId passed to generateToken:', userId);

        // Check if JWT_SECRET is defined
        if (!config.secret_key) {
            throw new Error('JWT_SECRET_KEY is not defined in the environment variables');
        }

        // Fetch user from the database
        if (!user) {
            throw new Error('User Not Found');
        }

        // Generate token
        const token = jwt.sign({ userId: user._id, role: user.role },config.secret_key, { expiresIn: '24h' });
        return token;
    } catch (error) {
        if (error instanceof Error) {
            console.error('Error generating token:', error.message);
        } else {
            console.error('Error generating token:', error);
        }
        throw error;
    }
};
