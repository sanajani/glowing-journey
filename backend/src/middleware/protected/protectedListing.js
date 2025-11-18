import { User } from "../../models/User/User.js";
import jwt from 'jsonwebtoken';
import catchAsync from "../../utilities/catchAsync.js";
import { AppError } from "../../utilities/appError.js";

const JWTTOKENCODE = process.env.JWTTOKENCODEENV || 'this is code'

export const protectListing = catchAsync(async (req,res,next) => {
    let token;
    
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        token = req?.headers?.authorization?.split(' ')[1]
    }
    if(!token) return next(AppError.unauthorized("No token provided. please login"))

    const {_id} = jwt.verify(token,JWTTOKENCODE);

    const user = await User.findById(_id)
    if(!user) return next(AppError.unauthorized("Unauthorized User"))

    if(!user.role === 'landlord' || !user.role === 'tenant')return next(AppError.unauthorized("You are not able to list a house"));

    req.user = user;

    next();
})
