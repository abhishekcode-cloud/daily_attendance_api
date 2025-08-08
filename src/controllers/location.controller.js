import logger from "../loggers/logger.js";
import customUtils from "../utils/custom.util.js";
import message from '../helpers/api.massages.js';
import ApiResponse from '../helpers/api.responses.js';
import { stateValidation } from "../validations/location.validate.js";
import locationService from "../services/LocationService.js";




class LocationController {

   static async findAllState(req, res, next) {
      try {
         const stateData = await locationService.getAllState();
         ApiResponse.SuccessResponseWithData(res, message.success, stateData);
      } catch (err) {
         logger.error("Internal Server Error", err);
         ApiResponse.ErrorResponse(res, message.systemError);
      }

   }
   static async findAllDist(req, res, next) {
      try {
         const { error } = stateValidation(req.body);
         if (error)
            ApiResponse.ValidationErrorWithData(res, message.validation, error.details[0].message);
         const distData = await locationService.getDistrict(req.body);
         ApiResponse.SuccessResponseWithData(res, message.success, distData);
      } catch (err) {
         logger.error("Internal Server Error", err);
         ApiResponse.ErrorResponse(res, message.systemError);
      }

   }
   static async findAllIndustry(req, res, next) {
      try {       
         const distData = await locationService.getIndustry();
         ApiResponse.SuccessResponseWithData(res, message.success, distData);
      } catch (err) {
         logger.error("Internal Server Error", err);
         ApiResponse.ErrorResponse(res, message.systemError);
      }

   }




}
export default LocationController;