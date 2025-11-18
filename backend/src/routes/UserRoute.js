import express from 'express';
import { becomeSellerController, createUserController, loginUserController, updateUserController, userProfileController } from '../controller/UserController.js';
import { protect } from '../middleware/protected/protectAuth.js';

const router = express.Router();

// for all the users or many users
// "/api/v1/"
router.post("/signup",createUserController);
router.post("/login", loginUserController);

// protected routes
router.get("/user/profile",protect, userProfileController);
router.put("/profile/update",protect, updateUserController);

// becomeSeller
router.put("/become-seller",protect,becomeSellerController);

// changePassword

export default router;
