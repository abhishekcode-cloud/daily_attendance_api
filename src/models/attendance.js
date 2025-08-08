import mongoose from "mongoose";
import constants from "../constants/constants.js";
const Schema = mongoose.Schema;

const attendanceSchema = new Schema({

    openId: {
        type: String,
        trim: true,
        required: true,
    },
    employeeId: {
        type: String,
        trim: true
    },
    date: {
        type: String,
        trim: true
    },
    timeIn: {
        type: String,
        trim: true
    },
    timeOut: {
        type: String,
        trim: true
    }

}, { timestamps: true }
);

const Attendance = mongoose.model(constants.ATTENDANCE_SCHEMA, attendanceSchema);

export default Attendance;
