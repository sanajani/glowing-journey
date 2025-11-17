import { becomeSeller, createUser, loginUser } from "../services/user/userServices.js";
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
// profile
export const userProfileController = (req,res,next) => {
    const user = req.user;
    if(!user) return res.status(409).json({
        message:"User not exist profile route",
        status:"Error profile"
    })
    const userRole = user.role;

    return res.status(200).json({
        message: userRole,
        status:"Success"
    })
}
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