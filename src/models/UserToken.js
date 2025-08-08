import mongoose from "mongoose";
import constants from "../constants/constants.js";

const Schema = mongoose.Schema;

const userTokenSchema = new Schema({
	userId: {
		type: Schema.Types.ObjectId,
		required: true,
	},
	token: {
		type: String,
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
		expires: 30 * 86400, // 30 days
	}
});

const UserToken = mongoose.model(constants.USER_TOKEN_SCHEMA, userTokenSchema);

export default UserToken;
