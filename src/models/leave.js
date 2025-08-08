import mongoose from "mongoose";
import constants from "../constants/constants.js";
const Schema = mongoose.Schema;

const leaveSchema = new Schema({

    leaveName: {
        type: String,
        required: true,
        trim: true
    },
    totalDay: {
        type: String,
        required: true,
        trim: true
    }

}, { timestamps: true }
);

const Leave = mongoose.model(constants.LEAVE_SCHEMA, leaveSchema);

export default Leave;

//   INSERT INTO `tbl_leave` (`id`, `leave_name`, `total_day`, `create_by`, `create_date`, `update_by`, `lastupdate_date`) VALUES
//   (1, 'Annual', 7, 2, '2019-04-20 16:16:19', 0, '0000-00-00 00:00:00'),
//   (2, 'Sick', 5, 2, '2019-04-20 16:16:44', 2, '2019-04-20 18:49:56'),
//   (3, 'Test', 1, 2, '2019-04-20 18:48:22', 0, '0000-00-00 00:00:00');