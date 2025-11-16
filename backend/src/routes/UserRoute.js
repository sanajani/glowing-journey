import express from 'express';
import { createUserController, getAllUsersController } from '../controller/UserController.js';
// import { User } from '../models/User/User.js';

const router = express.Router();


// for all the users or many users
router.route("/users")
.get(getAllUsersController)
.post(createUserController)

// const {email, password, confirmPassword, phoneNumber1, phoneNumber2,profile:{name, lastName, avatar, nationalIdCard}, contact:{province, city, district, streetAddress,coordinate}, role } = req.body;

export default router
