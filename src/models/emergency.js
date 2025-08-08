// CREATE TABLE `tbl_emergency` (
//     `id` int(11) NOT NULL,
//     `employee_id` varchar(120) NOT NULL,
//     `ref_name` varchar(120) NOT NULL,
//     `relation` varchar(120) NOT NULL,
//     `mobile` varchar(20) NOT NULL,
//     `address` text NOT NULL,

import mongoose from "mongoose";
import constants from "../constants/constants.js";
const Schema = mongoose.Schema;

const emergencySchema = new Schema({
    openId: {
        type: String,
        trim: true,
        required: true,
    },
    employeeId: {
        type: Schema.Types.ObjectId,
        required: true,
        trim: true
    },
    refName: {
        type: String,
        required: true,
        trim: true
    },
    relation: {
        type: String,
        required: true,
        trim: true
    },
    mobile: {
        type: String,
        required: true,
        trim: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    }
}, { timestamps: true }
);

const Emergency = mongoose.model(constants.EMERGENCY_SCHEMA, emergencySchema);

export default Emergency;