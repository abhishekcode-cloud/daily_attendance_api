import bcrypt from "bcrypt";
import logger from "../loggers/logger.js";
import customUtils from "../utils/custom.util.js";
import User from "../models/User.js";

class UserService {

    static async getUserById(userId) {
        try {
            const singleUserResponse = await User.findById({ _id: userId });;
            return singleUserResponse;
        } catch (error) {
            logger.error('User service get profile: ', error);
        }

    }
    static async updateUserDetail(data, userId) {
        try {
            const updateResponse = await User.updateOne({ _id: userId }, { $set: data });
            return updateResponse;
        } catch (error) {
            logger.error('Could not update user: ', error);
        }
    }
    static async getAllUser(userId) {
        try {
            const userResponse = await User.find();
            return userResponse;
        } catch (error) {
            logger.error('User service findAll: ', error);
        }

    }
    static async passwordUpdate(data) {
        try {
            const salt = await bcrypt.genSalt(Number(process.env.SALT));
            const hashPassword = await bcrypt.hash(data.body.newPassword, salt);
            const updateResponse = await User.updateOne({ _id: data.user._id }, { $set: { password: hashPassword } });
            return updateResponse;
        } catch (error) {
            logger.error('User service password update: ', error);
        }

    }

}
export default UserService;