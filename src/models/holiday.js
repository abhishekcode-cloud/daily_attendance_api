import mongoose from "mongoose";
import constants from "../constants/constants.js";
const Schema = mongoose.Schema;

const holidaySchema = new Schema({
    openId: {
        type: String,
        trim: true,
        required: true,
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    holidayDate: {
        type: String,
        required: true,
        trim: true
    },
    notes: {
        type: String,
        required: true,
        trim: true
    }

}, { timestamps: true }
);

const Holiday = mongoose.model(constants.HOLIDAY_SCHEMA, holidaySchema);

export default Holiday;


//   INSERT INTO `tbl_holiday` (`id`, `title`, `holidaydates`, `notes`, `create_id`, `create_date`, `update_id`, `update_date`) VALUES
//   (1, 'Govt Holiday', '2019-05-01', '', 2, '2019-06-27 17:44:42', 0, '0000-00-00 00:00:00'),
//   (2, 'Weekend', '2019-05-03', '', 2, '2019-06-27 17:45:12', 0, '0000-00-00 00:00:00'),
//   (3, 'Weekend', '2019-05-10', 'Friday', 2, '2019-06-27 17:46:38', 0, '0000-00-00 00:00:00');