import mongoose from "mongoose";
import constants from "../constants/constants.js";
const Schema = mongoose.Schema;

const otpSchema = new Schema({

    mobile: {
        type: String,
        trim: true
    },
    otp: {
        type: String,
        trim: true
    },
    isUsed:{
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 10 * 60, // 10 min
    }
});



const om = mongoose.model(constants.OTP_MASTER_SCHEMA, otpSchema);

export default om;
