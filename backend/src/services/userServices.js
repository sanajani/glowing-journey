import { User } from "../models/User/User.js"
import {AppError} from "../utilities/appError.js";

export const createUser = async (userData) => {
    const {email, phoneNumber1} = userData;
    const isExistingUser = await User.findOne({
        $or:[
            {email},
            {phoneNumber1}
        ]
    })
    
    if(isExistingUser){
        const existingField = isExistingUser.email ? `Email is already exist` : 'phoneNumber1 is already exist'
        throw new AppError(existingField, 400)
    } 
    const user = User(userData)
    const newUser = await user.save();
    
    return newUser
}

export const getAllUsers = async () => {
    const users = await User.find();
    return users
}