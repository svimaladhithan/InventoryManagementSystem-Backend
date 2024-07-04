import express from 'express';
import { google, registerUser, signinUser } from '../Controllers/authController.js';


const router = express.Router();

router.post("/register-user",registerUser)
router.post("/signin-user",signinUser)
router.post("/google",google)

export default router;
