import express from 'express';
import { becomeSellerController, createUserController, loginUserController, userProfileController } from '../controller/UserController.js';
import { protect } from '../middleware/protected/protectAuth.js';

const router = express.Router();

// for all the users or many users
// "/api/v1/"
router.post("/signup",createUserController)
router.post("/login", loginUserController)

// protected routes
router.get("/profile",protect, userProfileController);

router.put("/become-seller",protect,becomeSellerController)

export default router
