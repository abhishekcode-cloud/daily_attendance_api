import logger from "../loggers/logger.js";
import customUtils from "../utils/custom.util.js";
import OtpService from "./OtpService.js";
import OtpMaster from "../models/OtpMaster.js";

class AuthService {

    static async sendOTP(data) {
        try {
            const OTP = customUtils.generateOTP();
            const options = { numbers: [data.mobile], variables_values: OTP };
            // ** Add record OTP master 
            let otpMasterSchema = new OtpMaster({
                otp: OTP.toString(),
                mobile: data.mobile
            });
            const optResponse = await otpMasterSchema.save();
            if (optResponse) {
                //return optResponse;
                return await OtpService.sendMessage(options).then(response => { return response });
            }
        } catch (error) {
            logger.error('Forgot OTP Service: ', error);
        }
    }
    static async validateOTP(data) {
        try {
            const otpSchema = {
                mobile: data.mobile,
                isUsed: false,
                otp: data.otp,
                createdAt: { $lt: new Date() }
            };
            const otpRes = await OtpMaster.findOne(otpSchema);
            if (otpRes == null)
                return false;

            const updateResponse = await OtpMaster.updateOne({ _id: otpRes._id }, { $set: { isUsed: true } });
            if (updateResponse)
                return true;

        } catch (error) {
            logger.error('Validate OTP Service: ', error);
        }
    }






}
export default AuthService;