import config from "./keys.js";
import DIRHelper from "../helpers/DIR_helper.js";
import logger  from "../loggers/logger.js";


const createDirectories = async () => {
    try {
        Object.values(config.directories).forEach(d => { 
            if(!DIRHelper.checkDIR(d)){ 
                DIRHelper.createDIR(d) 
                console.log(`Directory ${d} Created Successfully`)
            }  
        })          
    } catch (error) {
        logger.error(error.message,'error');
    }
}



export default createDirectories();

