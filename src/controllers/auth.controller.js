import bcrypt from "bcrypt";
import generateTokens from "../utils/generateTokens.util.js";
import customUtils from "../utils/custom.util.js";
import ApiResponse from '../helpers/api.responses.js';
import logger from "../loggers/logger.js";
import { signUpBodyValidation, logInBodyValidation, refreshTokenBodyValidation, forgotBodyValidation, verifyBodyValidation } from "../validations/user.validate.js";
import User from "../models/User.js";
import UserToken from "../models/UserToken.js";
import jwt from "jsonwebtoken";
import verifyRefreshToken from "../utils/verifyRefreshToken.util.js";
import authService from "../services/AuthService.js";


class AuthController {
   //Signup
   static async signup(req, res, next) {
      try {
         const { error } = signUpBodyValidation(req.body);
         if (error)
            return ApiResponse.ValidationError(res, error.details[0].message);

         const user = await User.findOne({ mobile: req.body.mobile });
         if (user)
            return ApiResponse.ValidationError(res, "User with given mobile already exist.");

         const salt = await bcrypt.genSalt(Number(process.env.SALT));
         const hashPassword = await bcrypt.hash(req.body.password, salt);

         await new User({ ...req.body, password: hashPassword, openId: customUtils.generateOpenId() }).save();
         ApiResponse.SuccessResponse(res, "Account created successfully.");
      } catch (err) {
         logger.error("Internal Server Error", err);
         ApiResponse.ErrorResponse(res, "Auth controller signup");
      }

   }
   //Login
   static async login(req, res, next) {
      try {
         const { error } = logInBodyValidation(req.body);
         if (error)
            return ApiResponse.ValidationError(res, error.details[0].message);

         const user = await User.findOne({ mobile: req.body.mobile, isAccountStatus: true });
         if (!user)
            return ApiResponse.UnauthorizedResponse(res, "Invalid mobile or password");

         const verifiedPassword = await bcrypt.compare(
            req.body.password,
            user.password
         );
         if (!verifiedPassword)
            return ApiResponse.ValidationError(res, "Invalid mobile or password");

         const { accessToken, refreshToken } = await generateTokens(user);
         ApiResponse.SuccessResponseWithData(res, "Logged in successfully.", {
            accessToken,
            refreshToken
         });
      } catch (err) {
         logger.error("Internal Server Error", err);
         ApiResponse.ErrorResponse(res, "Auth controller login");
      }
   }
   //Refresh token
   static async refreshToken(req, res, next) {
      const { error } = refreshTokenBodyValidation(req.body);
      if (error)
         return ApiResponse.ValidationError(res, error.details[0].message);

      verifyRefreshToken(req.body.refreshToken)
         .then(({ tokenDetails }) => {
            const payload = { _id: tokenDetails._id, roles: tokenDetails.roles, openId: tokenDetails.openId };
            const accessToken = jwt.sign(
               payload,
               process.env.ACCESS_TOKEN_PRIVATE_KEY,
               { expiresIn: process.env.REFRESH_TOKEN_EXPIRE_TIME }
            );
            ApiResponse.SuccessResponseWithData(res, "Access token created successfully", {
               accessToken
            });
         })
         .catch((err) => ApiResponse.ValidationError(res, err.message));
   }

   // Logout
   static async deleteToken(req, res, next) {
      try {
         const { error } = refreshTokenBodyValidation(req.body);
         if (error)
            return ApiResponse.ValidationError(res, error.details[0].message);

         const userToken = await UserToken.findOne({ token: req.body.refreshToken });
         if (!userToken)
            return ApiResponse.SuccessResponse(res, "Logged Out Successfully.");

         await UserToken.findOneAndRemove(userToken);
         res.status(200).json({ error: false, message: "Logged Out Successfully" });
      } catch (err) {
         logger.error("Internal Server Error", err);
         ApiResponse.ErrorResponse(res, "Auth controller delete token.");
      }
   }
   // Forgot
   static async forgotMobile(req, res, next) {
      try {
         const { error } = forgotBodyValidation(req.body);
         if (error)
            return ApiResponse.ValidationError(res, error.details[0].message);

         const userDetail = await User.findOne({ mobile: req.body.mobile, isAccountStatus: true });

         if (!userDetail)
            return ApiResponse.NotFoundResponse(res, "Invalid User!");

         // ** Add record OTP master
         const option = {
            mobile: userDetail.mobile
         }
         await authService.sendOTP(option).then(response => {
            if (response)
               ApiResponse.SuccessResponseWithData(res, "An OTP is sent to the registered phone number.", response);

         });
      } catch (err) {
         logger.error("Internal Server Error", err);
         ApiResponse.ErrorResponse(res, "Auth controller forgot mobile");
      }
   }
   // Verify OTP
   static async verifyOtp(req, res, next) {
      try {
         const { error } = verifyBodyValidation(req.body);
         if (error)
            return ApiResponse.ValidationError(res, error.details[0].message);
         const isValid = await authService.validateOTP(req.body);
         if (!isValid)
            return ApiResponse.ValidationError(res, "Invalid OTP.");

         const userDetail = await User.findOne({ mobile: req.body.mobile });
         const { accessToken } = await generateTokens(userDetail);
         ApiResponse.SuccessResponseWithData(res, "OTP verified.", accessToken);

      } catch (err) {
         logger.error("Internal Server Error!", err);
         ApiResponse.ErrorResponse(res, "Auth controller");
      }
   }


}
export default AuthController;