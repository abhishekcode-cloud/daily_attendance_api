import logger from "../loggers/logger.js";
import customUtils from "../utils/custom.util.js";
import Attachment from '../models/Attachment.js';

class AttachmentService {

    static async createUpdateAttachment(payload, attachmentId) {
        try {
            const filter = {};
            filter.userId = payload.userId
            filter.attachmentId = attachmentId;
            return await Attachment.findOneAndUpdate(filter, payload, { new: true, upsert: true });
        } catch (error) {
            logger.error('Attachment service: ', error);
        }
    }







}
export default AttachmentService;