import express from 'express';
import { becomeSellerController, createUserController, loginUserController, updateUserController, userProfileController } from '../controller/UserController.js';
import { protect } from '../middleware/protected/protectAuth.js';

const router = express.Router();

// for all the users or many users
// "/api/v1/"
router.post("/users",createUserController);
router.post("/users/sessions", loginUserController);

// protected routes
router.get("/users/me/profile",protect, userProfileController);
router.patch("/users/me/profile",protect, updateUserController);

// becomeSeller
router.patch("/users/me/seller-status",protect,becomeSellerController);

// changePassword

export default router;
