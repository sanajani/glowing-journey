import { createUser, getAllUsers, loginUser } from "../services/userServices.js";
import catchAsync from "../utilities/catchAsync.js";

export const createUserController = catchAsync(async (req,res,next) => {
    if(!req.body) return res.status(400).json({message:"fields are empty",status: 'failed'})
    const newUser = await createUser(req.body);

    res.status(200).json({
        status:"Success",
        data: newUser
    })
})


export const getAllUsersController = catchAsync(async (req,res,next) => {
    const users = await getAllUsers();
    res.status(200).json({
        status:"Success",
        data: users
    })
    
})


export const loginUserController = catchAsync(async (req,res,next) => {
    const loginInfo = await loginUser(req.body)
    console.log(loginInfo);
    
        res.status(200).json({
        status:"Success",
        data: loginInfo
    })
})