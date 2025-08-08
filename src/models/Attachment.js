import mongoose from "mongoose";
import constants from "../constants/constants.js";

const Schema = mongoose.Schema;

const attachmentSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        select: false
    },
    attachmentId: {
        type: String
    },
    attachmentType: {
        type: String,
        enum: ['UPI', 'ITM', 'OTHER']
    },
    fileName: {
        type: String
    },
    fileSize: {
        type: Number,
        select: false
    }
}, { timestamps: true });

const Attachment = mongoose.model(constants.ATTACHMENT_SCHEMA, attachmentSchema);

export default Attachment;
