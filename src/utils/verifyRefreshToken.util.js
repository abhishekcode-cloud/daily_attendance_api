import UserToken from "../models/UserToken.js";
import jwt from "jsonwebtoken";

const verifyRefreshToken = async (refreshToken) => {
	const privateKey = process.env.REFRESH_TOKEN_PRIVATE_KEY;
	let doc = await UserToken.findOne({ token: refreshToken });
	return new Promise((resolve, reject) => {

		if (!doc)
			return reject({ error: true, message: "Invalid refresh token" });

		jwt.verify(refreshToken, privateKey, (err, tokenDetails) => {
			if (err)
				return reject({ error: true, message: "Invalid refresh token" });
			resolve({
				tokenDetails,
				error: false,
				message: "Valid refresh token",
			});
		});
	});
};

export default verifyRefreshToken;
