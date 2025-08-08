import jwt from "jsonwebtoken";
import ApiResponse from '../helpers/api.responses.js';

const authenticate = async (req, res, next) => {

    const authorizationHeader = req.header('Authorization') || '';
    if (!authorizationHeader) return ApiResponse.UnauthorizedResponse(res, "Unauthorized request.");

    const token = authorizationHeader.split(' ')[1];
    if (!token) return ApiResponse.ForbiddenResponse(res, "Access Denied: No token provided");
    try {
        jwt.verify(token, process.env.ACCESS_TOKEN_PRIVATE_KEY, (err, tokenDetails) => {
            if (err) return ApiResponse.ForbiddenResponse(res, "Access Denied: Invalid token");

            req.user = tokenDetails;
            next();
        });
    } catch (err) {
        return ApiResponse.ErrorResponse(res, err);
    }
};
export default authenticate;

