
import { Router } from "express";
const router = Router();
import authenticate from "../middleware/authorize.js";
import authRoutes from "./auth.routes.js";
import userRoutes from "./user.routes.js";
import publicRoutes from "./public.routes.js";



router.use('/auth', authRoutes);
router.use('/public', publicRoutes);
router.use('/user',authenticate, userRoutes);



export default router;