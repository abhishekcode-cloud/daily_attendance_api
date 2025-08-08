// import logger from "../loggers/logger.js";
// import customUtils from "../utils/custom.util.js";
// import message from '../helpers/api.massages.js';
// import APP_CONFIG from '../config/app.config.js';
// import HTML_TEMPLATE from '../helpers/template/mail-template.js';
// import ApiResponse from '../helpers/api.responses.js';
// import MailService from "../services/MailService.js";

// class MailController{

//     static async sendMail(req, res, next) {
//         try {
//             const message = req.body.message;
//             const options = {
//                 from: "DAILY WORK <info@kgpexpress.com>", // sender address
//                 to: req.body.to, // receiver email
//                 subject: req.body.subject, // Subject line
//                 text: message,
//                 html: HTML_TEMPLATE(message),
//             }
        
//             MailService.sendMail(options, (info) => {
//                 console.log("Email sent successfully : SENDER ID :", info.messageId);
//             });
            
//         //    ApiResponse.SuccessResponseWithData(res, message.success, req.file);
//         } catch (err) {
//            logger.error("Internal Server Error", err);
//            ApiResponse.ErrorResponse(res, message.systemError);
//         }
  
//      }
 

// }

// export default MailController;