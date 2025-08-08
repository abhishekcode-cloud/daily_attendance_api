import jwt from "jsonwebtoken";
import UserToken from "../models/UserToken.js";

const generateTokens = async (user) => {
	try {
		const payload = { _id: user._id, roles: user.roles,openId: user.openId };
		const accessToken = jwt.sign(
			payload,
			process.env.ACCESS_TOKEN_PRIVATE_KEY,
			{ expiresIn: process.env.REFRESH_TOKEN_EXPIRE_TIME  }
		);
		const refreshToken = jwt.sign(
			payload,
			process.env.REFRESH_TOKEN_PRIVATE_KEY,
			{ expiresIn: process.env.REFRESH_TOKEN_LIFE }
		);

		const userToken = await UserToken.findOne({ userId: user._id });
		if (userToken)
			await userToken.deleteOne();

		await new UserToken({ userId: user._id, token: refreshToken }).save();
		return Promise.resolve({ accessToken, refreshToken });
	} catch (err) {
		return Promise.reject(err);
	}
};

export default generateTokens;
