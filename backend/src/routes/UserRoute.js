import express from 'express';
import { createUserController, getAllUsersController, loginUserController } from '../controller/UserController.js';

const router = express.Router();


// for all the users or many users
router.route("/users")
.get(getAllUsersController)
.post(createUserController)

// const {email, password, confirmPassword, phoneNumber1, phoneNumber2,profile:{name, lastName, avatar, nationalIdCard}, contact:{province, city, district, streetAddress,coordinate}, role } = req.body;

router.route("/loginuser")
.post(loginUserController)

export default router
