import { createUser, getAllUsers } from "../services/userServices.js";
import catchAsync from "../utilities/catchAsync.js";

export const createUserController = catchAsync(async (req,res,next) => {
    const newUser = await createUser(req.body);
    console.log(newUser);
    
    res.status(200).json({
        status:"Success",
        data: newUser
    })
})


export const getAllUsersController = catchAsync(async (req,res,next) => {
    const users = await getAllUsers();
    console.log(users);

    res.status(200).json({
        status:"Success",
        data: users
    })
    
})