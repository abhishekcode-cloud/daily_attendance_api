import logger from "../loggers/logger.js";
import customUtils from "../utils/custom.util.js";
import message from '../helpers/api.massages.js';
import ApiResponse from '../helpers/api.responses.js';
import fs from 'fs';
//**Services */
import AttachmentService from '../services/AttachmentService.js';

class AttachmentController {

    static async fileUpload(req, res, next) {
        try {
            // Access the uploaded file
            const file = req.files.file;
            const reqAttachmentId = req.body.attachmentId;
            const reqFileName = req.body.fileName;
            const reqAttachmentType = req.body.attachmentType;
            const userId = req.user._id;
            // Check if files were uploaded
            if (!req.files || Object.keys(req.files).length === 0) {
                return ApiResponse.ValidationError(res, 'No files were uploaded.')
            } else if (file.mimetype == "image/png"
                || file.mimetype == "image/jpg"
                || file.mimetype == "image/jpeg"
                || file.mimetype == "image/gif") {
                let attachmentId = '';
                if (!customUtils.isEmpty(reqAttachmentId) && !customUtils.isEmpty(reqFileName)) {
                    attachmentId = reqAttachmentId;
                    fs.unlink(`./uploads/${reqFileName}`, function (err) { if (err) return console.log(err) });
                }
                else {
                    attachmentId = `${Date.now()}${Math.round(Math.random() * 1e9)}`;
                }

                let fileType = file.mimetype.split('/')[1];
                let fileNameWithExt = attachmentId + '.' + fileType;

                const payload = {};
                payload.userId = userId,
                    payload.attachmentId = attachmentId,
                    payload.attachmentType = reqAttachmentType,
                    payload.fileName = fileNameWithExt,
                    payload.fileSize = 3232

                const attachmentResponse = await AttachmentService.createUpdateAttachment(payload, attachmentId);
                if (attachmentResponse)
                    file.mv(`./uploads/${fileNameWithExt}`, err => {
                        if (err) {
                            return res.status(500).send(err);
                        }
                        ApiResponse.SuccessResponseWithData(res, "File uploaded successfully.", attachmentResponse)
                    });
            } else {
                return ApiResponse.ValidationError(res, 'Only .png, .gif, .jpg and .jpeg format allowed!');
            }
        } catch (err) {

            logger.error("Internal Server Error", err);
            ApiResponse.ErrorResponse(res, message.systemError);
        }

    }



}
export default AttachmentController;