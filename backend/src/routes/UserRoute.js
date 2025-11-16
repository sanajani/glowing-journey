import express from 'express';
import { createUserController, getAllUsersController, loginUserController, userProfile } from '../controller/UserController.js';
import { protect } from '../middleware/protected/protectAuth.js';

const router = express.Router();

// for all the users or many users
router.get("/users",getAllUsersController)

router.post("/signup",createUserController)

router.post("/login", loginUserController)

router.get("/profile",protect, userProfile)

export default router
