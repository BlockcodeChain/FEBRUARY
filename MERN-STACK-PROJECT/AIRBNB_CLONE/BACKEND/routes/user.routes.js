import express from 'express';
import { SignUp, Login,Logout } from '../controller/user.controller.js';
const router=express.Router();
router.post("/signup",SignUp);
router.post("/login",Login);
router.post("/logout",Logout);
export default router;