import { User } from "../../models/User/User.js";
import jwt from 'jsonwebtoken';
import catchAsync from "../../utilities/catchAsync.js";
import { AppError } from "../../utilities/appError.js";

export const protect = catchAsync(async (req,res,next) => {
    let token;
    
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        token = req?.headers?.authorization?.split(' ')[1]
    }
    if(!token) throw new AppError("Not authorized", 499, 'error');

    const {_id} = jwt.verify(token,'thisisseceretkey',);

    const user = await User.findById(_id)

    if(!user) throw new AppError("User no longer exist", 401, 'error')

    req.user = user;

    next();
})
