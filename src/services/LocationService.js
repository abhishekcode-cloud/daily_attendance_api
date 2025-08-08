import logger from "../loggers/logger.js";
import customUtils from "../utils/custom.util.js";
import industryList from "../helpers/industry.js";


class LocationService {

    static async getAllState() {
        try {
            const url = '';
            const response = await fetch(url, { headers: { "Content-Type": "application/json; charset=UTF-8" } });
            return await response.json();
        } catch (error) {
            logger.error('LocationService ', error);
        }
    }

    static async getDistrict(data) {
        try {
            const url = '';
            const headers = {
                method: "POST",
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                },
                body: JSON.stringify({
                    "stateName": data.stateName
                })
            };
            const response = await fetch(url, headers);
            return await response.json();

        } catch (error) {
            logger.error('LocationService: ', error);
        }
    }

    static async getIndustry(data) {
        try {            
            return await industryList;

        } catch (error) {
            logger.error('LocationService: ', error);
        }

    }



}
export default LocationService;