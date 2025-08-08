import mongoose from "mongoose";
import constants from "../constants/constants.js";
const Schema = mongoose.Schema;

const departmentSchema = new Schema({
    openId: {
        type: String,
        trim: true,
        required: true,
    },
    departmentName: {
        type: String,
        required: true,
        trim: true
    }

}, { timestamps: true }
);

const Department = mongoose.model(constants.DEPARTMENT_SCHEMA, departmentSchema);

export default Department;



//   INSERT INTO `tbl_department` (`id`, `name_department`, `create_id`, `update_id`) VALUES
//   (1, 'Software', 2, 0),
//   (2, 'Graphics', 2, 2),
//   (3, 'Admin', 2, 2),
//   (4, 'Digital Marketing', 2, 0),
//   (5, 'Account', 2, 0),
//   (6, 'Architect', 2, 0),
//   (7, ' Business Development', 2, 0),
//   (8, 'Receptionist', 2, 0),
//   (9, 'MLSS', 2, 0),
//   (10, 'Executive Operation', 2, 0),
//   (11, 'Journalist', 2, 0);