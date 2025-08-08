
import jwt from "jsonwebtoken";

class JwtService {

  static decode(token) {
    return jwt.decode(token, { complete: true });
  }

  // static createJwtToken(userDetail) {
  //   const payload = { _id: userDetail._id, roles: userDetail.roles };
  //   return jwt.sign(payload, process.env.ACCESS_TOKEN_PRIVATE_KEY, { expiresIn: process.env.REFRESH_TOKEN_EXPIRE_TIME });
  // }

  // static verifyJwtToken(token, next) {
  //   try {
  //     const { userId } = jwt.verify(token, process.env.ACCESS_TOKEN_PRIVATE_KEY);
  //     return userId;
  //   } catch (err) {
  //     next(err);
  //   }
  // };



}

export default JwtService;

