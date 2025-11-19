import { User } from "../../models/User/User.js";
import catchAsync from "../../utilities/catchAsync.js";
import { AppError } from "../../utilities/appError.js";
import { Property } from "../../models/property/Property.js";


export const isAbleTolist = catchAsync(async (req,res,next) => {
    const userId = req?.user?._id;
    const user = await User.findById(userId);
    if(!user) return next(AppError.notFound("User not found in Property protect route"));
    const authorizedRoles = ['landlord', 'agent']
    if(authorizedRoles.includes(user?.role)){
       return next();
    }
    return next(AppError.unauthorized("please become an agent then try"))
})

export const isTheSameAuther = catchAsync(async (req,res,next) => {
    const userId = req?.user?._id;
    if(!userId) return next(AppError.unauthorized("User is Not Autherized"));

    const propertyIdParam = req?.params?.id;
    if(!propertyIdParam) return next(AppError.notFound("Property ID is missing"));

    const property = await Property.findById(propertyIdParam);
    if(!property) return next(AppError.notFound("Property Not Found"));

    if(property?.user.toString() === userId.toString()){
        return next();
    }

    return next(AppError.unauthorized("please Only edit your own properties"))

})
