import { Router } from "express";
import AuthCtrl from "../controllers/auth.controller.js";

const route = Router();


route.post("/signup", AuthCtrl.signup);
route.post("/login", AuthCtrl.login);
route.post("/forgot", AuthCtrl.forgotMobile);
route.post("/otpVerify", AuthCtrl.verifyOtp);
route.post("/refreshToken", AuthCtrl.refreshToken);
route.delete("/logout", AuthCtrl.deleteToken);



export default route;
