import mongoose from "mongoose";
import { config } from "dotenv";
import key from "../constants/keys.js";
config();
const connect = (uri) => {
	mongoose.connect(uri, key.MONGO_CONN_OPTIONS)
		.then(res => console.log(`DB Connection Successful ...`))
		.catch(err => console.log(`Error in DB connection`));
}

export default connect(process.env.mongoURI);
