import mongoose from "mongoose";
import constants from "../constants/constants.js";
const Schema = mongoose.Schema;

const employeeSchema = new Schema({

    name: {
        type: String,
        required: true,
        trim: true
    },
    mobile: {
        type: String,
        required: true,
        //unique: true,
        trim: true
    },
    designation: {
        type: String,
        trim: true,
        required: true,
    },
    gender: {
        type: String,
        enum: ["male", "female"],
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    attachmentId: {
        type: String,
        trim: true,
        default: ""
    },
    fileName: {
        type: String,
        trim: true,
        default: ""
    },
    openId: {
        type: String,
        trim: true,
        required: true
    }

}, { timestamps: true }
);

const Employee = mongoose.model(constants.EMPLOYEE_SCHEMA, employeeSchema);

export default Employee;


//**

// `id` int(11) NOT NULL,
// `fullname` varchar(250) NOT NULL,
// `department` int(11) NOT NULL,
// `designation` varchar(120) NOT NULL,
// `card_id` int(11) NOT NULL,
// `mobile` varchar(20) NOT NULL,
// `employee_email` varchar(250) NOT NULL,
// `gender` varchar(20) NOT NULL,
// `national_id` varchar(120) NOT NULL,
// `birth_id` varchar(120) NOT NULL,
// `passport_id` varchar(120) NOT NULL,
// `religion` varchar(50) NOT NULL,
// `fathername` varchar(250) NOT NULL,
// `mothername` varchar(250) NOT NULL,
// `presentaddress` text NOT NULL,
// `permanentaddress` text NOT NULL,
// `employee_photo` text NOT NULL,




// CREATE TABLE `tbl_employee_education` (
//     `id` int(11) NOT NULL,
//     `user_id` int(11) NOT NULL,
//     `employee_id` int(11) NOT NULL,
//     `examname` varchar(100) NOT NULL,
//     `institutename` varchar(100) NOT NULL,
//     `board` varchar(100) NOT NULL,
//     `result` varchar(100) NOT NULL,
//     `marks` varchar(12) NOT NULL,
//     `g_cgpa` varchar(111) NOT NULL,
//     `Scale` varchar(112) NOT NULL,
//     `passing_year` varchar(20) NOT NULL,
//     `create_id` int(11) NOT NULL,
//     `create_date` datetime NOT NULL,



// CREATE TABLE IF NOT EXISTS `employee_details` (
//     `id` int(11) NOT NULL AUTO_INCREMENT,
//     `name` varchar(25) NOT NULL,
//     `gender` varchar(20) NOT NULL,
//     `email` varchar(25) NOT NULL,
//     `DOB` varchar(25) NOT NULL,
//     `contact_no` varchar(25) NOT NULL,
//     `department` varchar(20) NOT NULL,
//     PRIMARY KEY (`id`)
