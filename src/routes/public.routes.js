import { Router } from "express";
const PublicRouter = Router();

//** API RESPONSE */
import ApiResponse from '../helpers/api.responses.js';

//** Public Controllers List */
import LocationCtrl from "../controllers/location.controller.js";

// Endpoint to check if the API is running
PublicRouter.get('/api-status', (req, res) =>
    ApiResponse.SuccessResponseWithData(res, "SUCCESS", { status: 'OK' })
);

PublicRouter.route('/state').get(LocationCtrl.findAllState);
PublicRouter.route('/district').post(LocationCtrl.findAllDist);
PublicRouter.route('/industries').get(LocationCtrl.findAllIndustry);

export default PublicRouter;
