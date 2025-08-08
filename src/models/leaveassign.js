import mongoose from "mongoose";
import constants from "../constants/constants.js";
const Schema = mongoose.Schema;

const departmentSchema = new Schema({
    openId: {
        type: String,
        trim: true,
        required: true,
    },
    departmentId: {
        type: Schema.Types.ObjectId,
        required: true,
        trim: true
    },
    employeeId: {
        type: Schema.Types.ObjectId,
        required: true,
        trim: true
    },
    leaveId:{
        type: Schema.Types.ObjectId,
        required: true,
        trim: true
    },
    leaveTo:{
        type: String,
        required: true,
        trim: true
    },
    leaveFrom:{
        type: String,
        required: true,
        trim: true
    },
    note:{
        type: String,
        required: true,
        trim: true
    }

}, { timestamps: true }
);

const Department = mongoose.model(constants.DEPARTMENT_SCHEMA, departmentSchema);

export default Department;
  
//   INSERT INTO `tbl_leaveassign` (`id`, `employee_id`, `department_id`, `leave_id`, `leave_to`, `leave_from`, `note`, `create_id`, `createdate`, `update_id`, `updatedate`) VALUES
//   (1, 1, 1, 2, '2019-05-08', '2019-05-09', 'Test', 2, '2019-05-09 12:53:16', 0, '0000-00-00 00:00:00'),
//   (2, 3, 2, 3, '2019-05-10', '2019-05-11', 'test', 2, '2019-05-09 14:23:55', 2, '2019-05-11 12:43:30'),
//   (3, 4, 1, 3, '2019-05-11', '2019-05-11', 'test leave', 2, '2019-05-11 11:16:41', 0, '0000-00-00 00:00:00');