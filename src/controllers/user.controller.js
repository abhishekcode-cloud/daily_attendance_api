import logger from "../loggers/logger.js";
import customUtils from "../utils/custom.util.js";
import message from '../helpers/api.massages.js';
import ApiResponse from '../helpers/api.responses.js';
import userService from '../services/UserService.js';
import { resetBodyValidation } from "../validations/user.validate.js";
import UserService from "../services/UserService.js";


class UserController {

   //** User Details */
   static async userDetails(req, res, next) {
      try {
         const userData = await userService.getUserById(req.user._id);
         if (userData) {
            console.log("++++Test IP+++++" + req.ip);
            const userDetail = {
               organizationName: userData.organizationName,
               ownerName: userData.ownerName,
               openId: userData.openId,
               attachmentId: userData.attachmentId,
               attachmentName: userData.attachmentName,
               isActive: userData.isAccountStatus,
               role: userData.roles
            };
            ApiResponse.SuccessResponseWithData(res, "Successfully found user detail.", userDetail);
         }
      } catch (err) {
         logger.error("Internal Server Error", err);
         ApiResponse.ErrorResponse(res, message.systemError);
      }
   }

   //** User Update */
   static async userUpdate(req, res, next) {
      try {
         const data = {};
         data.organizationName = req.body.organizationName;
         data.ownerName = req.body.ownerName;
         data.address = req.body.address;
         data.email = req.body.email;
         data.attachmentId = req.body.attachmentId;
         data.attachmentName = req.body.attachmentName;
         data.orgCertificate = req.body.orgCertificate;
         data.orgCertificateId = req.body.orgCertificateId;
         const userId = req.user._id;
         const updatedUser = await UserService.updateUserDetail(data, userId);
         if (updatedUser.modifiedCount === 0) {
            throw new Error("Unable to update user, error occurred.");
         }
         ApiResponse.SuccessResponseWithData(res, message.updated, updatedUser);

      } catch (err) {
         logger.error("Internal Server Error", err);
         ApiResponse.ErrorResponse(res, message.systemError);
      }
   }

   //** User Password update */
   static async passwordReset(req, res, next) {
      try {
         const { error } = resetBodyValidation(req.body);
         if (error)
            return res
               .status(400)
               .json({ error: true, message: error.details[0].message });
         const passResponse = await userService.passwordUpdate(req);
         // console.log(passResponse);
         if (passResponse) {
            ApiResponse.SuccessResponse(res, message.resetpassword);
         } else {
            ApiResponse.NotFoundResponse(res, message.notFound);
         }
      } catch (err) {
         logger.error("Internal Server Error", err);
         ApiResponse.ErrorResponse(res, message.systemError);
      }

   }




}
export default UserController;