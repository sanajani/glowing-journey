import { becomeSeller, createUser, loginUser, updateUser, userProfile } from "../services/user/userServices.js";
import AppError from "../utilities/appError.js";
import catchAsync from "../utilities/catchAsync.js";
import { validationFieldsBecomeSeller } from "../utilities/validation/validationFieldsBecomeSeller.js";

// signup
export const createUserController = catchAsync(async (req,res,next) => {
    if(!req.body) return res.status(400).json({message:"fields are empty",status: 'failed'})
    const newUser = await createUser(req.body);

    res.status(200).json({
        status:"Success",
        data: newUser
    })
})
// login
export const loginUserController = catchAsync(async (req,res,next) => {
    const loginInfo = await loginUser(req.body)
    console.log(loginInfo);
    
        res.status(200).json({
        status:"Success",
        data: loginInfo
    })
})
// user profile
export const userProfileController = catchAsync(async (req,res,next) => {
    
    const _id = req?.user?._id;
    if(!_id) throw AppError.invalidCredentials("invalid token");
    const userProfileContainer = await userProfile(_id);
    return res.status(200).json({
        message:"Success",
        data: userProfileContainer
    })
})
// become seller;
export const becomeSellerController = catchAsync(async (req,res,next) => {
    
    const userId = req.user?._id;
    const userData = req.body;
    const role = req.body.role;
    validationFieldsBecomeSeller(userData, role);
    const nowYouAreSeller = await becomeSeller(userId, userData);
    
    

    return res.status(200).json({
        message:"Success",
        data: nowYouAreSeller
    })
})
// update user
export const updateUserController = catchAsync(async (req,res,next) => {
    const user_id = req.user._id;
    console.log(user_id);
    
    const updatedUser = await updateUser(user_id, req.body);
    
    return res.status(200).json({
        message:"Success",
        data: updatedUser
    });
})